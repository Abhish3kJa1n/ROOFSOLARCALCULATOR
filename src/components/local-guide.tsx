import type { City } from "@/data/cities"
import { guideSections, utilityNote } from "@/data/guides"
import { cityFaqs } from "@/lib/content"

export function LocalGuide({ city }: { city: City }) {
  const sections = guideSections(city.state_code)
  const faqs = cityFaqs(city)
  return (
    <div className="mt-4 grid gap-10">
      <section>
        <h2 className="text-2xl font-semibold tracking-tight">
          How the {city.city} estimate is built
        </h2>
        <div className="mt-3 grid gap-3 text-sm leading-relaxed text-muted">
          <p>
            {city.city}, {city.state} is not a renamed national average. The labor index is{" "}
            {city.labor_rate_index.toFixed(2)}, peak sun is {city.solar_sun_hours.toFixed(2)} hours, and
            the bill slider starts at ${city.avg_electric_bill}, the planning figure we use for a typical
            house on {city.local_utility_name}. Move any control and the roof price, the array size, and
            the 25-year savings update together.
          </p>
          <p>
            Roof prices are installed-cost planning rates, multiplied by that labor index. They assume
            one layer comes off and the deck underneath can stay. Solar prices start at a 2026 national
            installed cost per watt and move only the labor share with the same index, because modules
            are a national commodity and roof labor is not.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold tracking-tight">2026 federal tax credits</h2>
        <div className="mt-3 grid gap-3 text-sm leading-relaxed text-muted">
          <p>
            The 30% Residential Clean Energy Credit under Section 25D does not apply to expenditures
            after December 31, 2025. Public Law 119-21 ended it. In {city.city}, a system you buy with
            cash or a loan and complete in 2026 does not get that credit, even if you signed the
            contract or paid a deposit in 2025. What matters is when the original installation was
            completed.
          </p>
          <p>
            If the array was placed in service by the end of 2025, the credit is claimed on the 2025
            return with Form 5695. Unused credit carries forward. It was non-refundable: it could reduce
            federal income tax to zero, not produce a refund by itself.
          </p>
          <p>
            The path that can still touch a federal credit in 2026 is third-party ownership. The company
            that owns a lease or PPA may claim Section 48E if the project began construction by July 4,
            2026 or is placed in service by December 31, 2027. That credit belongs to the owner. You see
            it only if they put it into the payment. A standard roof replacement in {city.city} — asphalt,
            metal, or tile — was never eligible, including when it was installed in the same week as the
            panels.
          </p>
          <p>
            The calculator still runs the old 30% subtraction so you can compare a 2025 completion with a
            2026 purchase. The default label says comparison for that reason. Do not put the subtracted
            number on a contract unless a tax preparer has told you the credit actually applies.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold tracking-tight">
          Codes and the roof under the array in {city.state}
        </h2>
        <div className="mt-3 grid gap-4">
          {sections.length === 0 ? (
            <p className="text-sm leading-relaxed text-muted">
              {city.city} follows the state building code as amended locally, plus the utility's
              interconnect rules. Fire setbacks along the ridge and hips routinely shrink the rectangle
              that looked open in a satellite photo.
            </p>
          ) : (
            sections.map((section) => (
              <div key={section.title}>
                <h3 className="text-base font-semibold">{section.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{section.body}</p>
              </div>
            ))
          )}
          <p className="text-sm leading-relaxed text-muted">
            Permits, the interconnect, and any HOA each get a vote. Ridge setbacks and firefighter
            pathways often take 20% or more off a roof that looked empty from the street. The usable-roof
            slider is how you take that haircut before comparing payback. Do not mount a 25-year array on
            a covering with less than about 10 years left.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold tracking-tight">
          Net metering and {city.local_utility_name}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">{utilityNote(city)}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          The 25-year savings line values production at the retail rate implied by local bills. That is
          optimistic wherever export credits have been cut. Use it to rank roof materials and array sizes,
          then have the contractor rerun production on your azimuth, tilt, and shade under the tariff you
          will actually be on.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold tracking-tight">Questions homeowners ask</h2>
        <div className="mt-4 grid gap-3">
          {faqs.map((faq) => (
            <details key={faq.question} className="rounded-xl border border-line bg-surface px-4 py-3">
              <summary className="cursor-pointer text-sm font-semibold">{faq.question}</summary>
              <p className="mt-2 text-sm leading-relaxed text-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  )
}
