import { Link } from "@tanstack/react-router"
import { useMemo, useState } from "react"
import { searchCities, type City } from "@/data/cities"

export function CitySearch({
  id,
  placeholder = "Search a city, state, or utility",
}: {
  id: string
  placeholder?: string
}) {
  const [query, setQuery] = useState("")
  const matches = useMemo(() => (query.trim() ? searchCities(query).slice(0, 8) : []), [query])
  const listId = `${id}-list`

  return (
    <div className="relative">
      <label htmlFor={id} className="text-sm font-medium">
        Find your city
      </label>
      <input
        id={id}
        role="combobox"
        aria-expanded={matches.length > 0}
        aria-controls={listId}
        aria-autocomplete="list"
        value={query}
        placeholder={placeholder}
        onChange={(event) => setQuery(event.target.value)}
        className="mt-2 w-full rounded-lg border border-line bg-surface px-3 py-3 text-base text-ink outline-none focus-visible:border-primary"
      />
      {matches.length > 0 ? (
        <ul
          id={listId}
          role="listbox"
          className="absolute z-20 mt-2 w-full overflow-hidden rounded-lg border border-line bg-surface shadow-sm"
        >
          {matches.map((city) => (
            <li key={city.city_slug} role="option">
              <CityLink city={city} />
            </li>
          ))}
        </ul>
      ) : null}
      {query.trim() && matches.length === 0 ? (
        <p className="mt-2 text-sm text-muted">No city matches that. Try the state name.</p>
      ) : null}
    </div>
  )
}

export function CityLink({ city, compact = false }: { city: City; compact?: boolean }) {
  return (
    <Link
      to="/cities/$city"
      params={{ city: city.city_slug }}
      className="block px-3 py-3 hover:bg-canvas"
    >
      <span className="block text-sm font-semibold">
        {city.city}, {city.state_code}
      </span>
      {compact ? null : (
        <span className="mt-0.5 block text-sm text-muted">
          {city.local_utility_name} · {city.solar_sun_hours.toFixed(1)} sun hrs · $
          {city.avg_electric_bill}/mo typical
        </span>
      )}
    </Link>
  )
}
