import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router"
import { AdInfeed, AdRail } from "@/components/ad-slots"
import { Calculator } from "@/components/calculator"
import { CityLink } from "@/components/city-search"
import { LocalGuide } from "@/components/local-guide"
import { getCity, nearbyCities } from "@/data/cities"
import { cityFaqs, jsonLdFaqs } from "@/lib/content"
import { laborLabel, parseEstimateSearch, type EstimateParams } from "@/lib/estimate"

export const Route = createFileRoute("/cities/$city")({
  loader: ({ params }) => {
    const city = getCity(params.city)
    if (!city) throw notFound()
    return { city }
  },
  validateSearch: (search) => parseEstimateSearch(search as Record<string, unknown>),
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [] }
    const { city } = loaderData
    const title = `Roof Replacement & Solar ROI in ${city.city}, ${city.state_code} | Meridian Estimate`
    const description = `Estimate a roof replacement and solar payback in ${city.city}, ${city.state}. Defaults use ${city.local_utility_name}, a $${city.avg_electric_bill} bill, ${city.solar_sun_hours} peak sun hours, and a ${city.labor_rate_index} labor index.`
    return {
      meta: [
        { title },
        { name: "description", content: description },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(jsonLdFaqs(cityFaqs(city))),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Estimator" },
              { "@type": "ListItem", position: 2, name: "Cities" },
              { "@type": "ListItem", position: 3, name: `${city.city}, ${city.state_code}` },
            ],
          }),
        },
      ],
    }
  },
  notFoundComponent: CityMissing,
  component: CityPage,
})

function CityPage() {
  const { city } = Route.useLoaderData()
  const initial = Route.useSearch()
  const navigate = useNavigate({ from: "/cities/$city" })
  const nearby = nearbyCities(city)

  function onSearch(params: EstimateParams) {
    void navigate({
      search: params,
      replace: true,
      resetScroll: false,
    })
  }

  return (
    <main>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-8 lg:grid-cols-12 lg:px-6 lg:py-10">
        <div className="min-w-0 lg:col-span-8">
          <nav className="text-sm text-muted">
            <Link to="/" className="hover:text-ink">
              Estimator
            </Link>
            <span className="px-2">/</span>
            <Link to="/cities" className="hover:text-ink">
              Cities
            </Link>
            <span className="px-2">/</span>
            <span className="text-ink">
              {city.city}, {city.state_code}
            </span>
          </nav>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Roof replacement and solar ROI in {city.city}, {city.state}
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
            Priced against {city.local_utility_name}. The bill slider opens at $
            {city.avg_electric_bill}/mo, labor is {laborLabel(city.labor_rate_index).toLowerCase()}, and
            the array is sized from {city.solar_sun_hours.toFixed(2)} peak sun hours.
          </p>

          <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Fact label="Utility" value={city.local_utility_name} />
            <Fact label="Typical bill" value={`$${city.avg_electric_bill}`} />
            <Fact label="Peak sun" value={`${city.solar_sun_hours.toFixed(2)} hrs`} />
            <Fact label="Labor index" value={city.labor_rate_index.toFixed(2)} />
          </dl>

          <div className="mt-8">
            <Calculator
              city={city}
              pathname={`/cities/${city.city_slug}`}
              initial={initial}
              onSearch={onSearch}
            />
          </div>

          <AdInfeed />
          <LocalGuide city={city} />

          {nearby.length > 0 ? (
            <section className="mt-10">
              <h2 className="text-2xl font-semibold tracking-tight">Other cities in {city.state}</h2>
              <ul className="mt-4 divide-y divide-line overflow-hidden rounded-xl border border-line bg-surface">
                {nearby.map((other) => (
                  <li key={other.city_slug}>
                    <CityLink city={other} />
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>
        <div className="hidden lg:col-span-4 lg:block">
          <AdRail />
        </div>
      </div>
    </main>
  )
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-line bg-surface px-3 py-3">
      <dt className="text-xs font-medium text-muted">{label}</dt>
      <dd className="mt-1 text-sm font-semibold leading-snug break-words">{value}</dd>
    </div>
  )
}

function CityMissing() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 lg:px-6">
      <h1 className="text-3xl font-semibold tracking-tight">No estimate for that city</h1>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        That slug is not in the city dataset. Pick a city that is, or use the national estimator.
      </p>
      <p className="mt-6">
        <Link to="/cities" className="text-sm font-semibold text-primary">
          Browse cities
        </Link>
      </p>
    </main>
  )
}
