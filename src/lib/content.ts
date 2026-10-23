import type { City } from "@/data/cities"
import { utilityNote } from "@/data/guides"
import { MATERIALS, MODEL, formatRatePercent, laborLabel } from "@/lib/estimate"

export type Faq = { question: string; answer: string }

export function cityFaqs(city: City): Faq[] {
  const place = `${city.city}, ${city.state_code}`
  return [
    {
      question: `Does the 30% federal solar tax credit still apply in ${city.city} in 2026?`,
      answer: `For a homeowner who buys the system, no. Section 25D, the Residential Clean Energy Credit, does not apply to expenditures after December 31, 2025, under the One Big Beautiful Bill Act (Public Law 119-21). A system placed in service in 2025 can still be claimed on the 2025 return with Form 5695, and unused credit can carry forward. A cash or loan project completed in ${place} in 2026 gets a $0 Section 25D credit. A lease or power-purchase agreement is different: the third-party owner, not the household, may still claim the Section 48E credit if construction began by July 4, 2026 or the system is placed in service by December 31, 2027, and may price some of that into the payment. This page is a planning model, not tax advice.`,
    },
    {
      question: `Does a roof replacement in ${city.city} qualify for a solar tax credit?`,
      answer: `A standard asphalt, standing-seam, or tile roof does not. Replacing the roof in the same contract as the solar does not move the deck, underlayment, or ordinary covering into qualified clean-energy property. When Section 25D applied, it covered the electricity-producing equipment — modules, inverters, racking, wiring, that labor, and batteries of at least 3 kWh — not the roof that happens to sit under it. The roof figure and the solar figure on this estimator stay separate for that reason.`,
    },
    {
      question: `How is the ${city.city} roof number calculated?`,
      answer: `Installed cost equals roof area times a national base rate for the material times the ${city.city} labor index of ${city.labor_rate_index.toFixed(2)} (${laborLabel(city.labor_rate_index).toLowerCase()}). Bases before the local index: asphalt shingle $${MATERIALS[0].rate.toFixed(2)} per square foot, standing-seam metal $${MATERIALS[1].rate.toFixed(2)}, tile or slate $${MATERIALS[2].rate.toFixed(2)}. The result is a planning price for tear-off and one layer on a straightforward slope. It does not add deck replacement, a second layer, steep-slope charges, skylights, or high-wind clips. A local bid can sit well outside this band.`,
    },
    {
      question: `How do ${city.solar_sun_hours.toFixed(2)} peak sun hours size an array in ${city.city}?`,
      answer: `The bill slider becomes monthly kilowatt-hours using a retail rate implied by ${city.city}'s typical bill of $${city.avg_electric_bill} at about ${MODEL.baselineMonthlyKwh} kWh, near the U.S. residential average. Annual use divided by peak sun hours times a ${MODEL.performanceRatio} performance ratio is the ideal array. ${city.city} is modeled at ${city.solar_sun_hours.toFixed(2)} peak sun hours. Production then steps down ${formatRatePercent(MODEL.degradation)}% a year. If that array does not fit on the share of roof marked usable, the model caps the system and the savings follow the smaller array, not the whole bill.`,
    },
    {
      question: `What should I know about solar billing with ${city.local_utility_name}?`,
      answer: utilityNote(city) + " Export credit is not automatically a full retail bill credit in 2026. If the export rate is below the rate you pay, a battery or a smaller array often beats covering every kilowatt-hour on paper.",
    },
    {
      question: "Which roof belongs under a 25-year array?",
      answer: "Standing-seam metal is the simplest clamp surface and usually the better roof if you will still own the house when an asphalt roof would be due again. Asphalt is the lower first cost; use a Class 4 shingle where hail sets the insurance terms. Tile and slate last, but they are heavy and they break under installers' feet. Do not put a 25-year array on a roof with less than about 10 years of life left. Reroof first, then mount.",
    },
    {
      question: `What does the 25-year savings figure leave out?`,
      answer: `It is cumulative utility-bill savings on modeled production for ${place}, with a ${formatRatePercent(MODEL.escalation)}% a year retail-rate increase and ${formatRatePercent(MODEL.degradation)}% a year degradation. It is not a guarantee. It does not subtract inverter replacement, insurance changes, cleaning, or the time value of money, and it values each kilowatt-hour at today's retail rate even when the export tariff is poorer than that. Use it to compare materials and sizes, then ask two contractors for a production model on the actual azimuth and shade.`,
    },
  ]
}

export function jsonLdFaqs(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  }
}
