import { i as __toESM } from "../_runtime.mjs";
import { S as require_jsx_runtime, Y as require_react, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as searchCities } from "./router-D-dSA7zb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/city-search-BhcEj52T.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CitySearch({ id, placeholder = "Search a city, state, or utility" }) {
	const [query, setQuery] = (0, import_react.useState)("");
	const matches = (0, import_react.useMemo)(() => query.trim() ? searchCities(query).slice(0, 8) : [], [query]);
	const listId = `${id}-list`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				htmlFor: id,
				className: "text-sm font-medium",
				children: "Find your city"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id,
				role: "combobox",
				"aria-expanded": matches.length > 0,
				"aria-controls": listId,
				"aria-autocomplete": "list",
				value: query,
				placeholder,
				onChange: (event) => setQuery(event.target.value),
				className: "mt-2 w-full rounded-lg border border-line bg-surface px-3 py-3 text-base text-ink outline-none focus-visible:border-primary"
			}),
			matches.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				id: listId,
				role: "listbox",
				className: "absolute z-20 mt-2 w-full overflow-hidden rounded-lg border border-line bg-surface shadow-sm",
				children: matches.map((city) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					role: "option",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CityLink, { city })
				}, city.city_slug))
			}) : null,
			query.trim() && matches.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: "No city matches that. Try the state name."
			}) : null
		]
	});
}
function CityLink({ city, compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/cities/$city",
		params: { city: city.city_slug },
		className: "block px-3 py-3 hover:bg-canvas",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "block text-sm font-semibold",
			children: [
				city.city,
				", ",
				city.state_code
			]
		}), compact ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "mt-0.5 block text-sm text-muted",
			children: [
				city.local_utility_name,
				" · ",
				city.solar_sun_hours.toFixed(1),
				" sun hrs · $",
				city.avg_electric_bill,
				"/mo typical"
			]
		})]
	});
}
//#endregion
export { CitySearch as n, CityLink as t };
