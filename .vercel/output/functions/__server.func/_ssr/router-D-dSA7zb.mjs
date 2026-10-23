import { i as __toESM } from "../_runtime.mjs";
import { J as notFound, S as require_jsx_runtime, Y as require_react, _ as createFileRoute, d as Scripts, f as HeadContent, g as lazyRouteComponent, h as Outlet, m as createRouter, v as createRootRoute, x as useRouter, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as TriangleAlert } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cities-Cdg2i9mo.js
var cities_default = /*#__PURE__*/ JSON.parse("[{\"city_slug\":\"austin-tx\",\"city\":\"Austin\",\"state\":\"Texas\",\"state_code\":\"TX\",\"avg_electric_bill\":168,\"labor_rate_index\":1.06,\"local_utility_name\":\"Austin Energy\",\"solar_sun_hours\":5.25},{\"city_slug\":\"plano-tx\",\"city\":\"Plano\",\"state\":\"Texas\",\"state_code\":\"TX\",\"avg_electric_bill\":172,\"labor_rate_index\":1.03,\"local_utility_name\":\"Oncor delivery area\",\"solar_sun_hours\":5.05},{\"city_slug\":\"frisco-tx\",\"city\":\"Frisco\",\"state\":\"Texas\",\"state_code\":\"TX\",\"avg_electric_bill\":170,\"labor_rate_index\":1.04,\"local_utility_name\":\"Oncor delivery area\",\"solar_sun_hours\":5.02},{\"city_slug\":\"dallas-tx\",\"city\":\"Dallas\",\"state\":\"Texas\",\"state_code\":\"TX\",\"avg_electric_bill\":170,\"labor_rate_index\":1.01,\"local_utility_name\":\"Oncor delivery area\",\"solar_sun_hours\":5},{\"city_slug\":\"fort-worth-tx\",\"city\":\"Fort Worth\",\"state\":\"Texas\",\"state_code\":\"TX\",\"avg_electric_bill\":168,\"labor_rate_index\":0.99,\"local_utility_name\":\"Oncor delivery area\",\"solar_sun_hours\":5.05},{\"city_slug\":\"houston-tx\",\"city\":\"Houston\",\"state\":\"Texas\",\"state_code\":\"TX\",\"avg_electric_bill\":176,\"labor_rate_index\":1.04,\"local_utility_name\":\"CenterPoint delivery area\",\"solar_sun_hours\":4.65},{\"city_slug\":\"sugar-land-tx\",\"city\":\"Sugar Land\",\"state\":\"Texas\",\"state_code\":\"TX\",\"avg_electric_bill\":178,\"labor_rate_index\":1.05,\"local_utility_name\":\"CenterPoint delivery area\",\"solar_sun_hours\":4.7},{\"city_slug\":\"the-woodlands-tx\",\"city\":\"The Woodlands\",\"state\":\"Texas\",\"state_code\":\"TX\",\"avg_electric_bill\":180,\"labor_rate_index\":1.06,\"local_utility_name\":\"Entergy Texas\",\"solar_sun_hours\":4.68},{\"city_slug\":\"san-antonio-tx\",\"city\":\"San Antonio\",\"state\":\"Texas\",\"state_code\":\"TX\",\"avg_electric_bill\":156,\"labor_rate_index\":0.95,\"local_utility_name\":\"CPS Energy\",\"solar_sun_hours\":5.3},{\"city_slug\":\"el-paso-tx\",\"city\":\"El Paso\",\"state\":\"Texas\",\"state_code\":\"TX\",\"avg_electric_bill\":142,\"labor_rate_index\":0.9,\"local_utility_name\":\"El Paso Electric\",\"solar_sun_hours\":6.3},{\"city_slug\":\"denver-co\",\"city\":\"Denver\",\"state\":\"Colorado\",\"state_code\":\"CO\",\"avg_electric_bill\":142,\"labor_rate_index\":1.14,\"local_utility_name\":\"Xcel Energy\",\"solar_sun_hours\":5.45},{\"city_slug\":\"boulder-co\",\"city\":\"Boulder\",\"state\":\"Colorado\",\"state_code\":\"CO\",\"avg_electric_bill\":138,\"labor_rate_index\":1.16,\"local_utility_name\":\"Xcel Energy\",\"solar_sun_hours\":5.3},{\"city_slug\":\"colorado-springs-co\",\"city\":\"Colorado Springs\",\"state\":\"Colorado\",\"state_code\":\"CO\",\"avg_electric_bill\":132,\"labor_rate_index\":1.02,\"local_utility_name\":\"Colorado Springs Utilities\",\"solar_sun_hours\":5.6},{\"city_slug\":\"fort-collins-co\",\"city\":\"Fort Collins\",\"state\":\"Colorado\",\"state_code\":\"CO\",\"avg_electric_bill\":128,\"labor_rate_index\":1.06,\"local_utility_name\":\"Fort Collins Utilities\",\"solar_sun_hours\":5.25},{\"city_slug\":\"aspen-co\",\"city\":\"Aspen\",\"state\":\"Colorado\",\"state_code\":\"CO\",\"avg_electric_bill\":136,\"labor_rate_index\":1.28,\"local_utility_name\":\"Holy Cross Energy\",\"solar_sun_hours\":5.15},{\"city_slug\":\"phoenix-az\",\"city\":\"Phoenix\",\"state\":\"Arizona\",\"state_code\":\"AZ\",\"avg_electric_bill\":178,\"labor_rate_index\":0.98,\"local_utility_name\":\"Arizona Public Service\",\"solar_sun_hours\":6.55},{\"city_slug\":\"scottsdale-az\",\"city\":\"Scottsdale\",\"state\":\"Arizona\",\"state_code\":\"AZ\",\"avg_electric_bill\":186,\"labor_rate_index\":1.05,\"local_utility_name\":\"Arizona Public Service\",\"solar_sun_hours\":6.5},{\"city_slug\":\"mesa-az\",\"city\":\"Mesa\",\"state\":\"Arizona\",\"state_code\":\"AZ\",\"avg_electric_bill\":174,\"labor_rate_index\":0.97,\"local_utility_name\":\"Salt River Project\",\"solar_sun_hours\":6.5},{\"city_slug\":\"gilbert-az\",\"city\":\"Gilbert\",\"state\":\"Arizona\",\"state_code\":\"AZ\",\"avg_electric_bill\":176,\"labor_rate_index\":0.99,\"local_utility_name\":\"Salt River Project\",\"solar_sun_hours\":6.48},{\"city_slug\":\"chandler-az\",\"city\":\"Chandler\",\"state\":\"Arizona\",\"state_code\":\"AZ\",\"avg_electric_bill\":172,\"labor_rate_index\":0.98,\"local_utility_name\":\"Salt River Project\",\"solar_sun_hours\":6.48},{\"city_slug\":\"tucson-az\",\"city\":\"Tucson\",\"state\":\"Arizona\",\"state_code\":\"AZ\",\"avg_electric_bill\":168,\"labor_rate_index\":0.94,\"local_utility_name\":\"Tucson Electric Power\",\"solar_sun_hours\":6.5},{\"city_slug\":\"flagstaff-az\",\"city\":\"Flagstaff\",\"state\":\"Arizona\",\"state_code\":\"AZ\",\"avg_electric_bill\":128,\"labor_rate_index\":1,\"local_utility_name\":\"Arizona Public Service\",\"solar_sun_hours\":6.1},{\"city_slug\":\"charlotte-nc\",\"city\":\"Charlotte\",\"state\":\"North Carolina\",\"state_code\":\"NC\",\"avg_electric_bill\":148,\"labor_rate_index\":0.94,\"local_utility_name\":\"Duke Energy Carolinas\",\"solar_sun_hours\":4.85},{\"city_slug\":\"raleigh-nc\",\"city\":\"Raleigh\",\"state\":\"North Carolina\",\"state_code\":\"NC\",\"avg_electric_bill\":146,\"labor_rate_index\":0.96,\"local_utility_name\":\"Duke Energy Progress\",\"solar_sun_hours\":4.75},{\"city_slug\":\"durham-nc\",\"city\":\"Durham\",\"state\":\"North Carolina\",\"state_code\":\"NC\",\"avg_electric_bill\":144,\"labor_rate_index\":0.98,\"local_utility_name\":\"Duke Energy Progress\",\"solar_sun_hours\":4.7},{\"city_slug\":\"asheville-nc\",\"city\":\"Asheville\",\"state\":\"North Carolina\",\"state_code\":\"NC\",\"avg_electric_bill\":136,\"labor_rate_index\":0.96,\"local_utility_name\":\"Duke Energy Progress\",\"solar_sun_hours\":4.45},{\"city_slug\":\"wilmington-nc\",\"city\":\"Wilmington\",\"state\":\"North Carolina\",\"state_code\":\"NC\",\"avg_electric_bill\":150,\"labor_rate_index\":0.95,\"local_utility_name\":\"Duke Energy Progress\",\"solar_sun_hours\":4.8},{\"city_slug\":\"seattle-wa\",\"city\":\"Seattle\",\"state\":\"Washington\",\"state_code\":\"WA\",\"avg_electric_bill\":118,\"labor_rate_index\":1.32,\"local_utility_name\":\"Seattle City Light\",\"solar_sun_hours\":3.65},{\"city_slug\":\"bellevue-wa\",\"city\":\"Bellevue\",\"state\":\"Washington\",\"state_code\":\"WA\",\"avg_electric_bill\":124,\"labor_rate_index\":1.34,\"local_utility_name\":\"Puget Sound Energy\",\"solar_sun_hours\":3.55},{\"city_slug\":\"tacoma-wa\",\"city\":\"Tacoma\",\"state\":\"Washington\",\"state_code\":\"WA\",\"avg_electric_bill\":108,\"labor_rate_index\":1.14,\"local_utility_name\":\"Tacoma Power\",\"solar_sun_hours\":3.5},{\"city_slug\":\"spokane-wa\",\"city\":\"Spokane\",\"state\":\"Washington\",\"state_code\":\"WA\",\"avg_electric_bill\":112,\"labor_rate_index\":1.04,\"local_utility_name\":\"Avista Utilities\",\"solar_sun_hours\":4.15},{\"city_slug\":\"san-jose-ca\",\"city\":\"San Jose\",\"state\":\"California\",\"state_code\":\"CA\",\"avg_electric_bill\":214,\"labor_rate_index\":1.48,\"local_utility_name\":\"Pacific Gas & Electric\",\"solar_sun_hours\":5.35},{\"city_slug\":\"palo-alto-ca\",\"city\":\"Palo Alto\",\"state\":\"California\",\"state_code\":\"CA\",\"avg_electric_bill\":142,\"labor_rate_index\":1.52,\"local_utility_name\":\"City of Palo Alto Utilities\",\"solar_sun_hours\":5.2},{\"city_slug\":\"sunnyvale-ca\",\"city\":\"Sunnyvale\",\"state\":\"California\",\"state_code\":\"CA\",\"avg_electric_bill\":196,\"labor_rate_index\":1.46,\"local_utility_name\":\"Pacific Gas & Electric\",\"solar_sun_hours\":5.3},{\"city_slug\":\"fremont-ca\",\"city\":\"Fremont\",\"state\":\"California\",\"state_code\":\"CA\",\"avg_electric_bill\":190,\"labor_rate_index\":1.42,\"local_utility_name\":\"Pacific Gas & Electric\",\"solar_sun_hours\":5.25},{\"city_slug\":\"san-francisco-ca\",\"city\":\"San Francisco\",\"state\":\"California\",\"state_code\":\"CA\",\"avg_electric_bill\":168,\"labor_rate_index\":1.55,\"local_utility_name\":\"Pacific Gas & Electric\",\"solar_sun_hours\":4.85},{\"city_slug\":\"oakland-ca\",\"city\":\"Oakland\",\"state\":\"California\",\"state_code\":\"CA\",\"avg_electric_bill\":186,\"labor_rate_index\":1.46,\"local_utility_name\":\"Pacific Gas & Electric\",\"solar_sun_hours\":5.1},{\"city_slug\":\"walnut-creek-ca\",\"city\":\"Walnut Creek\",\"state\":\"California\",\"state_code\":\"CA\",\"avg_electric_bill\":184,\"labor_rate_index\":1.4,\"local_utility_name\":\"Pacific Gas & Electric\",\"solar_sun_hours\":5.15},{\"city_slug\":\"sacramento-ca\",\"city\":\"Sacramento\",\"state\":\"California\",\"state_code\":\"CA\",\"avg_electric_bill\":162,\"labor_rate_index\":1.16,\"local_utility_name\":\"SMUD\",\"solar_sun_hours\":5.4},{\"city_slug\":\"fresno-ca\",\"city\":\"Fresno\",\"state\":\"California\",\"state_code\":\"CA\",\"avg_electric_bill\":210,\"labor_rate_index\":1.1,\"local_utility_name\":\"Pacific Gas & Electric\",\"solar_sun_hours\":5.85},{\"city_slug\":\"los-angeles-ca\",\"city\":\"Los Angeles\",\"state\":\"California\",\"state_code\":\"CA\",\"avg_electric_bill\":176,\"labor_rate_index\":1.26,\"local_utility_name\":\"Los Angeles Department of Water and Power\",\"solar_sun_hours\":5.65},{\"city_slug\":\"pasadena-ca\",\"city\":\"Pasadena\",\"state\":\"California\",\"state_code\":\"CA\",\"avg_electric_bill\":170,\"labor_rate_index\":1.24,\"local_utility_name\":\"Pasadena Water and Power\",\"solar_sun_hours\":5.7},{\"city_slug\":\"irvine-ca\",\"city\":\"Irvine\",\"state\":\"California\",\"state_code\":\"CA\",\"avg_electric_bill\":198,\"labor_rate_index\":1.28,\"local_utility_name\":\"Southern California Edison\",\"solar_sun_hours\":5.7},{\"city_slug\":\"temecula-ca\",\"city\":\"Temecula\",\"state\":\"California\",\"state_code\":\"CA\",\"avg_electric_bill\":192,\"labor_rate_index\":1.18,\"local_utility_name\":\"Southern California Edison\",\"solar_sun_hours\":5.8},{\"city_slug\":\"san-diego-ca\",\"city\":\"San Diego\",\"state\":\"California\",\"state_code\":\"CA\",\"avg_electric_bill\":188,\"labor_rate_index\":1.24,\"local_utility_name\":\"San Diego Gas & Electric\",\"solar_sun_hours\":5.75},{\"city_slug\":\"carlsbad-ca\",\"city\":\"Carlsbad\",\"state\":\"California\",\"state_code\":\"CA\",\"avg_electric_bill\":186,\"labor_rate_index\":1.22,\"local_utility_name\":\"San Diego Gas & Electric\",\"solar_sun_hours\":5.7},{\"city_slug\":\"nashville-tn\",\"city\":\"Nashville\",\"state\":\"Tennessee\",\"state_code\":\"TN\",\"avg_electric_bill\":152,\"labor_rate_index\":0.98,\"local_utility_name\":\"Nashville Electric Service\",\"solar_sun_hours\":4.55},{\"city_slug\":\"memphis-tn\",\"city\":\"Memphis\",\"state\":\"Tennessee\",\"state_code\":\"TN\",\"avg_electric_bill\":150,\"labor_rate_index\":0.92,\"local_utility_name\":\"Memphis Light, Gas and Water\",\"solar_sun_hours\":4.7},{\"city_slug\":\"knoxville-tn\",\"city\":\"Knoxville\",\"state\":\"Tennessee\",\"state_code\":\"TN\",\"avg_electric_bill\":138,\"labor_rate_index\":0.9,\"local_utility_name\":\"Knoxville Utilities Board\",\"solar_sun_hours\":4.4},{\"city_slug\":\"atlanta-ga\",\"city\":\"Atlanta\",\"state\":\"Georgia\",\"state_code\":\"GA\",\"avg_electric_bill\":158,\"labor_rate_index\":0.97,\"local_utility_name\":\"Georgia Power\",\"solar_sun_hours\":4.95},{\"city_slug\":\"savannah-ga\",\"city\":\"Savannah\",\"state\":\"Georgia\",\"state_code\":\"GA\",\"avg_electric_bill\":160,\"labor_rate_index\":0.94,\"local_utility_name\":\"Georgia Power\",\"solar_sun_hours\":4.9},{\"city_slug\":\"miami-fl\",\"city\":\"Miami\",\"state\":\"Florida\",\"state_code\":\"FL\",\"avg_electric_bill\":172,\"labor_rate_index\":1.1,\"local_utility_name\":\"Florida Power & Light\",\"solar_sun_hours\":5.25},{\"city_slug\":\"naples-fl\",\"city\":\"Naples\",\"state\":\"Florida\",\"state_code\":\"FL\",\"avg_electric_bill\":176,\"labor_rate_index\":1.08,\"local_utility_name\":\"Florida Power & Light\",\"solar_sun_hours\":5.35},{\"city_slug\":\"tampa-fl\",\"city\":\"Tampa\",\"state\":\"Florida\",\"state_code\":\"FL\",\"avg_electric_bill\":164,\"labor_rate_index\":1.02,\"local_utility_name\":\"Tampa Electric\",\"solar_sun_hours\":5.3},{\"city_slug\":\"orlando-fl\",\"city\":\"Orlando\",\"state\":\"Florida\",\"state_code\":\"FL\",\"avg_electric_bill\":166,\"labor_rate_index\":1,\"local_utility_name\":\"Duke Energy Florida\",\"solar_sun_hours\":5.15},{\"city_slug\":\"jacksonville-fl\",\"city\":\"Jacksonville\",\"state\":\"Florida\",\"state_code\":\"FL\",\"avg_electric_bill\":158,\"labor_rate_index\":0.94,\"local_utility_name\":\"JEA\",\"solar_sun_hours\":5.05},{\"city_slug\":\"sarasota-fl\",\"city\":\"Sarasota\",\"state\":\"Florida\",\"state_code\":\"FL\",\"avg_electric_bill\":168,\"labor_rate_index\":1.02,\"local_utility_name\":\"Florida Power & Light\",\"solar_sun_hours\":5.25},{\"city_slug\":\"chicago-il\",\"city\":\"Chicago\",\"state\":\"Illinois\",\"state_code\":\"IL\",\"avg_electric_bill\":128,\"labor_rate_index\":1.28,\"local_utility_name\":\"Commonwealth Edison\",\"solar_sun_hours\":4.15},{\"city_slug\":\"naperville-il\",\"city\":\"Naperville\",\"state\":\"Illinois\",\"state_code\":\"IL\",\"avg_electric_bill\":134,\"labor_rate_index\":1.18,\"local_utility_name\":\"City of Naperville Electric Utility\",\"solar_sun_hours\":4.2},{\"city_slug\":\"minneapolis-mn\",\"city\":\"Minneapolis\",\"state\":\"Minnesota\",\"state_code\":\"MN\",\"avg_electric_bill\":126,\"labor_rate_index\":1.12,\"local_utility_name\":\"Xcel Energy\",\"solar_sun_hours\":4.15},{\"city_slug\":\"boston-ma\",\"city\":\"Boston\",\"state\":\"Massachusetts\",\"state_code\":\"MA\",\"avg_electric_bill\":188,\"labor_rate_index\":1.38,\"local_utility_name\":\"Eversource\",\"solar_sun_hours\":4.2},{\"city_slug\":\"cambridge-ma\",\"city\":\"Cambridge\",\"state\":\"Massachusetts\",\"state_code\":\"MA\",\"avg_electric_bill\":176,\"labor_rate_index\":1.4,\"local_utility_name\":\"Eversource\",\"solar_sun_hours\":4.15},{\"city_slug\":\"new-york-ny\",\"city\":\"New York\",\"state\":\"New York\",\"state_code\":\"NY\",\"avg_electric_bill\":168,\"labor_rate_index\":1.62,\"local_utility_name\":\"Consolidated Edison\",\"solar_sun_hours\":4.2},{\"city_slug\":\"white-plains-ny\",\"city\":\"White Plains\",\"state\":\"New York\",\"state_code\":\"NY\",\"avg_electric_bill\":188,\"labor_rate_index\":1.4,\"local_utility_name\":\"Consolidated Edison\",\"solar_sun_hours\":4.15},{\"city_slug\":\"albany-ny\",\"city\":\"Albany\",\"state\":\"New York\",\"state_code\":\"NY\",\"avg_electric_bill\":142,\"labor_rate_index\":1.08,\"local_utility_name\":\"National Grid\",\"solar_sun_hours\":3.95},{\"city_slug\":\"buffalo-ny\",\"city\":\"Buffalo\",\"state\":\"New York\",\"state_code\":\"NY\",\"avg_electric_bill\":128,\"labor_rate_index\":1.04,\"local_utility_name\":\"National Grid\",\"solar_sun_hours\":3.8},{\"city_slug\":\"rochester-ny\",\"city\":\"Rochester\",\"state\":\"New York\",\"state_code\":\"NY\",\"avg_electric_bill\":126,\"labor_rate_index\":1.02,\"local_utility_name\":\"Rochester Gas & Electric\",\"solar_sun_hours\":3.85},{\"city_slug\":\"philadelphia-pa\",\"city\":\"Philadelphia\",\"state\":\"Pennsylvania\",\"state_code\":\"PA\",\"avg_electric_bill\":152,\"labor_rate_index\":1.18,\"local_utility_name\":\"PECO\",\"solar_sun_hours\":4.35},{\"city_slug\":\"pittsburgh-pa\",\"city\":\"Pittsburgh\",\"state\":\"Pennsylvania\",\"state_code\":\"PA\",\"avg_electric_bill\":140,\"labor_rate_index\":1.08,\"local_utility_name\":\"Duquesne Light\",\"solar_sun_hours\":3.9},{\"city_slug\":\"washington-dc\",\"city\":\"Washington\",\"state\":\"District of Columbia\",\"state_code\":\"DC\",\"avg_electric_bill\":148,\"labor_rate_index\":1.24,\"local_utility_name\":\"Pepco\",\"solar_sun_hours\":4.45},{\"city_slug\":\"arlington-va\",\"city\":\"Arlington\",\"state\":\"Virginia\",\"state_code\":\"VA\",\"avg_electric_bill\":156,\"labor_rate_index\":1.22,\"local_utility_name\":\"Dominion Energy\",\"solar_sun_hours\":4.4},{\"city_slug\":\"alexandria-va\",\"city\":\"Alexandria\",\"state\":\"Virginia\",\"state_code\":\"VA\",\"avg_electric_bill\":154,\"labor_rate_index\":1.2,\"local_utility_name\":\"Dominion Energy\",\"solar_sun_hours\":4.4},{\"city_slug\":\"richmond-va\",\"city\":\"Richmond\",\"state\":\"Virginia\",\"state_code\":\"VA\",\"avg_electric_bill\":148,\"labor_rate_index\":0.97,\"local_utility_name\":\"Dominion Energy\",\"solar_sun_hours\":4.5},{\"city_slug\":\"virginia-beach-va\",\"city\":\"Virginia Beach\",\"state\":\"Virginia\",\"state_code\":\"VA\",\"avg_electric_bill\":154,\"labor_rate_index\":0.98,\"local_utility_name\":\"Dominion Energy\",\"solar_sun_hours\":4.6},{\"city_slug\":\"fairfax-va\",\"city\":\"Fairfax\",\"state\":\"Virginia\",\"state_code\":\"VA\",\"avg_electric_bill\":158,\"labor_rate_index\":1.18,\"local_utility_name\":\"Dominion Energy\",\"solar_sun_hours\":4.4},{\"city_slug\":\"baltimore-md\",\"city\":\"Baltimore\",\"state\":\"Maryland\",\"state_code\":\"MD\",\"avg_electric_bill\":158,\"labor_rate_index\":1.1,\"local_utility_name\":\"Baltimore Gas and Electric\",\"solar_sun_hours\":4.4},{\"city_slug\":\"bethesda-md\",\"city\":\"Bethesda\",\"state\":\"Maryland\",\"state_code\":\"MD\",\"avg_electric_bill\":164,\"labor_rate_index\":1.18,\"local_utility_name\":\"Pepco\",\"solar_sun_hours\":4.4},{\"city_slug\":\"detroit-mi\",\"city\":\"Detroit\",\"state\":\"Michigan\",\"state_code\":\"MI\",\"avg_electric_bill\":136,\"labor_rate_index\":1.06,\"local_utility_name\":\"DTE Energy\",\"solar_sun_hours\":4},{\"city_slug\":\"ann-arbor-mi\",\"city\":\"Ann Arbor\",\"state\":\"Michigan\",\"state_code\":\"MI\",\"avg_electric_bill\":132,\"labor_rate_index\":1.08,\"local_utility_name\":\"DTE Energy\",\"solar_sun_hours\":3.95},{\"city_slug\":\"grand-rapids-mi\",\"city\":\"Grand Rapids\",\"state\":\"Michigan\",\"state_code\":\"MI\",\"avg_electric_bill\":130,\"labor_rate_index\":1,\"local_utility_name\":\"Consumers Energy\",\"solar_sun_hours\":3.95},{\"city_slug\":\"columbus-oh\",\"city\":\"Columbus\",\"state\":\"Ohio\",\"state_code\":\"OH\",\"avg_electric_bill\":138,\"labor_rate_index\":0.98,\"local_utility_name\":\"AEP Ohio\",\"solar_sun_hours\":4.2},{\"city_slug\":\"cleveland-oh\",\"city\":\"Cleveland\",\"state\":\"Ohio\",\"state_code\":\"OH\",\"avg_electric_bill\":134,\"labor_rate_index\":1.02,\"local_utility_name\":\"The Illuminating Company\",\"solar_sun_hours\":3.9},{\"city_slug\":\"cincinnati-oh\",\"city\":\"Cincinnati\",\"state\":\"Ohio\",\"state_code\":\"OH\",\"avg_electric_bill\":136,\"labor_rate_index\":0.99,\"local_utility_name\":\"Duke Energy Ohio\",\"solar_sun_hours\":4.15},{\"city_slug\":\"indianapolis-in\",\"city\":\"Indianapolis\",\"state\":\"Indiana\",\"state_code\":\"IN\",\"avg_electric_bill\":140,\"labor_rate_index\":0.96,\"local_utility_name\":\"AES Indiana\",\"solar_sun_hours\":4.25},{\"city_slug\":\"st-louis-mo\",\"city\":\"St. Louis\",\"state\":\"Missouri\",\"state_code\":\"MO\",\"avg_electric_bill\":144,\"labor_rate_index\":1,\"local_utility_name\":\"Ameren Missouri\",\"solar_sun_hours\":4.5},{\"city_slug\":\"kansas-city-mo\",\"city\":\"Kansas City\",\"state\":\"Missouri\",\"state_code\":\"MO\",\"avg_electric_bill\":146,\"labor_rate_index\":0.98,\"local_utility_name\":\"Evergy\",\"solar_sun_hours\":4.7},{\"city_slug\":\"omaha-ne\",\"city\":\"Omaha\",\"state\":\"Nebraska\",\"state_code\":\"NE\",\"avg_electric_bill\":128,\"labor_rate_index\":0.96,\"local_utility_name\":\"Omaha Public Power District\",\"solar_sun_hours\":4.65},{\"city_slug\":\"lincoln-ne\",\"city\":\"Lincoln\",\"state\":\"Nebraska\",\"state_code\":\"NE\",\"avg_electric_bill\":118,\"labor_rate_index\":0.94,\"local_utility_name\":\"Lincoln Electric System\",\"solar_sun_hours\":4.6},{\"city_slug\":\"salt-lake-city-ut\",\"city\":\"Salt Lake City\",\"state\":\"Utah\",\"state_code\":\"UT\",\"avg_electric_bill\":112,\"labor_rate_index\":1.04,\"local_utility_name\":\"Rocky Mountain Power\",\"solar_sun_hours\":5.25},{\"city_slug\":\"park-city-ut\",\"city\":\"Park City\",\"state\":\"Utah\",\"state_code\":\"UT\",\"avg_electric_bill\":118,\"labor_rate_index\":1.16,\"local_utility_name\":\"Rocky Mountain Power\",\"solar_sun_hours\":5.1},{\"city_slug\":\"provo-ut\",\"city\":\"Provo\",\"state\":\"Utah\",\"state_code\":\"UT\",\"avg_electric_bill\":104,\"labor_rate_index\":0.98,\"local_utility_name\":\"Rocky Mountain Power\",\"solar_sun_hours\":5.2},{\"city_slug\":\"boise-id\",\"city\":\"Boise\",\"state\":\"Idaho\",\"state_code\":\"ID\",\"avg_electric_bill\":108,\"labor_rate_index\":0.98,\"local_utility_name\":\"Idaho Power\",\"solar_sun_hours\":4.9},{\"city_slug\":\"las-vegas-nv\",\"city\":\"Las Vegas\",\"state\":\"Nevada\",\"state_code\":\"NV\",\"avg_electric_bill\":174,\"labor_rate_index\":1.06,\"local_utility_name\":\"NV Energy\",\"solar_sun_hours\":6.4},{\"city_slug\":\"henderson-nv\",\"city\":\"Henderson\",\"state\":\"Nevada\",\"state_code\":\"NV\",\"avg_electric_bill\":170,\"labor_rate_index\":1.04,\"local_utility_name\":\"NV Energy\",\"solar_sun_hours\":6.35},{\"city_slug\":\"reno-nv\",\"city\":\"Reno\",\"state\":\"Nevada\",\"state_code\":\"NV\",\"avg_electric_bill\":128,\"labor_rate_index\":1.08,\"local_utility_name\":\"NV Energy\",\"solar_sun_hours\":5.55},{\"city_slug\":\"albuquerque-nm\",\"city\":\"Albuquerque\",\"state\":\"New Mexico\",\"state_code\":\"NM\",\"avg_electric_bill\":118,\"labor_rate_index\":0.94,\"local_utility_name\":\"Public Service Company of New Mexico\",\"solar_sun_hours\":6.35},{\"city_slug\":\"santa-fe-nm\",\"city\":\"Santa Fe\",\"state\":\"New Mexico\",\"state_code\":\"NM\",\"avg_electric_bill\":116,\"labor_rate_index\":1.02,\"local_utility_name\":\"Public Service Company of New Mexico\",\"solar_sun_hours\":6.2},{\"city_slug\":\"oklahoma-city-ok\",\"city\":\"Oklahoma City\",\"state\":\"Oklahoma\",\"state_code\":\"OK\",\"avg_electric_bill\":148,\"labor_rate_index\":0.9,\"local_utility_name\":\"OG&E\",\"solar_sun_hours\":5.15},{\"city_slug\":\"tulsa-ok\",\"city\":\"Tulsa\",\"state\":\"Oklahoma\",\"state_code\":\"OK\",\"avg_electric_bill\":146,\"labor_rate_index\":0.89,\"local_utility_name\":\"Public Service Company of Oklahoma\",\"solar_sun_hours\":4.9},{\"city_slug\":\"louisville-ky\",\"city\":\"Louisville\",\"state\":\"Kentucky\",\"state_code\":\"KY\",\"avg_electric_bill\":136,\"labor_rate_index\":0.93,\"local_utility_name\":\"LG&E\",\"solar_sun_hours\":4.35},{\"city_slug\":\"lexington-ky\",\"city\":\"Lexington\",\"state\":\"Kentucky\",\"state_code\":\"KY\",\"avg_electric_bill\":132,\"labor_rate_index\":0.92,\"local_utility_name\":\"Kentucky Utilities\",\"solar_sun_hours\":4.3},{\"city_slug\":\"charleston-sc\",\"city\":\"Charleston\",\"state\":\"South Carolina\",\"state_code\":\"SC\",\"avg_electric_bill\":158,\"labor_rate_index\":0.96,\"local_utility_name\":\"Dominion Energy South Carolina\",\"solar_sun_hours\":4.9},{\"city_slug\":\"greenville-sc\",\"city\":\"Greenville\",\"state\":\"South Carolina\",\"state_code\":\"SC\",\"avg_electric_bill\":146,\"labor_rate_index\":0.92,\"local_utility_name\":\"Duke Energy Carolinas\",\"solar_sun_hours\":4.7},{\"city_slug\":\"birmingham-al\",\"city\":\"Birmingham\",\"state\":\"Alabama\",\"state_code\":\"AL\",\"avg_electric_bill\":158,\"labor_rate_index\":0.9,\"local_utility_name\":\"Alabama Power\",\"solar_sun_hours\":4.75},{\"city_slug\":\"new-orleans-la\",\"city\":\"New Orleans\",\"state\":\"Louisiana\",\"state_code\":\"LA\",\"avg_electric_bill\":154,\"labor_rate_index\":0.96,\"local_utility_name\":\"Entergy New Orleans\",\"solar_sun_hours\":4.8},{\"city_slug\":\"baton-rouge-la\",\"city\":\"Baton Rouge\",\"state\":\"Louisiana\",\"state_code\":\"LA\",\"avg_electric_bill\":156,\"labor_rate_index\":0.92,\"local_utility_name\":\"Entergy Louisiana\",\"solar_sun_hours\":4.75},{\"city_slug\":\"milwaukee-wi\",\"city\":\"Milwaukee\",\"state\":\"Wisconsin\",\"state_code\":\"WI\",\"avg_electric_bill\":124,\"labor_rate_index\":1.08,\"local_utility_name\":\"We Energies\",\"solar_sun_hours\":4.1},{\"city_slug\":\"madison-wi\",\"city\":\"Madison\",\"state\":\"Wisconsin\",\"state_code\":\"WI\",\"avg_electric_bill\":122,\"labor_rate_index\":1.06,\"local_utility_name\":\"Madison Gas and Electric\",\"solar_sun_hours\":4.05},{\"city_slug\":\"portland-or\",\"city\":\"Portland\",\"state\":\"Oregon\",\"state_code\":\"OR\",\"avg_electric_bill\":122,\"labor_rate_index\":1.18,\"local_utility_name\":\"Portland General Electric\",\"solar_sun_hours\":3.75},{\"city_slug\":\"bend-or\",\"city\":\"Bend\",\"state\":\"Oregon\",\"state_code\":\"OR\",\"avg_electric_bill\":118,\"labor_rate_index\":1.06,\"local_utility_name\":\"Pacific Power\",\"solar_sun_hours\":4.6},{\"city_slug\":\"honolulu-hi\",\"city\":\"Honolulu\",\"state\":\"Hawaii\",\"state_code\":\"HI\",\"avg_electric_bill\":248,\"labor_rate_index\":1.36,\"local_utility_name\":\"Hawaiian Electric\",\"solar_sun_hours\":5.6},{\"city_slug\":\"anchorage-ak\",\"city\":\"Anchorage\",\"state\":\"Alaska\",\"state_code\":\"AK\",\"avg_electric_bill\":136,\"labor_rate_index\":1.22,\"local_utility_name\":\"Chugach Electric\",\"solar_sun_hours\":3.1},{\"city_slug\":\"newark-nj\",\"city\":\"Newark\",\"state\":\"New Jersey\",\"state_code\":\"NJ\",\"avg_electric_bill\":146,\"labor_rate_index\":1.26,\"local_utility_name\":\"PSE&G\",\"solar_sun_hours\":4.25},{\"city_slug\":\"jersey-city-nj\",\"city\":\"Jersey City\",\"state\":\"New Jersey\",\"state_code\":\"NJ\",\"avg_electric_bill\":142,\"labor_rate_index\":1.34,\"local_utility_name\":\"PSE&G\",\"solar_sun_hours\":4.2},{\"city_slug\":\"providence-ri\",\"city\":\"Providence\",\"state\":\"Rhode Island\",\"state_code\":\"RI\",\"avg_electric_bill\":168,\"labor_rate_index\":1.16,\"local_utility_name\":\"Rhode Island Energy\",\"solar_sun_hours\":4.15},{\"city_slug\":\"hartford-ct\",\"city\":\"Hartford\",\"state\":\"Connecticut\",\"state_code\":\"CT\",\"avg_electric_bill\":196,\"labor_rate_index\":1.22,\"local_utility_name\":\"Eversource\",\"solar_sun_hours\":4.1},{\"city_slug\":\"stamford-ct\",\"city\":\"Stamford\",\"state\":\"Connecticut\",\"state_code\":\"CT\",\"avg_electric_bill\":188,\"labor_rate_index\":1.3,\"local_utility_name\":\"Eversource\",\"solar_sun_hours\":4.15},{\"city_slug\":\"portland-me\",\"city\":\"Portland\",\"state\":\"Maine\",\"state_code\":\"ME\",\"avg_electric_bill\":158,\"labor_rate_index\":1.08,\"local_utility_name\":\"Central Maine Power\",\"solar_sun_hours\":4},{\"city_slug\":\"manchester-nh\",\"city\":\"Manchester\",\"state\":\"New Hampshire\",\"state_code\":\"NH\",\"avg_electric_bill\":162,\"labor_rate_index\":1.1,\"local_utility_name\":\"Eversource\",\"solar_sun_hours\":4.05},{\"city_slug\":\"burlington-vt\",\"city\":\"Burlington\",\"state\":\"Vermont\",\"state_code\":\"VT\",\"avg_electric_bill\":128,\"labor_rate_index\":1.12,\"local_utility_name\":\"Burlington Electric Department\",\"solar_sun_hours\":3.85},{\"city_slug\":\"des-moines-ia\",\"city\":\"Des Moines\",\"state\":\"Iowa\",\"state_code\":\"IA\",\"avg_electric_bill\":124,\"labor_rate_index\":0.96,\"local_utility_name\":\"MidAmerican Energy\",\"solar_sun_hours\":4.3},{\"city_slug\":\"wichita-ks\",\"city\":\"Wichita\",\"state\":\"Kansas\",\"state_code\":\"KS\",\"avg_electric_bill\":138,\"labor_rate_index\":0.91,\"local_utility_name\":\"Evergy\",\"solar_sun_hours\":5},{\"city_slug\":\"little-rock-ar\",\"city\":\"Little Rock\",\"state\":\"Arkansas\",\"state_code\":\"AR\",\"avg_electric_bill\":140,\"labor_rate_index\":0.88,\"local_utility_name\":\"Entergy Arkansas\",\"solar_sun_hours\":4.7},{\"city_slug\":\"jackson-ms\",\"city\":\"Jackson\",\"state\":\"Mississippi\",\"state_code\":\"MS\",\"avg_electric_bill\":152,\"labor_rate_index\":0.86,\"local_utility_name\":\"Entergy Mississippi\",\"solar_sun_hours\":4.75},{\"city_slug\":\"sioux-falls-sd\",\"city\":\"Sioux Falls\",\"state\":\"South Dakota\",\"state_code\":\"SD\",\"avg_electric_bill\":122,\"labor_rate_index\":0.93,\"local_utility_name\":\"Xcel Energy\",\"solar_sun_hours\":4.55},{\"city_slug\":\"fargo-nd\",\"city\":\"Fargo\",\"state\":\"North Dakota\",\"state_code\":\"ND\",\"avg_electric_bill\":118,\"labor_rate_index\":0.95,\"local_utility_name\":\"Xcel Energy\",\"solar_sun_hours\":4.2},{\"city_slug\":\"billings-mt\",\"city\":\"Billings\",\"state\":\"Montana\",\"state_code\":\"MT\",\"avg_electric_bill\":116,\"labor_rate_index\":0.98,\"local_utility_name\":\"NorthWestern Energy\",\"solar_sun_hours\":4.4},{\"city_slug\":\"bozeman-mt\",\"city\":\"Bozeman\",\"state\":\"Montana\",\"state_code\":\"MT\",\"avg_electric_bill\":120,\"labor_rate_index\":1.08,\"local_utility_name\":\"NorthWestern Energy\",\"solar_sun_hours\":4.3},{\"city_slug\":\"cheyenne-wy\",\"city\":\"Cheyenne\",\"state\":\"Wyoming\",\"state_code\":\"WY\",\"avg_electric_bill\":112,\"labor_rate_index\":0.96,\"local_utility_name\":\"Black Hills Energy\",\"solar_sun_hours\":5.2}]");
var SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
function isCity(value) {
	if (!value || typeof value !== "object") return false;
	const row = value;
	return typeof row.city_slug === "string" && SLUG.test(row.city_slug) && typeof row.city === "string" && typeof row.state === "string" && typeof row.state_code === "string" && row.state_code.length >= 2 && typeof row.avg_electric_bill === "number" && row.avg_electric_bill > 0 && typeof row.labor_rate_index === "number" && row.labor_rate_index > 0 && typeof row.local_utility_name === "string" && typeof row.solar_sun_hours === "number" && row.solar_sun_hours > 0;
}
var cities = (Array.isArray(cities_default) ? cities_default : []).filter(isCity);
var bySlug = new Map(cities.map((city) => [city.city_slug, city]));
function getCity(slug) {
	return bySlug.get(slug.toLowerCase());
}
function nearbyCities(city, limit = 4) {
	return cities.filter((other) => other.state_code === city.state_code && other.city_slug !== city.city_slug).slice(0, limit);
}
function citiesByState() {
	const groups = /* @__PURE__ */ new Map();
	for (const city of cities) {
		const existing = groups.get(city.state_code);
		if (existing) existing.cities.push(city);
		else groups.set(city.state_code, {
			state: city.state,
			state_code: city.state_code,
			cities: [city]
		});
	}
	return [...groups.values()].map((group) => ({
		...group,
		cities: [...group.cities].sort((a, b) => a.city.localeCompare(b.city))
	})).sort((a, b) => a.state.localeCompare(b.state));
}
function searchCities(query) {
	const needle = query.trim().toLowerCase();
	if (!needle) return cities;
	return cities.filter((city) => {
		return `${city.city} ${city.state} ${city.state_code} ${city.local_utility_name}`.toLowerCase().includes(needle);
	});
}
var featuredSlugs = [
	"austin-tx",
	"denver-co",
	"phoenix-az",
	"charlotte-nc",
	"seattle-wa"
];
function featuredCities() {
	return featuredSlugs.flatMap((slug) => {
		const city = bySlug.get(slug);
		return city ? [city] : [];
	});
}
/** National planning baseline used on the home page — not a city route. */
var nationalCity = {
	city_slug: "national",
	city: "the United States",
	state: "National average",
	state_code: "US",
	avg_electric_bill: 157,
	labor_rate_index: 1,
	local_utility_name: "your local utility",
	solar_sun_hours: 4.7
};
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/estimate-DcxKRmhR.js
var MATERIALS = [
	{
		id: "asphalt",
		name: "Asphalt shingle",
		tier: "$$",
		rate: 5.85,
		lifeYears: 25,
		note: "Architectural laminate. Lowest installed cost. Class 4 is the usual hail upgrade."
	},
	{
		id: "metal",
		name: "Standing seam metal",
		tier: "$$$",
		rate: 14.25,
		lifeYears: 45,
		note: "Concealed-fastener panels. The simplest surface for solar clamps."
	},
	{
		id: "tile",
		name: "Tile / slate",
		tier: "$$$$",
		rate: 22.5,
		lifeYears: 50,
		note: "Concrete tile or natural slate. Heavy — structure has to be checked before solar."
	}
];
var CREDIT_MODES = [{
	id: "itc30",
	name: "30% ITC comparison",
	note: "Subtracts 30%. Only if the system was placed in service by Dec 31, 2025 — or as a side-by-side."
}, {
	id: "cash2026",
	name: "2026 cash price",
	note: "No Section 25D credit. Use this for a homeowner purchase completed in 2026."
}];
var MODEL = {
	baselineMonthlyKwh: 877,
	performanceRatio: .8,
	degradation: .005,
	escalation: .03,
	itcRate: .3,
	dollarsPerWatt: 2.95,
	solarLaborShare: .28,
	moduleWatts: 410,
	moduleSqFt: 20.5,
	years: 25,
	defaultArea: 2e3,
	defaultUsable: 40,
	areaMin: 1e3,
	areaMax: 5e3,
	billMin: 80,
	billMax: 600,
	usableMin: 20,
	usableMax: 70
};
function clamp(value, min, max) {
	return Math.min(max, Math.max(min, value));
}
function materialById(id) {
	return MATERIALS.find((material) => material.id === id) ?? MATERIALS[0];
}
function estimate(input) {
	const material = materialById(input.material);
	const area = clamp(input.area, MODEL.areaMin, MODEL.areaMax);
	const bill = clamp(input.bill, MODEL.billMin, MODEL.billMax);
	const usable = clamp(input.usable, MODEL.usableMin, MODEL.usableMax);
	const labor = input.laborRateIndex > 0 ? input.laborRateIndex : 1;
	const sun = input.solarSunHours > 0 ? input.solarSunHours : 4.5;
	const retailRate = (input.avgElectricBill > 0 ? input.avgElectricBill : bill) / MODEL.baselineMonthlyKwh;
	const roofPerSqFt = material.rate * labor;
	const roofCost = area * roofPerSqFt;
	const squares = area / 100;
	const monthlyKwh = bill / retailRate;
	const annualKwh = monthlyKwh * 12;
	const idealKw = annualKwh / 365 / (sun * MODEL.performanceRatio);
	const maxModules = Math.max(0, Math.floor(area * (usable / 100) / MODEL.moduleSqFt));
	const maxKw = maxModules * MODEL.moduleWatts / 1e3;
	const roofCapped = idealKw > maxKw + .05;
	const systemKw = Math.min(idealKw, maxKw);
	const modules = roofCapped ? maxModules : Math.max(0, Math.round(systemKw * 1e3 / MODEL.moduleWatts));
	const annualProduction = systemKw * sun * 365 * MODEL.performanceRatio;
	const offset = annualKwh > 0 ? annualProduction / annualKwh : 0;
	const perWatt = MODEL.dollarsPerWatt * (1 - MODEL.solarLaborShare + MODEL.solarLaborShare * labor);
	const grossSolar = systemKw * 1e3 * perWatt;
	const itcNet = grossSolar * (1 - MODEL.itcRate);
	const federalCredit = input.credit === "itc30" ? grossSolar * MODEL.itcRate : 0;
	const netSolar = grossSolar - federalCredit;
	const otherModeNet = input.credit === "itc30" ? grossSolar : itcNet;
	const series = [];
	let production = annualProduction;
	let rate = retailRate;
	let cumulative = 0;
	for (let year = 1; year <= MODEL.years; year += 1) {
		const annual = production * rate;
		cumulative += annual;
		series.push({
			year,
			annual,
			cumulative
		});
		production *= 1 - MODEL.degradation;
		rate *= 1 + MODEL.escalation;
	}
	const yearOneSavings = series[0]?.annual ?? 0;
	const paybackYears = yearOneSavings > 0 ? netSolar / yearOneSavings : null;
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
		series
	};
}
function formatMoney(value) {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		maximumFractionDigits: 0
	}).format(value);
}
function formatUnit(value) {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	}).format(value);
}
function formatMoneyCompact(value) {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		notation: "compact",
		maximumFractionDigits: 1
	}).format(value);
}
function formatRatePercent(rate) {
	const points = Math.round(rate * 1e3) / 10;
	return Number.isInteger(points) ? String(points) : points.toFixed(1);
}
function laborLabel(index) {
	const pct = Math.round((index - 1) * 100);
	if (pct === 0) return "At the national labor baseline";
	if (pct > 0) return `${pct}% above the national labor baseline`;
	return `${Math.abs(pct)}% below the national labor baseline`;
}
var intIn = (value, min, max) => {
	const number = typeof value === "number" ? value : typeof value === "string" ? Number(value) : NaN;
	if (!Number.isFinite(number)) return void 0;
	const rounded = Math.round(number);
	if (rounded < min || rounded > max) return void 0;
	return rounded;
};
function parseEstimateSearch(search) {
	const material = MATERIALS.some((item) => item.id === search.material) ? search.material : void 0;
	const credit = CREDIT_MODES.some((item) => item.id === search.credit) ? search.credit : void 0;
	return {
		area: intIn(search.area, MODEL.areaMin, MODEL.areaMax),
		bill: intIn(search.bill, MODEL.billMin, MODEL.billMax),
		usable: intIn(search.usable, MODEL.usableMin, MODEL.usableMax),
		material,
		credit
	};
}
function searchFromParams(params) {
	const query = new URLSearchParams();
	query.set("area", String(params.area));
	query.set("bill", String(params.bill));
	query.set("usable", String(params.usable));
	query.set("material", params.material);
	query.set("credit", params.credit);
	return query.toString();
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-D-dSA7zb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* Path-based preview hosts serve the dev server under `/{port_id}/` and strip
* that prefix before forwarding, so SSR sees `/` while the browser URL keeps the
* prefix. TanStack Start resets `basepath` on hydration, so a `rewrite` keeps
* client routing and generated links aligned with the public URL.
*/
var PATH_BASED_PREVIEW_HOSTS = /* @__PURE__ */ new Set([
	"preview.grok.genai.mil",
	"preview.grok.mil",
	"preview.grokgsac.com"
]);
var PORT_ID_PREFIX = /^\/hds-[a-z0-9]+-\d+-[a-z0-9]+(?=\/|$)/i;
function previewPathPrefix(hostname, pathname) {
	if (!PATH_BASED_PREVIEW_HOSTS.has(hostname.toLowerCase())) return void 0;
	return PORT_ID_PREFIX.exec(pathname)?.[0];
}
function prefixRewrite(prefix) {
	return {
		input: ({ url }) => {
			if (url.pathname === prefix) url.pathname = "/";
			else if (url.pathname.startsWith(`${prefix}/`)) url.pathname = url.pathname.slice(prefix.length);
			return url;
		},
		output: ({ url }) => {
			url.pathname = `${prefix}${url.pathname}`;
			return url;
		}
	};
}
function previewPathRewrite() {
	if (typeof window === "undefined") return void 0;
	const prefix = previewPathPrefix(window.location.hostname, window.location.pathname);
	return prefix ? prefixRewrite(prefix) : void 0;
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
function SiteShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-canvas text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#content",
				className: "sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-surface focus:px-3 focus:py-2 focus:text-sm focus:text-ink",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-30 border-b border-line bg-surface/95 backdrop-blur",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 lg:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex min-w-0 items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-8 shrink-0 place-items-center rounded-md bg-primary text-sm font-semibold text-on-primary",
							children: "M"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "truncate text-base font-semibold tracking-tight",
							children: "Meridian Estimate"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "flex items-center gap-1 text-sm font-medium",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							activeOptions: { exact: true },
							className: "rounded-md px-3 py-2 text-muted hover:text-ink data-[status=active]:text-primary",
							children: "Estimator"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/cities",
							className: "rounded-md px-3 py-2 text-muted hover:text-ink data-[status=active]:text-primary",
							children: "Cities"
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				id: "content",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "mt-16 border-t border-line bg-surface",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-12 lg:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold",
							children: "Meridian Estimate"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-xl text-sm leading-relaxed text-muted",
							children: "Planning figures for a U.S. roof replacement and a home solar array. Not a bid, not a utility tariff, and not tax advice. Confirm scope with a licensed contractor and the credit rules with a tax preparer before you sign anything."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-sm lg:col-span-5 lg:text-right",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-medium",
							children: [cities.length, " city pages from one template"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/cities",
									className: "text-primary underline-offset-2 hover:underline",
									children: "Browse cities"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "px-2 text-muted",
									children: "/"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "/sitemap.xml",
									className: "text-primary underline-offset-2 hover:underline",
									children: "Sitemap"
								})
							]
						})]
					})]
				})
			})
		]
	});
}
var styles_default = "/assets/styles-2D6vy-do.css";
var Route$5 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Meridian Estimate" },
			{
				name: "description",
				content: "Roof replacement and solar payback estimator for U.S. cities. Local utility, sun hours, labor index, and a live 25-year savings model."
			},
			{
				name: "theme-color",
				content: "#1D4ED8"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	})
});
var $$splitComponentImporter$2 = () => import("./routes-DpYyxXpI.mjs");
var Route$4 = createFileRoute("/")({
	validateSearch: (search) => parseEstimateSearch(search),
	head: () => ({
		meta: [{ title: "Roof Replacement & Solar ROI Estimator | Meridian Estimate" }, {
			name: "description",
			content: "Price a U.S. roof replacement and a home solar array in one live model. Adjust roof area, material, and electric bill. Open a city page for the local utility, sun hours, and labor index."
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "WebApplication",
				name: "Meridian Estimate",
				applicationCategory: "BusinessApplication",
				operatingSystem: "Web",
				offers: {
					"@type": "Offer",
					price: "0",
					priceCurrency: "USD"
				},
				areaServed: {
					"@type": "Country",
					name: "United States"
				},
				description: "Residential roof replacement cost and solar savings estimator with city-specific utility, sun, and labor inputs."
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var Route$3 = createFileRoute("/robots.txt")({ server: { handlers: { GET: async ({ request }) => {
	const body = `User-agent: *\nAllow: /\n\nSitemap: ${new URL(request.url).origin}/sitemap.xml\n`;
	return new Response(body, { headers: {
		"Content-Type": "text/plain; charset=utf-8",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var Route$2 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async ({ request }) => {
	const origin = new URL(request.url).origin;
	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[
		"/",
		"/cities",
		...cities.map((city) => `/cities/${city.city_slug}`)
	].map((path) => `  <url><loc>${origin}${path}</loc></url>`).join("\n")}
</urlset>
`;
	return new Response(body, { headers: {
		"Content-Type": "application/xml; charset=utf-8",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$1 = () => import("./cities-wlkiQ0TQ.mjs");
var Route$1 = createFileRoute("/cities/")({
	head: () => ({ meta: [{ title: "U.S. City Roof & Solar Estimators | Meridian Estimate" }, {
		name: "description",
		content: "City-by-city roof replacement and solar ROI pages. Each route loads the local utility, typical electric bill, peak sun hours, and labor index."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var TAGS = {
	TX: [
		"hurricane",
		"hail",
		"deregulated"
	],
	OK: ["hail"],
	KS: ["hail"],
	NE: ["hail", "snow"],
	CO: [
		"hail",
		"snow",
		"wildfire"
	],
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
	CA: [
		"wildfire",
		"seismic",
		"high-rate",
		"nem3"
	],
	OR: ["wildfire"],
	WA: ["wildfire"],
	NM: ["wildfire", "hail"],
	AZ: ["wildfire", "hail"],
	UT: [
		"wildfire",
		"snow",
		"seismic"
	],
	ID: ["wildfire", "snow"],
	NV: ["wildfire"],
	HI: [
		"hurricane",
		"high-rate",
		"seismic"
	],
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
	VA: ["hurricane"]
};
var TAG_COPY = {
	hurricane: {
		title: "Wind and water",
		body: "Coastal and near-coastal counties design to higher basic wind speeds. A serious bid names the wind speed, the underlayment, whether the deck is sealed, and the clip or strap pattern. Miami-Dade HVHZ is a South Florida rule, not a license to use that assembly everywhere in a hurricane state. Inland houses in the same state are often a different code story."
	},
	hail: {
		title: "Hail",
		body: "Hail, not birthday candles, retires a lot of roofs in this region. Insurers commonly ask for a UL 2218 Class 4 shingle or a metal panel with a hail rating. Class 4 is an impact test, not a promise the roof will never dent or that a claim will be approved."
	},
	snow: {
		title: "Snow and ice",
		body: "Plan on the local ground-snow load and, where the ice-barrier rule applies, a self-adhered membrane along the eaves. A solar layout should leave a path for snow to leave the roof so it does not stack on the modules or dump onto the entry below."
	},
	wildfire: {
		title: "Wildfire",
		body: "In wildland-urban zones the roof covering is usually Class A, and vents, gutters, and eaves get a harder look. Solar does not exempt the roof from ember or defensible-space rules. Confirm the zone before you fall in love with a material."
	},
	seismic: {
		title: "Weight",
		body: "Tile, slate, and a solar array are dead load. On older houses a structural look before that weight goes up is part of the bid, not a change order you discover after tear-off."
	},
	deregulated: {
		title: "Texas electricity is split",
		body: "Most of Texas is deregulated. Oncor, CenterPoint, TNMP, and AEP Texas deliver power; a retail provider sells it. Solar buyback is a feature of the retail plan and it moves. Austin Energy, CPS Energy, El Paso Electric, and Entergy Texas are not that model — they set their own solar tariffs. Austin's is a Value of Solar credit, not classic one-for-one net metering."
	},
	"high-rate": {
		title: "High retail rates",
		body: "Rates here are high enough that a smaller, well-aimed array can still move the bill. A bigger system is not automatically better when midday exports are worth less than the power you buy in the evening."
	},
	nem3: {
		title: "California net billing",
		body: "For PG&E, SCE, and SDG&E, the net billing tariff that replaced NEM 2.0 pays a much lower credit for midday exports than the retail rate. Batteries and using power as you make it matter more than a paper design that covers 100% of annual kilowatt-hours. LADWP, SMUD, and other municipal utilities run their own schedules — do not assume the investor-owned rule applies."
	}
};
function guideTags(stateCode) {
	return TAGS[stateCode] ?? [];
}
function guideSections(stateCode) {
	return guideTags(stateCode).map((tag) => TAG_COPY[tag]);
}
function utilityNote(city) {
	const name = city.local_utility_name;
	if (name === "Austin Energy") return "Austin Energy bills on a Value of Solar tariff: production is credited on a formula the utility sets, not as a one-for-one retail kilowatt-hour. Size from that credit, not from a generic net-metering story.";
	if (name === "CPS Energy") return "CPS Energy is municipal. Solar rebates and bill credits have been revised more than once. Ask for the current residential solar rate before treating exports as full retail.";
	if (name === "Los Angeles Department of Water and Power" || name === "SMUD" || name === "City of Palo Alto Utilities" || name === "Pasadena Water and Power" || name === "Seattle City Light" || name === "Tacoma Power" || name === "Colorado Springs Utilities" || name === "Fort Collins Utilities") return `${name} is a municipal utility with its own interconnect and export rules. Do not copy a neighboring investor-owned tariff onto this house.`;
	if (name === "Salt River Project") return "SRP residential plans have used demand charges and export credits that are not full retail. A design that ignores the demand window can look fine on annual kilowatt-hours and still miss the bill.";
	if (name === "Arizona Public Service" || name === "Tucson Electric Power" || name === "NV Energy") return `${name} export credit for newer customers is generally not old-style full-retail net metering. Confirm the current export rate and any demand or time-of-use terms.`;
	if (name === "Hawaiian Electric") return "Hawaiian Electric closed classic net metering years ago. Export programs and battery incentives change. Honolulu production is strong; the tariff, not the sunshine, is the constraint.";
	if (name === "Pacific Gas & Electric" || name === "Southern California Edison" || name === "San Diego Gas & Electric") return `${name} residential solar placed under the net billing tariff earns a low credit for most exported midday power. Self-consumption and storage do more work than they did under NEM 2.0.`;
	if (name.includes("delivery area")) return `${city.city} sits in a deregulated Texas delivery territory. The wires company does not buy your solar. The buyback rate is whatever the retail provider puts in the plan you actually switch to.`;
	if (name === "Consolidated Edison") return "Con Edison solar compensation depends on the program the project qualifies for, including value-stack (VDER) versus older net-metering vintages. Get the current tariff in writing. Do not price a Manhattan roof like an upstate National Grid account.";
	return `${name} sets the export credit, the interconnect timeline, and often a production cap or a time-of-use schedule. Treat any "full retail net metering" claim as something to verify on the current tariff, not as a default.`;
}
function cityFaqs(city) {
	const place = `${city.city}, ${city.state_code}`;
	return [
		{
			question: `Does the 30% federal solar tax credit still apply in ${city.city} in 2026?`,
			answer: `For a homeowner who buys the system, no. Section 25D, the Residential Clean Energy Credit, does not apply to expenditures after December 31, 2025, under the One Big Beautiful Bill Act (Public Law 119-21). A system placed in service in 2025 can still be claimed on the 2025 return with Form 5695, and unused credit can carry forward. A cash or loan project completed in ${place} in 2026 gets a $0 Section 25D credit. A lease or power-purchase agreement is different: the third-party owner, not the household, may still claim the Section 48E credit if construction began by July 4, 2026 or the system is placed in service by December 31, 2027, and may price some of that into the payment. This page is a planning model, not tax advice.`
		},
		{
			question: `Does a roof replacement in ${city.city} qualify for a solar tax credit?`,
			answer: `A standard asphalt, standing-seam, or tile roof does not. Replacing the roof in the same contract as the solar does not move the deck, underlayment, or ordinary covering into qualified clean-energy property. When Section 25D applied, it covered the electricity-producing equipment — modules, inverters, racking, wiring, that labor, and batteries of at least 3 kWh — not the roof that happens to sit under it. The roof figure and the solar figure on this estimator stay separate for that reason.`
		},
		{
			question: `How is the ${city.city} roof number calculated?`,
			answer: `Installed cost equals roof area times a national base rate for the material times the ${city.city} labor index of ${city.labor_rate_index.toFixed(2)} (${laborLabel(city.labor_rate_index).toLowerCase()}). Bases before the local index: asphalt shingle $${MATERIALS[0].rate.toFixed(2)} per square foot, standing-seam metal $${MATERIALS[1].rate.toFixed(2)}, tile or slate $${MATERIALS[2].rate.toFixed(2)}. The result is a planning price for tear-off and one layer on a straightforward slope. It does not add deck replacement, a second layer, steep-slope charges, skylights, or high-wind clips. A local bid can sit well outside this band.`
		},
		{
			question: `How do ${city.solar_sun_hours.toFixed(2)} peak sun hours size an array in ${city.city}?`,
			answer: `The bill slider becomes monthly kilowatt-hours using a retail rate implied by ${city.city}'s typical bill of $${city.avg_electric_bill} at about ${MODEL.baselineMonthlyKwh} kWh, near the U.S. residential average. Annual use divided by peak sun hours times a ${MODEL.performanceRatio} performance ratio is the ideal array. ${city.city} is modeled at ${city.solar_sun_hours.toFixed(2)} peak sun hours. Production then steps down ${formatRatePercent(MODEL.degradation)}% a year. If that array does not fit on the share of roof marked usable, the model caps the system and the savings follow the smaller array, not the whole bill.`
		},
		{
			question: `What should I know about solar billing with ${city.local_utility_name}?`,
			answer: utilityNote(city) + " Export credit is not automatically a full retail bill credit in 2026. If the export rate is below the rate you pay, a battery or a smaller array often beats covering every kilowatt-hour on paper."
		},
		{
			question: "Which roof belongs under a 25-year array?",
			answer: "Standing-seam metal is the simplest clamp surface and usually the better roof if you will still own the house when an asphalt roof would be due again. Asphalt is the lower first cost; use a Class 4 shingle where hail sets the insurance terms. Tile and slate last, but they are heavy and they break under installers' feet. Do not put a 25-year array on a roof with less than about 10 years of life left. Reroof first, then mount."
		},
		{
			question: `What does the 25-year savings figure leave out?`,
			answer: `It is cumulative utility-bill savings on modeled production for ${place}, with a ${formatRatePercent(MODEL.escalation)}% a year retail-rate increase and ${formatRatePercent(MODEL.degradation)}% a year degradation. It is not a guarantee. It does not subtract inverter replacement, insurance changes, cleaning, or the time value of money, and it values each kilowatt-hour at today's retail rate even when the export tariff is poorer than that. Use it to compare materials and sizes, then ask two contractors for a production model on the actual azimuth and shade.`
		}
	];
}
function jsonLdFaqs(faqs) {
	return {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: faqs.map((faq) => ({
			"@type": "Question",
			name: faq.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: faq.answer
			}
		}))
	};
}
var $$splitComponentImporter = () => import("../_city-DUUkMNJ8.mjs");
var $$splitNotFoundComponentImporter = () => import("../_city-B_5pNkSo.mjs");
var Route = createFileRoute("/cities/$city")({
	loader: ({ params }) => {
		const city = getCity(params.city);
		if (!city) throw notFound();
		return { city };
	},
	validateSearch: (search) => parseEstimateSearch(search),
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [] };
		const { city } = loaderData;
		const title = `Roof Replacement & Solar ROI in ${city.city}, ${city.state_code} | Meridian Estimate`;
		const description = `Estimate a roof replacement and solar payback in ${city.city}, ${city.state}. Defaults use ${city.local_utility_name}, a $${city.avg_electric_bill} bill, ${city.solar_sun_hours} peak sun hours, and a ${city.labor_rate_index} labor index.`;
		return {
			meta: [{ title }, {
				name: "description",
				content: description
			}],
			scripts: [{
				type: "application/ld+json",
				children: JSON.stringify(jsonLdFaqs(cityFaqs(city)))
			}, {
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "BreadcrumbList",
					itemListElement: [
						{
							"@type": "ListItem",
							position: 1,
							name: "Estimator"
						},
						{
							"@type": "ListItem",
							position: 2,
							name: "Cities"
						},
						{
							"@type": "ListItem",
							position: 3,
							name: `${city.city}, ${city.state_code}`
						}
					]
				})
			}]
		};
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$4.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$5
});
var RobotsDottxtRoute = Route$3.update({
	id: "/robots.txt",
	path: "/robots.txt",
	getParentRoute: () => Route$5
});
var SitemapDotxmlRoute = Route$2.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$5
});
var CitiesIndexRoute = Route$1.update({
	id: "/cities/",
	path: "/cities/",
	getParentRoute: () => Route$5
});
var rootRouteChildren = {
	IndexRoute,
	RobotsDottxtRoute,
	SitemapDotxmlRoute,
	CitiesCityRoute: Route.update({
		id: "/cities/$city",
		path: "/cities/$city",
		getParentRoute: () => Route$5
	}),
	CitiesIndexRoute
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		rewrite: previewPathRewrite(),
		defaultErrorComponent: AppErrorComponent,
		scrollRestoration: true
	});
}
//#endregion
export { searchCities as S, cities as _, utilityNote as a, nationalCity as b, MATERIALS as c, formatMoney as d, formatMoneyCompact as f, searchFromParams as g, laborLabel as h, guideSections as i, MODEL as l, formatUnit as m, Route as n, Route$4 as o, formatRatePercent as p, cityFaqs as r, CREDIT_MODES as s, router_exports as t, estimate as u, citiesByState as v, nearbyCities as x, featuredCities as y };
