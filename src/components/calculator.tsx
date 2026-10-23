import { useEffect, useMemo, useRef, useState } from "react"
import type { City } from "@/data/cities"
import {
  CREDIT_MODES,
  MATERIALS,
  MODEL,
  estimate,
  formatMoney,
  formatRatePercent,
  formatUnit,
  laborLabel,
  searchFromParams,
  type CreditMode,
  type EstimateParams,
  type EstimateSearch,
  type MaterialId,
} from "@/lib/estimate"
import { SavingsChart } from "@/components/savings-chart"

type Props = {
  city: City
  pathname: string
  initial: EstimateSearch
  onSearch: (params: EstimateParams) => void
}

function snapBill(bill: number): number {
  return Math.min(MODEL.billMax, Math.max(MODEL.billMin, Math.round(bill)))
}

export function Calculator({ city, pathname, initial, onSearch }: Props) {
  const [area, setArea] = useState(initial.area ?? MODEL.defaultArea)
  const [bill, setBill] = useState(initial.bill ?? snapBill(city.avg_electric_bill))
  const [usable, setUsable] = useState(initial.usable ?? MODEL.defaultUsable)
  const [material, setMaterial] = useState<MaterialId>(initial.material ?? "asphalt")
  const [credit, setCredit] = useState<CreditMode>(initial.credit ?? "itc30")
  const [copied, setCopied] = useState(false)
  const skip = useRef(true)
  const onSearchRef = useRef(onSearch)
  onSearchRef.current = onSearch

  useEffect(() => {
    if (skip.current) {
      skip.current = false
      return
    }
    const handle = window.setTimeout(() => {
      onSearchRef.current({ area, bill, usable, material, credit })
    }, 200)
    return () => window.clearTimeout(handle)
  }, [area, bill, usable, material, credit])

  const result = useMemo(
    () =>
      estimate({
        area,
        bill,
        usable,
        material,
        credit,
        laborRateIndex: city.labor_rate_index,
        avgElectricBill: city.avg_electric_bill,
        solarSunHours: city.solar_sun_hours,
      }),
    [area, bill, usable, material, credit, city],
  )

  const linkPath = `${pathname}?${searchFromParams({ area, bill, usable, material, credit })}`
  const payback =
    result.paybackYears == null
      ? "—"
      : result.paybackYears > 40
        ? "Beyond 40 years"
        : `${result.paybackYears.toFixed(1)} years`

  async function copyLink() {
    const absolute = `${window.location.origin}${linkPath}`
    try {
      await navigator.clipboard.writeText(absolute)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div>
      <div className="grid gap-6">
        <fieldset className="rounded-xl border border-line bg-surface p-4 sm:p-5">
          <legend className="px-1 text-sm font-semibold">1 · Roof area</legend>
          <div className="mt-3 flex items-baseline justify-between gap-3">
            <label htmlFor="roof-area" className="text-sm text-muted">
              Square feet to replace
            </label>
            <output htmlFor="roof-area" className="text-lg font-semibold tabular-nums">
              {area.toLocaleString("en-US")} sq ft
            </output>
          </div>
          <input
            id="roof-area"
            type="range"
            min={MODEL.areaMin}
            max={MODEL.areaMax}
            step={50}
            value={area}
            onChange={(event) => setArea(Number(event.target.value))}
            className="w-full"
          />
          <p className="text-sm text-muted">
            {result.squares.toFixed(1)} roofing squares. A square is 100 sq ft. Range{" "}
            {MODEL.areaMin.toLocaleString("en-US")}–{MODEL.areaMax.toLocaleString("en-US")}.
          </p>
        </fieldset>

        <fieldset className="rounded-xl border border-line bg-surface p-4 sm:p-5">
          <legend className="px-1 text-sm font-semibold">2 · Material</legend>
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            {MATERIALS.map((item) => {
              const selected = item.id === material
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setMaterial(item.id)}
                  className={
                    "min-h-11 rounded-lg border px-3 py-3 text-left transition-colors " +
                    (selected
                      ? "border-primary bg-primary/5"
                      : "border-line bg-canvas hover:border-primary/40")
                  }
                >
                  <span className="block text-sm font-semibold">{item.name}</span>
                  <span className="mt-1 block text-sm tabular-nums text-muted">
                    {item.tier} · {formatUnit(item.rate * city.labor_rate_index)} / sq ft
                  </span>
                </button>
              )
            })}
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted">{result.material.note}</p>
        </fieldset>

        <fieldset className="rounded-xl border border-line bg-surface p-4 sm:p-5">
          <legend className="px-1 text-sm font-semibold">3 · Monthly electric bill</legend>
          <div className="mt-3 flex items-baseline justify-between gap-3">
            <label htmlFor="electric-bill" className="text-sm text-muted">
              What you pay {city.local_utility_name} now
            </label>
            <output htmlFor="electric-bill" className="text-lg font-semibold tabular-nums">
              {formatMoney(bill)}
            </output>
          </div>
          <input
            id="electric-bill"
            type="range"
            min={MODEL.billMin}
            max={MODEL.billMax}
            step={1}
            value={bill}
            onChange={(event) => setBill(Number(event.target.value))}
            className="w-full"
          />
          <p className="text-sm text-muted">
            City typical is {formatMoney(city.avg_electric_bill)}. The model holds the retail rate
            and treats a higher bill as more usage — about {Math.round(result.monthlyKwh).toLocaleString("en-US")} kWh
            this month.
          </p>
        </fieldset>

        <fieldset className="rounded-xl border border-line bg-surface p-4 sm:p-5">
          <legend className="px-1 text-sm font-semibold">4 · Roof that can hold panels</legend>
          <div className="mt-3 flex items-baseline justify-between gap-3">
            <label htmlFor="usable-roof" className="text-sm text-muted">
              Usable share after setbacks and shade
            </label>
            <output htmlFor="usable-roof" className="text-lg font-semibold tabular-nums">
              {usable}%
            </output>
          </div>
          <input
            id="usable-roof"
            type="range"
            min={MODEL.usableMin}
            max={MODEL.usableMax}
            step={5}
            value={usable}
            onChange={(event) => setUsable(Number(event.target.value))}
            className="w-full"
          />
          <p className="text-sm text-muted">
            Fits {result.maxModules} modules ({result.maxKw.toFixed(1)} kW) on this roof. A 410 W
            module is about {MODEL.moduleSqFt} sq ft.
          </p>
        </fieldset>

        <fieldset className="rounded-xl border border-line bg-surface p-4 sm:p-5">
          <legend className="px-1 text-sm font-semibold">5 · Federal credit scenario</legend>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {CREDIT_MODES.map((mode) => {
              const selected = mode.id === credit
              return (
                <button
                  key={mode.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setCredit(mode.id)}
                  className={
                    "min-h-11 rounded-lg border px-3 py-3 text-left transition-colors " +
                    (selected
                      ? "border-primary bg-primary/5"
                      : "border-line bg-canvas hover:border-primary/40")
                  }
                >
                  <span className="block text-sm font-semibold">{mode.name}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-muted">{mode.note}</span>
                </button>
              )
            })}
          </div>
        </fieldset>
      </div>

      <div className="mt-6 grid gap-3 lg:grid-cols-3">
        <article className="min-w-0 rounded-xl border border-line bg-surface p-4">
          <h2 className="text-sm font-medium text-muted">Estimated roof cost</h2>
          <p className="mt-2 text-3xl font-semibold tabular-nums">{formatMoney(result.roofCost)}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {result.material.name} at {formatUnit(result.roofPerSqFt)} / sq ft after the local labor
            index. About a {result.material.lifeYears}-year service life on a simple slope.
          </p>
        </article>
        <article className="min-w-0 rounded-xl border border-line bg-surface p-4">
          <h2 className="text-sm font-medium text-muted">Net solar system cost</h2>
          <p className="mt-2 text-3xl font-semibold tabular-nums">{formatMoney(result.netSolar)}</p>
          <p className="mt-2 text-sm leading-relaxed text-ink">
            {credit === "itc30"
              ? `After a 30% comparison credit of ${formatMoney(result.federalCredit)}. The 2026 cash price is ${formatMoney(result.otherModeNet)}.`
              : `2026 cash price, no Section 25D credit. If a 30% ITC still applied, the net would be ${formatMoney(result.otherModeNet)}.`}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Gross {formatMoney(result.grossSolar)} for {result.systemKw.toFixed(1)} kW ({result.modules}{" "}
            modules) at {formatUnit(result.perWatt)} / watt.
          </p>
        </article>
        <article className="min-w-0 rounded-xl border border-line bg-surface p-4">
          <h2 className="text-sm font-medium text-muted">25-year utility savings</h2>
          <p className="mt-2 text-3xl font-semibold tabular-nums text-accent">
            {formatMoney(result.cumulativeSavings)}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Year 1 saves {formatMoney(result.yearOneSavings)} and covers {Math.round(result.offset * 100)}%
            of modeled use. Simple payback on the net above: {payback}.
          </p>
        </article>
      </div>

      {result.roofCapped ? (
        <p className="mt-3 rounded-lg border border-line bg-surface px-4 py-3 text-sm leading-relaxed">
          This bill wants a {result.idealKw.toFixed(1)} kW array. The usable roof fits{" "}
          {result.maxKw.toFixed(1)} kW. Savings follow the smaller system, so the bill is not fully
          offset.
        </p>
      ) : null}

      <p className="mt-3 text-sm leading-relaxed text-ink">
        Section 25D ended for expenditures after December 31, 2025. A standard roof never qualified
        for it. Switch the scenario if you are pricing a 2026 purchase. This is not tax advice.
      </p>

      <section className="mt-6 rounded-xl border border-line bg-surface p-4 sm:p-5">
        <h2 className="text-base font-semibold">Cumulative savings, 25 years</h2>
        <p className="mt-1 text-sm text-muted">
          {formatRatePercent(MODEL.escalation)}% utility escalation and {formatRatePercent(MODEL.degradation)}% annual
          degradation. Retail rate held at {result.retailRate.toFixed(3)} $/kWh, implied by the{" "}
          {formatMoney(city.avg_electric_bill)} typical bill.
        </p>
        <div className="mt-4">
          <SavingsChart series={result.series} />
        </div>
      </section>

      <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center">
        <label htmlFor="estimate-link" className="sr-only">
          Link to this estimate
        </label>
        <input
          id="estimate-link"
          readOnly
          value={linkPath}
          className="min-w-0 flex-1 rounded-lg border border-line bg-surface px-3 py-3 text-sm text-ink"
        />
        <button
          type="button"
          onClick={() => void copyLink()}
          className="min-h-11 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-on-primary"
        >
          {copied ? "Copied" : "Copy link"}
        </button>
      </div>

      <details className="mt-4 rounded-xl border border-line bg-surface px-4 py-3">
        <summary className="cursor-pointer text-sm font-semibold">Year-by-year savings</summary>
        <div className="mt-3 max-h-80 overflow-auto">
          <table className="w-full text-left text-sm">
            <thead className="text-muted">
              <tr>
                <th className="py-2 pr-3 font-medium">Year</th>
                <th className="py-2 pr-3 font-medium">Annual</th>
                <th className="py-2 font-medium">Cumulative</th>
              </tr>
            </thead>
            <tbody className="tabular-nums">
              {result.series.map((point) => (
                <tr key={point.year} className="border-t border-line">
                  <td className="py-2 pr-3">{point.year}</td>
                  <td className="py-2 pr-3">{formatMoney(point.annual)}</td>
                  <td className="py-2">{formatMoney(point.cumulative)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>

      <p className="mt-4 text-sm text-muted">
        Labor index {city.labor_rate_index.toFixed(2)} — {laborLabel(city.labor_rate_index)}. Sun hours{" "}
        {city.solar_sun_hours.toFixed(2)}. Utility {city.local_utility_name}.
      </p>
    </div>
  )
}
