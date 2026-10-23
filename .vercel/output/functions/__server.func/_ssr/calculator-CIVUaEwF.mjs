import { i as __toESM } from "../_runtime.mjs";
import { S as require_jsx_runtime, Y as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as MATERIALS, d as formatMoney, f as formatMoneyCompact, g as searchFromParams, h as laborLabel, l as MODEL, m as formatUnit, p as formatRatePercent, s as CREDIT_MODES, u as estimate } from "./router-D-dSA7zb.mjs";
import { a as CartesianGrid, i as Area, n as YAxis, o as ResponsiveContainer, r as XAxis, s as Tooltip, t as AreaChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/calculator-CIVUaEwF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdLabel() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mb-2 text-xs font-medium tracking-wide text-muted",
		children: "Advertisement"
	});
}
function AdRail() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
		className: "ml-auto hidden w-ad-rail lg:block",
		"aria-label": "Advertisement",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "sticky top-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdLabel, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"data-ad-slot": "rail-300x600",
				"data-ad-format": "half-page",
				className: "flex h-ad-rail w-ad-rail shrink-0 flex-col overflow-hidden rounded-xl border border-dashed border-line bg-surface",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid flex-1 place-items-center px-4 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm leading-relaxed text-muted",
						children: ["300 × 600", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block",
							children: "Half-page display unit"
						})]
					})
				})
			})]
		})
	});
}
function AdInfeed() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		"aria-label": "Advertisement",
		className: "my-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdLabel, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"data-ad-slot": "infeed-native",
			"data-ad-format": "in-feed",
			className: "flex h-ad-feed w-full shrink-0 flex-col overflow-hidden rounded-xl border border-dashed border-line bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid flex-1 place-items-center px-4 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm leading-relaxed text-muted",
					children: ["In-feed native unit", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block",
						children: "Reserved height — does not shift the page"
					})]
				})
			})
		})]
	});
}
function useReducedMotion() {
	const [reduce, setReduce] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const media = window.matchMedia("(prefers-reduced-motion: reduce)");
		const update = () => setReduce(media.matches);
		update();
		media.addEventListener("change", update);
		return () => media.removeEventListener("change", update);
	}, []);
	return reduce;
}
function SavingsChart({ series }) {
	const [ready, setReady] = (0, import_react.useState)(false);
	const reduce = useReducedMotion();
	(0, import_react.useEffect)(() => setReady(true), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-64 w-full min-w-0",
		children: ready ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
			width: "100%",
			height: "100%",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
				data: series,
				margin: {
					top: 8,
					right: 8,
					left: 0,
					bottom: 0
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
						stroke: "var(--color-line)",
						vertical: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
						dataKey: "year",
						tick: {
							fill: "var(--color-muted)",
							fontSize: 12
						},
						tickLine: false,
						axisLine: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						tickFormatter: (value) => formatMoneyCompact(value),
						tick: {
							fill: "var(--color-muted)",
							fontSize: 12
						},
						tickLine: false,
						axisLine: false,
						width: 56
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
						formatter: (value) => {
							const amount = typeof value === "number" ? value : Number(value);
							return [formatMoney(Number.isFinite(amount) ? amount : 0), "Cumulative savings"];
						},
						labelFormatter: (label) => `Year ${label}`,
						contentStyle: {
							background: "var(--color-surface)",
							border: "1px solid var(--color-line)",
							borderRadius: "0.75rem",
							color: "var(--color-ink)"
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
						type: "monotone",
						dataKey: "cumulative",
						stroke: "var(--color-primary)",
						fill: "var(--color-primary)",
						fillOpacity: .12,
						strokeWidth: 2,
						isAnimationActive: !reduce
					})
				]
			})
		}) : null
	});
}
function snapBill(bill) {
	return Math.min(MODEL.billMax, Math.max(MODEL.billMin, Math.round(bill)));
}
function Calculator({ city, pathname, initial, onSearch }) {
	const [area, setArea] = (0, import_react.useState)(initial.area ?? MODEL.defaultArea);
	const [bill, setBill] = (0, import_react.useState)(initial.bill ?? snapBill(city.avg_electric_bill));
	const [usable, setUsable] = (0, import_react.useState)(initial.usable ?? MODEL.defaultUsable);
	const [material, setMaterial] = (0, import_react.useState)(initial.material ?? "asphalt");
	const [credit, setCredit] = (0, import_react.useState)(initial.credit ?? "itc30");
	const [copied, setCopied] = (0, import_react.useState)(false);
	const skip = (0, import_react.useRef)(true);
	const onSearchRef = (0, import_react.useRef)(onSearch);
	onSearchRef.current = onSearch;
	(0, import_react.useEffect)(() => {
		if (skip.current) {
			skip.current = false;
			return;
		}
		const handle = window.setTimeout(() => {
			onSearchRef.current({
				area,
				bill,
				usable,
				material,
				credit
			});
		}, 200);
		return () => window.clearTimeout(handle);
	}, [
		area,
		bill,
		usable,
		material,
		credit
	]);
	const result = (0, import_react.useMemo)(() => estimate({
		area,
		bill,
		usable,
		material,
		credit,
		laborRateIndex: city.labor_rate_index,
		avgElectricBill: city.avg_electric_bill,
		solarSunHours: city.solar_sun_hours
	}), [
		area,
		bill,
		usable,
		material,
		credit,
		city
	]);
	const linkPath = `${pathname}?${searchFromParams({
		area,
		bill,
		usable,
		material,
		credit
	})}`;
	const payback = result.paybackYears == null ? "—" : result.paybackYears > 40 ? "Beyond 40 years" : `${result.paybackYears.toFixed(1)} years`;
	async function copyLink() {
		const absolute = `${window.location.origin}${linkPath}`;
		try {
			await navigator.clipboard.writeText(absolute);
			setCopied(true);
			window.setTimeout(() => setCopied(false), 1600);
		} catch {
			setCopied(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
					className: "rounded-xl border border-line bg-surface p-4 sm:p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
							className: "px-1 text-sm font-semibold",
							children: "1 · Roof area"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex items-baseline justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "roof-area",
								className: "text-sm text-muted",
								children: "Square feet to replace"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("output", {
								htmlFor: "roof-area",
								className: "text-lg font-semibold tabular-nums",
								children: [area.toLocaleString("en-US"), " sq ft"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "roof-area",
							type: "range",
							min: MODEL.areaMin,
							max: MODEL.areaMax,
							step: 50,
							value: area,
							onChange: (event) => setArea(Number(event.target.value)),
							className: "w-full"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted",
							children: [
								result.squares.toFixed(1),
								" roofing squares. A square is 100 sq ft. Range",
								" ",
								MODEL.areaMin.toLocaleString("en-US"),
								"–",
								MODEL.areaMax.toLocaleString("en-US"),
								"."
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
					className: "rounded-xl border border-line bg-surface p-4 sm:p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
							className: "px-1 text-sm font-semibold",
							children: "2 · Material"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 grid gap-3 sm:grid-cols-3",
							children: MATERIALS.map((item) => {
								const selected = item.id === material;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									"aria-pressed": selected,
									onClick: () => setMaterial(item.id),
									className: "min-h-11 rounded-lg border px-3 py-3 text-left transition-colors " + (selected ? "border-primary bg-primary/5" : "border-line bg-canvas hover:border-primary/40"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-sm font-semibold",
										children: item.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "mt-1 block text-sm tabular-nums text-muted",
										children: [
											item.tier,
											" · ",
											formatUnit(item.rate * city.labor_rate_index),
											" / sq ft"
										]
									})]
								}, item.id);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted",
							children: result.material.note
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
					className: "rounded-xl border border-line bg-surface p-4 sm:p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
							className: "px-1 text-sm font-semibold",
							children: "3 · Monthly electric bill"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex items-baseline justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								htmlFor: "electric-bill",
								className: "text-sm text-muted",
								children: [
									"What you pay ",
									city.local_utility_name,
									" now"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("output", {
								htmlFor: "electric-bill",
								className: "text-lg font-semibold tabular-nums",
								children: formatMoney(bill)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "electric-bill",
							type: "range",
							min: MODEL.billMin,
							max: MODEL.billMax,
							step: 1,
							value: bill,
							onChange: (event) => setBill(Number(event.target.value)),
							className: "w-full"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted",
							children: [
								"City typical is ",
								formatMoney(city.avg_electric_bill),
								". The model holds the retail rate and treats a higher bill as more usage — about ",
								Math.round(result.monthlyKwh).toLocaleString("en-US"),
								" kWh this month."
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
					className: "rounded-xl border border-line bg-surface p-4 sm:p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
							className: "px-1 text-sm font-semibold",
							children: "4 · Roof that can hold panels"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex items-baseline justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "usable-roof",
								className: "text-sm text-muted",
								children: "Usable share after setbacks and shade"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("output", {
								htmlFor: "usable-roof",
								className: "text-lg font-semibold tabular-nums",
								children: [usable, "%"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "usable-roof",
							type: "range",
							min: MODEL.usableMin,
							max: MODEL.usableMax,
							step: 5,
							value: usable,
							onChange: (event) => setUsable(Number(event.target.value)),
							className: "w-full"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted",
							children: [
								"Fits ",
								result.maxModules,
								" modules (",
								result.maxKw.toFixed(1),
								" kW) on this roof. A 410 W module is about ",
								MODEL.moduleSqFt,
								" sq ft."
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
					className: "rounded-xl border border-line bg-surface p-4 sm:p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
						className: "px-1 text-sm font-semibold",
						children: "5 · Federal credit scenario"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 grid gap-3 sm:grid-cols-2",
						children: CREDIT_MODES.map((mode) => {
							const selected = mode.id === credit;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								"aria-pressed": selected,
								onClick: () => setCredit(mode.id),
								className: "min-h-11 rounded-lg border px-3 py-3 text-left transition-colors " + (selected ? "border-primary bg-primary/5" : "border-line bg-canvas hover:border-primary/40"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-sm font-semibold",
									children: mode.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block text-sm leading-relaxed text-muted",
									children: mode.note
								})]
							}, mode.id);
						})
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid gap-3 lg:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "min-w-0 rounded-xl border border-line bg-surface p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-sm font-medium text-muted",
							children: "Estimated roof cost"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-3xl font-semibold tabular-nums",
							children: formatMoney(result.roofCost)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: [
								result.material.name,
								" at ",
								formatUnit(result.roofPerSqFt),
								" / sq ft after the local labor index. About a ",
								result.material.lifeYears,
								"-year service life on a simple slope."
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "min-w-0 rounded-xl border border-line bg-surface p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-sm font-medium text-muted",
							children: "Net solar system cost"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-3xl font-semibold tabular-nums",
							children: formatMoney(result.netSolar)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-ink",
							children: credit === "itc30" ? `After a 30% comparison credit of ${formatMoney(result.federalCredit)}. The 2026 cash price is ${formatMoney(result.otherModeNet)}.` : `2026 cash price, no Section 25D credit. If a 30% ITC still applied, the net would be ${formatMoney(result.otherModeNet)}.`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: [
								"Gross ",
								formatMoney(result.grossSolar),
								" for ",
								result.systemKw.toFixed(1),
								" kW (",
								result.modules,
								" ",
								"modules) at ",
								formatUnit(result.perWatt),
								" / watt."
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "min-w-0 rounded-xl border border-line bg-surface p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-sm font-medium text-muted",
							children: "25-year utility savings"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-3xl font-semibold tabular-nums text-accent",
							children: formatMoney(result.cumulativeSavings)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: [
								"Year 1 saves ",
								formatMoney(result.yearOneSavings),
								" and covers ",
								Math.round(result.offset * 100),
								"% of modeled use. Simple payback on the net above: ",
								payback,
								"."
							]
						})
					]
				})
			]
		}),
		result.roofCapped ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-3 rounded-lg border border-line bg-surface px-4 py-3 text-sm leading-relaxed",
			children: [
				"This bill wants a ",
				result.idealKw.toFixed(1),
				" kW array. The usable roof fits",
				" ",
				result.maxKw.toFixed(1),
				" kW. Savings follow the smaller system, so the bill is not fully offset."
			]
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-sm leading-relaxed text-ink",
			children: "Section 25D ended for expenditures after December 31, 2025. A standard roof never qualified for it. Switch the scenario if you are pricing a 2026 purchase. This is not tax advice."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-6 rounded-xl border border-line bg-surface p-4 sm:p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-base font-semibold",
					children: "Cumulative savings, 25 years"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-sm text-muted",
					children: [
						formatRatePercent(MODEL.escalation),
						"% utility escalation and ",
						formatRatePercent(MODEL.degradation),
						"% annual degradation. Retail rate held at ",
						result.retailRate.toFixed(3),
						" $/kWh, implied by the",
						" ",
						formatMoney(city.avg_electric_bill),
						" typical bill."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SavingsChart, { series: result.series })
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 flex flex-col gap-2 sm:flex-row sm:items-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: "estimate-link",
					className: "sr-only",
					children: "Link to this estimate"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "estimate-link",
					readOnly: true,
					value: linkPath,
					className: "min-w-0 flex-1 rounded-lg border border-line bg-surface px-3 py-3 text-sm text-ink"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => void copyLink(),
					className: "min-h-11 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-on-primary",
					children: copied ? "Copied" : "Copy link"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
			className: "mt-4 rounded-xl border border-line bg-surface px-4 py-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
				className: "cursor-pointer text-sm font-semibold",
				children: "Year-by-year savings"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 max-h-80 overflow-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full text-left text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "text-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-2 pr-3 font-medium",
								children: "Year"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-2 pr-3 font-medium",
								children: "Annual"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-2 font-medium",
								children: "Cumulative"
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
						className: "tabular-nums",
						children: result.series.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-t border-line",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2 pr-3",
									children: point.year
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2 pr-3",
									children: formatMoney(point.annual)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2",
									children: formatMoney(point.cumulative)
								})
							]
						}, point.year))
					})]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-4 text-sm text-muted",
			children: [
				"Labor index ",
				city.labor_rate_index.toFixed(2),
				" — ",
				laborLabel(city.labor_rate_index),
				". Sun hours",
				" ",
				city.solar_sun_hours.toFixed(2),
				". Utility ",
				city.local_utility_name,
				"."
			]
		})
	] });
}
//#endregion
export { AdRail as n, Calculator as r, AdInfeed as t };
