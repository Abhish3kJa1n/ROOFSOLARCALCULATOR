import { i as __toESM } from "../_runtime.mjs";
import { S as require_jsx_runtime, Y as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as searchCities, _ as cities, v as citiesByState } from "./router-D-dSA7zb.mjs";
import { t as CityLink } from "./city-search-BhcEj52T.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cities-wlkiQ0TQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CityIndex() {
	const groups = (0, import_react.useMemo)(() => citiesByState(), []);
	const [query, setQuery] = (0, import_react.useState)("");
	const matches = query.trim() ? searchCities(query) : [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-7xl px-4 py-8 lg:px-6 lg:py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium text-primary",
				children: "City pages"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "mt-2 text-3xl font-semibold tracking-tight sm:text-4xl",
				children: [cities.length, " roof and solar estimates, one template"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-base leading-relaxed text-muted",
				children: "Open a city and the H1, the utility, the bill slider, and the labor multiplier all come from that row. The route is the city slug. A new row is a new page."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				htmlFor: "city-filter",
				className: "mt-8 block text-sm font-medium",
				children: "Filter"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id: "city-filter",
				value: query,
				onChange: (event) => setQuery(event.target.value),
				placeholder: "Austin, Duke Energy, CO",
				className: "mt-2 w-full max-w-xl rounded-lg border border-line bg-surface px-3 py-3 text-base text-ink outline-none focus-visible:border-primary"
			}),
			query.trim() ? matches.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 divide-y divide-line overflow-hidden rounded-xl border border-line bg-surface",
				children: matches.map((city) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CityLink, { city }) }, city.city_slug))
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-sm text-muted",
				children: "No city matches that."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "States",
					className: "flex flex-wrap gap-2",
					children: groups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `#state-${group.state_code}`,
						className: "rounded-md border border-line bg-surface px-3 py-2 text-sm font-medium hover:border-primary",
						children: group.state_code
					}, group.state_code))
				}), groups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: `state-${group.state_code}`,
					className: "scroll-mt-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-xl font-semibold",
						children: [
							group.state,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-sm font-medium text-muted",
								children: [
									group.cities.length,
									" ",
									group.cities.length === 1 ? "city" : "cities"
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 divide-y divide-line overflow-hidden rounded-xl border border-line bg-surface",
						children: group.cities.map((city) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CityLink, { city }) }, city.city_slug))
					})]
				}, group.state_code))]
			})
		]
	});
}
//#endregion
export { CityIndex as component };
