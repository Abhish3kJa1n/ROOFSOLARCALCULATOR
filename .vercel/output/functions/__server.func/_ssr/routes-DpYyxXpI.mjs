import { S as require_jsx_runtime, b as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as nationalCity, l as MODEL, o as Route$4, y as featuredCities } from "./router-D-dSA7zb.mjs";
import { n as AdRail, r as Calculator, t as AdInfeed } from "./calculator-CIVUaEwF.mjs";
import { n as CitySearch, t as CityLink } from "./city-search-BhcEj52T.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DpYyxXpI.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const initial = Route$4.useSearch();
	const navigate = useNavigate({ from: "/" });
	const featured = featuredCities();
	function onSearch(params) {
		navigate({
			search: params,
			replace: true,
			resetScroll: false
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-8 lg:grid-cols-12 lg:px-6 lg:py-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 lg:col-span-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium text-primary",
					children: "Roof replacement and solar payback"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 text-3xl font-semibold tracking-tight sm:text-4xl",
					children: "Price the roof and the array before you call a contractor"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 max-w-2xl text-base leading-relaxed text-muted",
					children: [
						"National labor baseline, ",
						nationalCity.solar_sun_hours,
						" peak sun hours, and a $",
						nationalCity.avg_electric_bill,
						" typical bill. Pick a city when you want",
						" ",
						nationalCity.local_utility_name,
						" swapped for the real one — the title, the default bill, and the labor multiplier change with the route."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Sun hours",
							value: `${nationalCity.solar_sun_hours.toFixed(1)}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Typical bill",
							value: `$${nationalCity.avg_electric_bill}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Labor index",
							value: nationalCity.labor_rate_index.toFixed(2)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Default roof",
							value: `${MODEL.defaultArea.toLocaleString("en-US")} sq ft`
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CitySearch, { id: "home-city-search" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calculator, {
						city: nationalCity,
						pathname: "/",
						initial,
						onSearch
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdInfeed, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-semibold tracking-tight",
						children: "Start from a high-demand market"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted",
						children: "Each city is the same estimator with its own utility, bill, sun hours, and labor index. Adding a row to the city dataset publishes another page. No second template."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 divide-y divide-line overflow-hidden rounded-xl border border-line bg-surface",
						children: featured.map((city) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CityLink, { city }) }, city.city_slug))
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-semibold tracking-tight",
						children: "What the three numbers mean"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 grid gap-3 text-sm leading-relaxed text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Estimated roof cost is area times a material rate times the labor index. Asphalt, standing-seam metal, and tile or slate are the three grades. The price assumes tear-off of one layer on a walkable slope. Deck replacement is not in it." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Net solar system cost is the installed array, with an optional 30% line for the former federal credit. That credit — Section 25D — does not apply to homeowner purchases completed after December 31, 2025. The 2026 cash price is one toggle away, and both figures stay on the card. The roof is never included in the credit." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The 25-year figure is cumulative retail-rate savings on modeled production, escalating 3% a year while the array degrades 0.5% a year. It ignores inverter replacement and any export rate below retail. If the bill-sized array does not fit on the usable roof, savings follow the array that fits." })
						]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "hidden lg:col-span-4 lg:block",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdRail, {})
		})]
	}) });
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-line bg-surface px-3 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-xs font-medium text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "mt-1 text-base font-semibold tabular-nums",
			children: value
		})]
	});
}
//#endregion
export { Home as component };
