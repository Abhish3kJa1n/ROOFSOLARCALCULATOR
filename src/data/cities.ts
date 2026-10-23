import raw from "../../data/cities.json"

export type City = {
  city_slug: string
  city: string
  state: string
  state_code: string
  avg_electric_bill: number
  labor_rate_index: number
  local_utility_name: string
  solar_sun_hours: number
}

const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

function isCity(value: unknown): value is City {
  if (!value || typeof value !== "object") return false
  const row = value as Record<string, unknown>
  return (
    typeof row.city_slug === "string" &&
    SLUG.test(row.city_slug) &&
    typeof row.city === "string" &&
    typeof row.state === "string" &&
    typeof row.state_code === "string" &&
    row.state_code.length >= 2 &&
    typeof row.avg_electric_bill === "number" &&
    row.avg_electric_bill > 0 &&
    typeof row.labor_rate_index === "number" &&
    row.labor_rate_index > 0 &&
    typeof row.local_utility_name === "string" &&
    typeof row.solar_sun_hours === "number" &&
    row.solar_sun_hours > 0
  )
}

export const cities: City[] = (Array.isArray(raw) ? raw : []).filter(isCity)

const bySlug = new Map(cities.map((city) => [city.city_slug, city]))

export function getCity(slug: string): City | undefined {
  return bySlug.get(slug.toLowerCase())
}

export function nearbyCities(city: City, limit = 4): City[] {
  return cities
    .filter((other) => other.state_code === city.state_code && other.city_slug !== city.city_slug)
    .slice(0, limit)
}

export type StateGroup = {
  state: string
  state_code: string
  cities: City[]
}

export function citiesByState(): StateGroup[] {
  const groups = new Map<string, StateGroup>()
  for (const city of cities) {
    const existing = groups.get(city.state_code)
    if (existing) existing.cities.push(city)
    else groups.set(city.state_code, { state: city.state, state_code: city.state_code, cities: [city] })
  }
  return [...groups.values()]
    .map((group) => ({
      ...group,
      cities: [...group.cities].sort((a, b) => a.city.localeCompare(b.city)),
    }))
    .sort((a, b) => a.state.localeCompare(b.state))
}

export function searchCities(query: string): City[] {
  const needle = query.trim().toLowerCase()
  if (!needle) return cities
  return cities.filter((city) => {
    const hay = `${city.city} ${city.state} ${city.state_code} ${city.local_utility_name}`.toLowerCase()
    return hay.includes(needle)
  })
}

export const featuredSlugs = [
  "austin-tx",
  "denver-co",
  "phoenix-az",
  "charlotte-nc",
  "seattle-wa",
] as const

export function featuredCities(): City[] {
  return featuredSlugs.flatMap((slug) => {
    const city = bySlug.get(slug)
    return city ? [city] : []
  })
}

/** National planning baseline used on the home page — not a city route. */
export const nationalCity: City = {
  city_slug: "national",
  city: "the United States",
  state: "National average",
  state_code: "US",
  avg_electric_bill: 157,
  labor_rate_index: 1,
  local_utility_name: "your local utility",
  solar_sun_hours: 4.7,
}
