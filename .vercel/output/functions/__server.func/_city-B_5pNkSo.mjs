import { S as require_jsx_runtime, y as Link } from "./_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_city-B_5pNkSo.js
var import_jsx_runtime = require_jsx_runtime();
function CityMissing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-16 lg:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-3xl font-semibold tracking-tight",
				children: "No estimate for that city"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm leading-relaxed text-muted",
				children: "That slug is not in the city dataset. Pick a city that is, or use the national estimator."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/cities",
					className: "text-sm font-semibold text-primary",
					children: "Browse cities"
				})
			})
		]
	});
}
//#endregion
export { CityMissing as notFoundComponent };
