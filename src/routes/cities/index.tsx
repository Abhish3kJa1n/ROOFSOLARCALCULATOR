import { createFileRoute } from "@tanstack/react-router"
import { useMemo, useState } from "react"
import { CityLink } from "@/components/city-search"
import { cities, citiesByState, searchCities } from "@/data/cities"

export const Route = createFileRoute("/cities/")({
  head: () => ({
    meta: [
      { title: "U.S. City Roof & Solar Estimators | Meridian Estimate" },
      {
        name: "description",
        content:
          "City-by-city roof replacement and solar ROI pages. Each route loads the local utility, typical electric bill, peak sun hours, and labor index.",
      },
    ],
  }),
  component: CityIndex,
})

function CityIndex() {
  const groups = useMemo(() => citiesByState(), [])
  const [query, setQuery] = useState("")
  const matches = query.trim() ? searchCities(query) : []

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 lg:px-6 lg:py-10">
      <p className="text-sm font-medium text-primary">City pages</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
        {cities.length} roof and solar estimates, one template
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
        Open a city and the H1, the utility, the bill slider, and the labor multiplier all come from
        that row. The route is the city slug. A new row is a new page.
      </p>

      <label htmlFor="city-filter" className="mt-8 block text-sm font-medium">
        Filter
      </label>
      <input
        id="city-filter"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Austin, Duke Energy, CO"
        className="mt-2 w-full max-w-xl rounded-lg border border-line bg-surface px-3 py-3 text-base text-ink outline-none focus-visible:border-primary"
      />

      {query.trim() ? (
        matches.length > 0 ? (
          <ul className="mt-6 divide-y divide-line overflow-hidden rounded-xl border border-line bg-surface">
            {matches.map((city) => (
              <li key={city.city_slug}>
                <CityLink city={city} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-6 text-sm text-muted">No city matches that.</p>
        )
      ) : (
        <div className="mt-8 grid gap-8">
          <nav aria-label="States" className="flex flex-wrap gap-2">
            {groups.map((group) => (
              <a
                key={group.state_code}
                href={`#state-${group.state_code}`}
                className="rounded-md border border-line bg-surface px-3 py-2 text-sm font-medium hover:border-primary"
              >
                {group.state_code}
              </a>
            ))}
          </nav>
          {groups.map((group) => (
            <section key={group.state_code} id={`state-${group.state_code}`} className="scroll-mt-24">
              <h2 className="text-xl font-semibold">
                {group.state}{" "}
                <span className="text-sm font-medium text-muted">
                  {group.cities.length} {group.cities.length === 1 ? "city" : "cities"}
                </span>
              </h2>
              <ul className="mt-3 divide-y divide-line overflow-hidden rounded-xl border border-line bg-surface">
                {group.cities.map((city) => (
                  <li key={city.city_slug}>
                    <CityLink city={city} />
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </main>
  )
}
