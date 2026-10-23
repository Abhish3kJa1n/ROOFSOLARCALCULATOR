import { createFileRoute, useNavigate } from "@tanstack/react-router"
import { AdInfeed, AdRail } from "@/components/ad-slots"
import { Calculator } from "@/components/calculator"
import { CityLink, CitySearch } from "@/components/city-search"
import { featuredCities, nationalCity } from "@/data/cities"
import { MODEL, parseEstimateSearch, type EstimateParams } from "@/lib/estimate"

export const Route = createFileRoute("/")({
  validateSearch: (search) => parseEstimateSearch(search as Record<string, unknown>),
  head: () => ({
    meta: [
      { title: "Roof Replacement & Solar ROI Estimator | Meridian Estimate" },
      {
        name: "description",
        content:
          "Price a U.S. roof replacement and a home solar array in one live model. Adjust roof area, material, and electric bill. Open a city page for the local utility, sun hours, and labor index.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Meridian Estimate",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          areaServed: { "@type": "Country", name: "United States" },
          description:
            "Residential roof replacement cost and solar savings estimator with city-specific utility, sun, and labor inputs.",
        }),
      },
    ],
  }),
  component: Home,
})

function Home() {
  const initial = Route.useSearch()
  const navigate = useNavigate({ from: "/" })
  const featured = featuredCities()

  function onSearch(params: EstimateParams) {
    void navigate({ search: params, replace: true, resetScroll: false })
  }

  return (
    <main>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-8 lg:grid-cols-12 lg:px-6 lg:py-10">
        <div className="min-w-0 lg:col-span-8">
          <p className="text-sm font-medium text-primary">Roof replacement and solar payback</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Price the roof and the array before you call a contractor
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
            National labor baseline, {nationalCity.solar_sun_hours} peak sun hours, and a $
            {nationalCity.avg_electric_bill} typical bill. Pick a city when you want{" "}
            {nationalCity.local_utility_name} swapped for the real one — the title, the default bill,
            and the labor multiplier change with the route.
          </p>

          <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Stat label="Sun hours" value={`${nationalCity.solar_sun_hours.toFixed(1)}`} />
            <Stat label="Typical bill" value={`$${nationalCity.avg_electric_bill}`} />
            <Stat label="Labor index" value={nationalCity.labor_rate_index.toFixed(2)} />
            <Stat label="Default roof" value={`${MODEL.defaultArea.toLocaleString("en-US")} sq ft`} />
          </dl>

          <div className="mt-8">
            <CitySearch id="home-city-search" />
          </div>

          <div className="mt-8">
            <Calculator city={nationalCity} pathname="/" initial={initial} onSearch={onSearch} />
          </div>

          <AdInfeed />

          <section>
            <h2 className="text-2xl font-semibold tracking-tight">Start from a high-demand market</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Each city is the same estimator with its own utility, bill, sun hours, and labor index.
              Adding a row to the city dataset publishes another page. No second template.
            </p>
            <ul className="mt-4 divide-y divide-line overflow-hidden rounded-xl border border-line bg-surface">
              {featured.map((city) => (
                <li key={city.city_slug}>
                  <CityLink city={city} />
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-semibold tracking-tight">What the three numbers mean</h2>
            <div className="mt-3 grid gap-3 text-sm leading-relaxed text-muted">
              <p>
                Estimated roof cost is area times a material rate times the labor index. Asphalt,
                standing-seam metal, and tile or slate are the three grades. The price assumes tear-off
                of one layer on a walkable slope. Deck replacement is not in it.
              </p>
              <p>
                Net solar system cost is the installed array, with an optional 30% line for the former
                federal credit. That credit — Section 25D — does not apply to homeowner purchases
                completed after December 31, 2025. The 2026 cash price is one toggle away, and both
                figures stay on the card. The roof is never included in the credit.
              </p>
              <p>
                The 25-year figure is cumulative retail-rate savings on modeled production, escalating
                3% a year while the array degrades 0.5% a year. It ignores inverter replacement and any
                export rate below retail. If the bill-sized array does not fit on the usable roof, savings
                follow the array that fits.
              </p>
            </div>
          </section>
        </div>
        <div className="hidden lg:col-span-4 lg:block">
          <AdRail />
        </div>
      </div>
    </main>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-line bg-surface px-3 py-3">
      <dt className="text-xs font-medium text-muted">{label}</dt>
      <dd className="mt-1 text-base font-semibold tabular-nums">{value}</dd>
    </div>
  )
}
