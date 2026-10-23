import type { City } from "@/data/cities"

export type GuideTag =
  | "hurricane"
  | "hail"
  | "snow"
  | "wildfire"
  | "seismic"
  | "deregulated"
  | "high-rate"
  | "nem3"

const TAGS: Record<string, GuideTag[]> = {
  TX: ["hurricane", "hail", "deregulated"],
  OK: ["hail"],
  KS: ["hail"],
  NE: ["hail", "snow"],
  CO: ["hail", "snow", "wildfire"],
  WY: ["hail", "snow"],
  SD: ["hail", "snow"],
  ND: ["snow"],
  FL: ["hurricane", "high-rate"],
  LA: ["hurricane"],
  AL: ["hurricane"],
  MS: ["hurricane"],
  GA: ["hurricane"],
  SC: ["hurricane"],
  NC: ["hurricane"],
  CA: ["wildfire", "seismic", "high-rate", "nem3"],
  OR: ["wildfire"],
  WA: ["wildfire"],
  NM: ["wildfire", "hail"],
  AZ: ["wildfire", "hail"],
  UT: ["wildfire", "snow", "seismic"],
  ID: ["wildfire", "snow"],
  NV: ["wildfire"],
  HI: ["hurricane", "high-rate", "seismic"],
  AK: ["snow", "seismic"],
  NY: ["snow", "high-rate"],
  MA: ["snow", "high-rate"],
  CT: ["snow", "high-rate"],
  RI: ["snow", "high-rate"],
  NJ: ["snow", "high-rate"],
  VT: ["snow"],
  NH: ["snow"],
  ME: ["snow"],
  MN: ["snow"],
  WI: ["snow"],
  MI: ["snow"],
  MT: ["snow"],
  IL: ["snow"],
  OH: ["snow"],
  PA: ["snow"],
  DC: ["snow"],
  MD: ["snow"],
  VA: ["hurricane"],
}

const TAG_COPY: Record<GuideTag, { title: string; body: string }> = {
  hurricane: {
    title: "Wind and water",
    body: "Coastal and near-coastal counties design to higher basic wind speeds. A serious bid names the wind speed, the underlayment, whether the deck is sealed, and the clip or strap pattern. Miami-Dade HVHZ is a South Florida rule, not a license to use that assembly everywhere in a hurricane state. Inland houses in the same state are often a different code story.",
  },
  hail: {
    title: "Hail",
    body: "Hail, not birthday candles, retires a lot of roofs in this region. Insurers commonly ask for a UL 2218 Class 4 shingle or a metal panel with a hail rating. Class 4 is an impact test, not a promise the roof will never dent or that a claim will be approved.",
  },
  snow: {
    title: "Snow and ice",
    body: "Plan on the local ground-snow load and, where the ice-barrier rule applies, a self-adhered membrane along the eaves. A solar layout should leave a path for snow to leave the roof so it does not stack on the modules or dump onto the entry below.",
  },
  wildfire: {
    title: "Wildfire",
    body: "In wildland-urban zones the roof covering is usually Class A, and vents, gutters, and eaves get a harder look. Solar does not exempt the roof from ember or defensible-space rules. Confirm the zone before you fall in love with a material.",
  },
  seismic: {
    title: "Weight",
    body: "Tile, slate, and a solar array are dead load. On older houses a structural look before that weight goes up is part of the bid, not a change order you discover after tear-off.",
  },
  deregulated: {
    title: "Texas electricity is split",
    body: "Most of Texas is deregulated. Oncor, CenterPoint, TNMP, and AEP Texas deliver power; a retail provider sells it. Solar buyback is a feature of the retail plan and it moves. Austin Energy, CPS Energy, El Paso Electric, and Entergy Texas are not that model — they set their own solar tariffs. Austin's is a Value of Solar credit, not classic one-for-one net metering.",
  },
  "high-rate": {
    title: "High retail rates",
    body: "Rates here are high enough that a smaller, well-aimed array can still move the bill. A bigger system is not automatically better when midday exports are worth less than the power you buy in the evening.",
  },
  nem3: {
    title: "California net billing",
    body: "For PG&E, SCE, and SDG&E, the net billing tariff that replaced NEM 2.0 pays a much lower credit for midday exports than the retail rate. Batteries and using power as you make it matter more than a paper design that covers 100% of annual kilowatt-hours. LADWP, SMUD, and other municipal utilities run their own schedules — do not assume the investor-owned rule applies.",
  },
}

export function guideTags(stateCode: string): GuideTag[] {
  return TAGS[stateCode] ?? []
}

export function guideSections(stateCode: string): { title: string; body: string }[] {
  return guideTags(stateCode).map((tag) => TAG_COPY[tag])
}

export function utilityNote(city: City): string {
  const name = city.local_utility_name
  if (name === "Austin Energy") {
    return "Austin Energy bills on a Value of Solar tariff: production is credited on a formula the utility sets, not as a one-for-one retail kilowatt-hour. Size from that credit, not from a generic net-metering story."
  }
  if (name === "CPS Energy") {
    return "CPS Energy is municipal. Solar rebates and bill credits have been revised more than once. Ask for the current residential solar rate before treating exports as full retail."
  }
  if (name === "Los Angeles Department of Water and Power" || name === "SMUD" || name === "City of Palo Alto Utilities" || name === "Pasadena Water and Power" || name === "Seattle City Light" || name === "Tacoma Power" || name === "Colorado Springs Utilities" || name === "Fort Collins Utilities") {
    return `${name} is a municipal utility with its own interconnect and export rules. Do not copy a neighboring investor-owned tariff onto this house.`
  }
  if (name === "Salt River Project") {
    return "SRP residential plans have used demand charges and export credits that are not full retail. A design that ignores the demand window can look fine on annual kilowatt-hours and still miss the bill."
  }
  if (name === "Arizona Public Service" || name === "Tucson Electric Power" || name === "NV Energy") {
    return `${name} export credit for newer customers is generally not old-style full-retail net metering. Confirm the current export rate and any demand or time-of-use terms.`
  }
  if (name === "Hawaiian Electric") {
    return "Hawaiian Electric closed classic net metering years ago. Export programs and battery incentives change. Honolulu production is strong; the tariff, not the sunshine, is the constraint."
  }
  if (name === "Pacific Gas & Electric" || name === "Southern California Edison" || name === "San Diego Gas & Electric") {
    return `${name} residential solar placed under the net billing tariff earns a low credit for most exported midday power. Self-consumption and storage do more work than they did under NEM 2.0.`
  }
  if (name.includes("delivery area")) {
    return `${city.city} sits in a deregulated Texas delivery territory. The wires company does not buy your solar. The buyback rate is whatever the retail provider puts in the plan you actually switch to.`
  }
  if (name === "Consolidated Edison") {
    return "Con Edison solar compensation depends on the program the project qualifies for, including value-stack (VDER) versus older net-metering vintages. Get the current tariff in writing. Do not price a Manhattan roof like an upstate National Grid account."
  }
  return `${name} sets the export credit, the interconnect timeline, and often a production cap or a time-of-use schedule. Treat any "full retail net metering" claim as something to verify on the current tariff, not as a default.`
}
