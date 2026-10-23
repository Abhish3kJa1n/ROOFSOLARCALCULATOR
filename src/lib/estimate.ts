export const MATERIALS = [
  {
    id: "asphalt",
    name: "Asphalt shingle",
    tier: "$$",
    rate: 5.85,
    lifeYears: 25,
    note: "Architectural laminate. Lowest installed cost. Class 4 is the usual hail upgrade.",
  },
  {
    id: "metal",
    name: "Standing seam metal",
    tier: "$$$",
    rate: 14.25,
    lifeYears: 45,
    note: "Concealed-fastener panels. The simplest surface for solar clamps.",
  },
  {
    id: "tile",
    name: "Tile / slate",
    tier: "$$$$",
    rate: 22.5,
    lifeYears: 50,
    note: "Concrete tile or natural slate. Heavy — structure has to be checked before solar.",
  },
] as const

export type MaterialId = (typeof MATERIALS)[number]["id"]

export const CREDIT_MODES = [
  {
    id: "itc30",
    name: "30% ITC comparison",
    note: "Subtracts 30%. Only if the system was placed in service by Dec 31, 2025 — or as a side-by-side.",
  },
  {
    id: "cash2026",
    name: "2026 cash price",
    note: "No Section 25D credit. Use this for a homeowner purchase completed in 2026.",
  },
] as const

export type CreditMode = (typeof CREDIT_MODES)[number]["id"]

export const MODEL = {
  baselineMonthlyKwh: 877,
  performanceRatio: 0.8,
  degradation: 0.005,
  escalation: 0.03,
  itcRate: 0.3,
  dollarsPerWatt: 2.95,
  solarLaborShare: 0.28,
  moduleWatts: 410,
  moduleSqFt: 20.5,
  years: 25,
  defaultArea: 2000,
  defaultUsable: 40,
  areaMin: 1000,
  areaMax: 5000,
  billMin: 80,
  billMax: 600,
  usableMin: 20,
  usableMax: 70,
} as const

export type EstimateInput = {
  area: number
  bill: number
  usable: number
  material: MaterialId
  credit: CreditMode
  laborRateIndex: number
  avgElectricBill: number
  solarSunHours: number
}

export type YearPoint = {
  year: number
  annual: number
  cumulative: number
}

export type Estimate = {
  material: (typeof MATERIALS)[number]
  roofPerSqFt: number
  squares: number
  roofCost: number
  retailRate: number
  monthlyKwh: number
  annualKwh: number
  idealKw: number
  maxModules: number
  maxKw: number
  systemKw: number
  modules: number
  roofCapped: boolean
  annualProduction: number
  offset: number
  perWatt: number
  grossSolar: number
  federalCredit: number
  netSolar: number
  otherModeNet: number
  yearOneSavings: number
  cumulativeSavings: number
  paybackYears: number | null
  series: YearPoint[]
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value))
}

export function materialById(id: MaterialId) {
  return MATERIALS.find((material) => material.id === id) ?? MATERIALS[0]
}

