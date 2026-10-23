import { S as require_jsx_runtime, b as useNavigate, y as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { a as utilityNote, h as laborLabel, i as guideSections, n as Route, r as cityFaqs, x as nearbyCities } from "./_ssr/router-D-dSA7zb.mjs";
import { n as AdRail, r as Calculator, t as AdInfeed } from "./_ssr/calculator-CIVUaEwF.mjs";
import { t as CityLink } from "./_ssr/city-search-BhcEj52T.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_city-DUUkMNJ8.js
var import_jsx_runtime = require_jsx_runtime();
function LocalGuide({ city }) {
	const sections = guideSections(city.state_code);
	const faqs = cityFaqs(city);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-4 grid gap-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "text-2xl font-semibold tracking-tight",
				children: [
					"How the ",
					city.city,
					" estimate is built"
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 grid gap-3 text-sm leading-relaxed text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					city.city,
					", ",
					city.state,
					" is not a renamed national average. The labor index is",
					" ",
					city.labor_rate_index.toFixed(2),
					", peak sun is ",
					city.solar_sun_hours.toFixed(2),
					" hours, and the bill slider starts at $",
					city.avg_electric_bill,
					", the planning figure we use for a typical house on ",
					city.local_utility_name,
					". Move any control and the roof price, the array size, and the 25-year savings update together."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Roof prices are installed-cost planning rates, multiplied by that labor index. They assume one layer comes off and the deck underneath can stay. Solar prices start at a 2026 national installed cost per watt and move only the labor share with the same index, because modules are a national commodity and roof labor is not." })]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-semibold tracking-tight",
				children: "2026 federal tax credits"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 grid gap-3 text-sm leading-relaxed text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"The 30% Residential Clean Energy Credit under Section 25D does not apply to expenditures after December 31, 2025. Public Law 119-21 ended it. In ",
						city.city,
						", a system you buy with cash or a loan and complete in 2026 does not get that credit, even if you signed the contract or paid a deposit in 2025. What matters is when the original installation was completed."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "If the array was placed in service by the end of 2025, the credit is claimed on the 2025 return with Form 5695. Unused credit carries forward. It was non-refundable: it could reduce federal income tax to zero, not produce a refund by itself." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"The path that can still touch a federal credit in 2026 is third-party ownership. The company that owns a lease or PPA may claim Section 48E if the project began construction by July 4, 2026 or is placed in service by December 31, 2027. That credit belongs to the owner. You see it only if they put it into the payment. A standard roof replacement in ",
						city.city,
						" — asphalt, metal, or tile — was never eligible, including when it was installed in the same week as the panels."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The calculator still runs the old 30% subtraction so you can compare a 2025 completion with a 2026 purchase. The default label says comparison for that reason. Do not put the subtracted number on a contract unless a tax preparer has told you the credit actually applies." })
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "text-2xl font-semibold tracking-tight",
				children: ["Codes and the roof under the array in ", city.state]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 grid gap-4",
				children: [sections.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm leading-relaxed text-muted",
					children: [city.city, " follows the state building code as amended locally, plus the utility's interconnect rules. Fire setbacks along the ridge and hips routinely shrink the rectangle that looked open in a satellite photo."]
				}) : sections.map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-base font-semibold",
					children: section.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm leading-relaxed text-muted",
					children: section.body
				})] }, section.title)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm leading-relaxed text-muted",
					children: "Permits, the interconnect, and any HOA each get a vote. Ridge setbacks and firefighter pathways often take 20% or more off a roof that looked empty from the street. The usable-roof slider is how you take that haircut before comparing payback. Do not mount a 25-year array on a covering with less than about 10 years left."
				})]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-2xl font-semibold tracking-tight",
					children: ["Net metering and ", city.local_utility_name]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-muted",
					children: utilityNote(city)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-muted",
					children: "The 25-year savings line values production at the retail rate implied by local bills. That is optimistic wherever export credits have been cut. Use it to rank roof materials and array sizes, then have the contractor rerun production on your azimuth, tilt, and shade under the tariff you will actually be on."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-semibold tracking-tight",
				children: "Questions homeowners ask"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid gap-3",
				children: faqs.map((faq) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
					className: "rounded-xl border border-line bg-surface px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
						className: "cursor-pointer text-sm font-semibold",
						children: faq.question
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted",
						children: faq.answer
					})]
				}, faq.question))
			})] })
		]
	});
}
function CityPage() {
	const { city } = Route.useLoaderData();
	const initial = Route.useSearch();
	const navigate = useNavigate({ from: "/cities/$city" });
	const nearby = nearbyCities(city);
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "text-sm text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "hover:text-ink",
							children: "Estimator"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "px-2",
							children: "/"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/cities",
							className: "hover:text-ink",
							children: "Cities"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "px-2",
							children: "/"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-ink",
							children: [
								city.city,
								", ",
								city.state_code
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-3 text-3xl font-semibold tracking-tight sm:text-4xl",
					children: [
						"Roof replacement and solar ROI in ",
						city.city,
						", ",
						city.state
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 max-w-2xl text-base leading-relaxed text-muted",
					children: [
						"Priced against ",
						city.local_utility_name,
						". The bill slider opens at $",
						city.avg_electric_bill,
						"/mo, labor is ",
						laborLabel(city.labor_rate_index).toLowerCase(),
						", and the array is sized from ",
						city.solar_sun_hours.toFixed(2),
						" peak sun hours."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
							label: "Utility",
							value: city.local_utility_name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
							label: "Typical bill",
							value: `$${city.avg_electric_bill}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
							label: "Peak sun",
							value: `${city.solar_sun_hours.toFixed(2)} hrs`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
							label: "Labor index",
							value: city.labor_rate_index.toFixed(2)
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calculator, {
						city,
						pathname: `/cities/${city.city_slug}`,
						initial,
						onSearch
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdInfeed, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocalGuide, { city }),
				nearby.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-2xl font-semibold tracking-tight",
						children: ["Other cities in ", city.state]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 divide-y divide-line overflow-hidden rounded-xl border border-line bg-surface",
						children: nearby.map((other) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CityLink, { city: other }) }, other.city_slug))
					})]
				}) : null
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "hidden lg:col-span-4 lg:block",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdRail, {})
		})]
	}) });
}
function Fact({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-line bg-surface px-3 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-xs font-medium text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "mt-1 text-sm font-semibold leading-snug break-words",
			children: value
		})]
	});
}
//#endregion
export { CityPage as component };