export function estimate(input: EstimateInput): Estimate {
  const material = materialById(input.material)
  const area = clamp(input.area, MODEL.areaMin, MODEL.areaMax)
  const bill = clamp(input.bill, MODEL.billMin, MODEL.billMax)
  const usable = clamp(input.usable, MODEL.usableMin, MODEL.usableMax)
  const labor = input.laborRateIndex > 0 ? input.laborRateIndex : 1
  const sun = input.solarSunHours > 0 ? input.solarSunHours : 4.5
  const retailRate = (input.avgElectricBill > 0 ? input.avgElectricBill : bill) / MODEL.baselineMonthlyKwh

  const roofPerSqFt = material.rate * labor
  const roofCost = area * roofPerSqFt
  const squares = area / 100

  const monthlyKwh = bill / retailRate
  const annualKwh = monthlyKwh * 12
  const idealKw = annualKwh / 365 / (sun * MODEL.performanceRatio)
  const maxModules = Math.max(0, Math.floor((area * (usable / 100)) / MODEL.moduleSqFt))
  const maxKw = (maxModules * MODEL.moduleWatts) / 1000
  const roofCapped = idealKw > maxKw + 0.05
  const systemKw = Math.min(idealKw, maxKw)
  const modules = roofCapped ? maxModules : Math.max(0, Math.round((systemKw * 1000) / MODEL.moduleWatts))

  const annualProduction = systemKw * sun * 365 * MODEL.performanceRatio
  const offset = annualKwh > 0 ? annualProduction / annualKwh : 0
  const perWatt = MODEL.dollarsPerWatt * (1 - MODEL.solarLaborShare + MODEL.solarLaborShare * labor)
  const grossSolar = systemKw * 1000 * perWatt
  const itcNet = grossSolar * (1 - MODEL.itcRate)
  const federalCredit = input.credit === "itc30" ? grossSolar * MODEL.itcRate : 0
  const netSolar = grossSolar - federalCredit
  const otherModeNet = input.credit === "itc30" ? grossSolar : itcNet

  const series: YearPoint[] = []
  let production = annualProduction
  let rate = retailRate
  let cumulative = 0
  for (let year = 1; year <= MODEL.years; year += 1) {
    const annual = production * rate
    cumulative += annual
    series.push({ year, annual, cumulative })
    production *= 1 - MODEL.degradation
    rate *= 1 + MODEL.escalation
  }

  const yearOneSavings = series[0]?.annual ?? 0
  const paybackYears = yearOneSavings > 0 ? netSolar / yearOneSavings : null

  return {
    material,
    roofPerSqFt,
    squares,
    roofCost,
    retailRate,
    monthlyKwh,
    annualKwh,
    idealKw,
    maxModules,
    maxKw,
    systemKw,
    modules,
    roofCapped,
    annualProduction,
    offset,
    perWatt,
    grossSolar,
    federalCredit,
    netSolar,
    otherModeNet,
    yearOneSavings,
    cumulativeSavings: cumulative,
    paybackYears,
    series,
  }
}

export function formatMoney(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value)
}

export function formatUnit(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value)
}

export function formatMoneyCompact(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value)
}

export function formatRatePercent(rate: number): string {
  const points = Math.round(rate * 1000) / 10
  return Number.isInteger(points) ? String(points) : points.toFixed(1)
}

export function laborLabel(index: number): string {
  const pct = Math.round((index - 1) * 100)
  if (pct === 0) return "At the national labor baseline"
  if (pct > 0) return `${pct}% above the national labor baseline`
  return `${Math.abs(pct)}% below the national labor baseline`
}

const intIn = (value: unknown, min: number, max: number): number | undefined => {
  const number = typeof value === "number" ? value : typeof value === "string" ? Number(value) : Number.NaN
  if (!Number.isFinite(number)) return undefined
  const rounded = Math.round(number)
  if (rounded < min || rounded > max) return undefined
  return rounded
}

export type EstimateSearch = {
  area?: number
  bill?: number
  usable?: number
  material?: MaterialId
  credit?: CreditMode
}

export function parseEstimateSearch(search: Record<string, unknown>): EstimateSearch {
  const material = MATERIALS.some((item) => item.id === search.material)
    ? (search.material as MaterialId)
    : undefined
  const credit = CREDIT_MODES.some((item) => item.id === search.credit)
    ? (search.credit as CreditMode)
    : undefined
  return {
    area: intIn(search.area, MODEL.areaMin, MODEL.areaMax),
    bill: intIn(search.bill, MODEL.billMin, MODEL.billMax),
    usable: intIn(search.usable, MODEL.usableMin, MODEL.usableMax),
    material,
    credit,
  }
}

export type EstimateParams = {
  area: number
  bill: number
  usable: number
  material: MaterialId
  credit: CreditMode
}

export function searchFromParams(params: EstimateParams): string {
  const query = new URLSearchParams()
  query.set("area", String(params.area))
  query.set("bill", String(params.bill))
  query.set("usable", String(params.usable))
  query.set("material", params.material)
  query.set("credit", params.credit)
  return query.toString()
}
