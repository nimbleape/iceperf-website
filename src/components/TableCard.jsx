import PropTypes from 'prop-types'
import { ProviderLogo } from "../components/ProviderLogo"
import { StarIcon } from "../icons/Star"
import Chart from "react-apexcharts";

export function TableCard({ title, description }) {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Card */}
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-900 dark:border-neutral-700">
              {/* Header */}
              <div className="px-6 py-4 border-b border-gray-200 dark:border-neutral-700">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-neutral-200">
                  {title}
                </h2>
                <p className="text-sm text-gray-600 dark:text-neutral-400">
                  {description}
                </p>
              </div>
              {/* End Header */}

              {/* Table */}
              <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                <thead className="bg-gray-50 dark:bg-neutral-800">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-start whitespace-nowrap">
                      <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                        #
                      </span>
                    </th>

                    <th scope="col" className="px-6 py-3 text-start whitespace-nowrap min-w-64">
                      <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                        Coin
                      </span>
                    </th>

                    <th scope="col" className="px-6 py-3 text-start whitespace-nowrap">
                      <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                        Price
                      </span>
                    </th>

                    <th scope="col" className="px-6 py-3 text-start whitespace-nowrap">
                      <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                        1h
                      </span>
                    </th>

                    <th scope="col" className="px-6 py-3 text-start whitespace-nowrap">
                      <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                        24h
                      </span>
                    </th>

                    <th scope="col" className="px-6 py-3 text-start whitespace-nowrap">
                      <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                        7d
                      </span>
                    </th>

                    <th scope="col" className="px-6 py-3 text-start whitespace-nowrap">
                      <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                        24h Volume
                      </span>
                    </th>

                    <th scope="col" className="px-6 py-3 text-start whitespace-nowrap">
                      <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                        Mkt Cap
                      </span>
                    </th>

                    <th scope="col" className="px-6 py-3 text-start whitespace-nowrap">
                      <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                        Last 7 days
                      </span>
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  <tr>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <button type="button" className="flex items-center gap-x-2">
                        <StarIcon />
                        <span className="text-sm text-gray-800 dark:text-neutral-200">1</span>
                      </button>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <div className="flex items-center gap-x-3">
                        <svg className="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="2500" height="2500" viewBox="0.004 0 63.993 64"><path d="M63.04 39.741c-4.274 17.143-21.638 27.575-38.783 23.301C7.12 58.768-3.313 41.404.962 24.262 5.234 7.117 22.597-3.317 39.737.957c17.144 4.274 27.576 21.64 23.302 38.784z" fill="#f7931a"/><path d="M46.11 27.441c.636-4.258-2.606-6.547-7.039-8.074l1.438-5.768-3.512-.875-1.4 5.616c-.922-.23-1.87-.447-2.812-.662l1.41-5.653-3.509-.875-1.439 5.766c-.764-.174-1.514-.346-2.242-.527l.004-.018-4.842-1.209-.934 3.75s2.605.597 2.55.634c1.422.355 1.68 1.296 1.636 2.042l-1.638 6.571c.098.025.225.061.365.117l-.37-.092-2.297 9.205c-.174.432-.615 1.08-1.609.834.035.051-2.552-.637-2.552-.637l-1.743 4.02 4.57 1.139c.85.213 1.683.436 2.502.646l-1.453 5.835 3.507.875 1.44-5.772c.957.26 1.887.5 2.797.726L27.504 50.8l3.511.875 1.453-5.823c5.987 1.133 10.49.676 12.383-4.738 1.527-4.36-.075-6.875-3.225-8.516 2.294-.531 4.022-2.04 4.483-5.157zM38.087 38.69c-1.086 4.36-8.426 2.004-10.807 1.412l1.928-7.729c2.38.594 10.011 1.77 8.88 6.317zm1.085-11.312c-.99 3.966-7.1 1.951-9.083 1.457l1.748-7.01c1.983.494 8.367 1.416 7.335 5.553z" fill="#fff"/></svg>
                        <span className="font-semibold text-sm text-gray-800 dark:text-white">Bitcoin</span>
                        <span className="text-xs text-gray-500 dark:text-neutral-500">BTC</span>
                      </div>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <span className="text-sm text-gray-800 dark:text-white">$26,869.14</span>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <span className="text-sm text-red-500">-0.1%</span>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <span className="text-sm text-green-500">0.3%</span>
                    </td>
                    <td className="h-px w-72 whitespace-nowrap">
                      <span className="text-sm text-red-500">-3.8%</span>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <span className="text-sm text-gray-800 dark:text-white">$15,438,433,675</span>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <span className="text-sm text-gray-800 dark:text-white">$524,007,508,943</span>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <div className="inline-block">
                        <div id="hs-sparklines-line-chart-1"></div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <button type="button" className="flex items-center gap-x-2">
                        <StarIcon />
                        <span className="text-sm text-gray-800 dark:text-neutral-200">2</span>
                      </button>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <div className="flex items-center gap-x-3">
                        <svg className="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" height="2500" viewBox="420.1 80.7 1079.8 1758.6" width="983"><path d="m959.8 80.7-539.7 895.6 539.7-245.3z" fill="#8a92b2"/><path d="m959.8 731-539.7 245.3 539.7 319.1zm539.8 245.3-539.8-895.6v650.3z" fill="#62688f"/><path d="m959.8 1295.4 539.8-319.1-539.8-245.3z" fill="#454a75"/><path d="m420.1 1078.7 539.7 760.6v-441.7z" fill="#8a92b2"/><path d="m959.8 1397.6v441.7l540.1-760.6z" fill="#62688f"/></svg>
                        <span className="font-semibold text-sm text-gray-800 dark:text-white">Ethereum</span>
                        <span className="text-xs text-gray-500 dark:text-neutral-500">ETH</span>
                      </div>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <span className="text-sm text-gray-800 dark:text-white">$1,546.77</span>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <span className="text-sm text-red-500">-0.2%</span>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <span className="text-sm text-red-500">-0.1%</span>
                    </td>
                    <td className="h-px w-72 whitespace-nowrap">
                      <span className="text-sm text-red-500">-5.7%</span>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <span className="text-sm text-gray-800 dark:text-white">$6,591,963,010</span>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <span className="text-sm text-gray-800 dark:text-white">$185,955,678,121</span>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <div className="inline-block">
                      <Chart
                        options={{
                          chart: {
                            sparkline: {
                              enabled: true
                            }
                          },
                          stroke: {
                            curve: 'straight',
                            width: 2
                          },
                          xaxis: {
                            type: 'category',
                            categories: [
                              '25 January 2023',
                              '26 January 2023',
                              '27 January 2023',
                              '28 January 2023',
                              '29 January 2023',
                              '30 January 2023',
                              '31 January 2023',
                              '1 February 2023',
                              '2 February 2023',
                              '3 February 2023',
                              '4 February 2023',
                              '5 February 2023',
                              '6 February 2023',
                              '25 January 2023',
                              '26 January 2023',
                              '27 January 2023',
                              '28 January 2023',
                              '29 January 2023',
                              '30 January 2023',
                              '31 January 2023',
                              '1 February 2023'
                            ],
                            crosshairs: {
                              show: false
                            }
                          },
                          markers: {
                            hover: {
                              size: 0
                            }
                          },
                        }}
                        series={[{name: 'Sales', data: [21, 20, 24, 20, 18, 17, 11, 17, 18, 30, 31, 30, 30, 35, 25, 35, 35, 40, 60, 90, 90]}]}
                        type="line"
                        width={100}
                        height={30}
                      />
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <button type="button" className="flex items-center gap-x-2">
                        <StarIcon />
                        <span className="text-sm text-gray-800 dark:text-neutral-200">3</span>
                      </button>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <div className="flex items-center gap-x-3">
                        <ProviderLogo />
                        <span className="font-semibold text-sm text-gray-800 dark:text-white">Tether</span>
                        <span className="text-xs text-gray-500 dark:text-neutral-500">USDT</span>
                      </div>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <span className="text-sm text-gray-800 dark:text-white">$0.999970</span>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <span className="text-sm text-green-500">0.0%</span>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <span className="text-sm text-green-500">0.0%</span>
                    </td>
                    <td className="h-px w-72 whitespace-nowrap">
                      <span className="text-sm text-red-500">-0.1%</span>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <span className="text-sm text-gray-800 dark:text-white">$19,869,550,292</span>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <span className="text-sm text-gray-800 dark:text-white">$83,526,487,241</span>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <div className="inline-block">
                        <div id="hs-sparklines-line-chart-3"></div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <button type="button" className="flex items-center gap-x-2">
                        <StarIcon />
                        <span className="text-sm text-gray-800 dark:text-neutral-200">4</span>
                      </button>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <div className="flex items-center gap-x-3">
                        <ProviderLogo />
                        <span className="font-semibold text-sm text-gray-800 dark:text-white">BNB</span>
                        <span className="text-xs text-gray-500 dark:text-neutral-500">BNB</span>
                      </div>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <span className="text-sm text-gray-800 dark:text-white">$206.10</span>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <span className="text-sm text-red-500">-0.1%</span>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <span className="text-sm text-green-500">0.2%</span>
                    </td>
                    <td className="h-px w-72 whitespace-nowrap">
                      <span className="text-sm text-red-500">-3.5%</span>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <span className="text-sm text-gray-800 dark:text-white">$274,816,679</span>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <span className="text-sm text-gray-800 dark:text-white">$31,733,331,578</span>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <div className="inline-block">
                        <div id="hs-sparklines-line-chart-4"></div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <button type="button" className="flex items-center gap-x-2">
                        <StarIcon />
                        <span className="text-sm text-gray-800 dark:text-neutral-200">5</span>
                      </button>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <div className="flex items-center gap-x-3">
                        <svg className="flex-shrink-0 size-5" width="2500" height="2500" viewBox="0 0 2500 2500" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1250 2500C1940.36 2500 2500 1940.36 2500 1250C2500 559.644 1940.36 0 1250 0C559.644 0 0 559.644 0 1250C0 1940.36 559.644 2500 1250 2500Z" fill="black"/><path d="M1820.4 549.8H2053.6L1568.1 1053.2C1392.3 1235.5 1107.3 1235.5 931.9 1053.2L446.3 549.8H679.5L1048.2 932.2C1159.7 1047.5 1340 1047.5 1451.2 932.2L1820.4 549.8ZM676.6 1950.2H443.3L931.9 1443.4C1107.71261.1 1392.7 1261.1 1568.5 1443.4L2057.1 1950.2H1823.8L1452 1564.4C1340.5 1449.1 1160.2 1449.1 1049 1564.4L676.6 1950.2Z" fill="white"/></svg>
                        <span className="font-semibold text-sm text-gray-800 dark:text-white">XRP</span>
                        <span className="text-xs text-gray-500 dark:text-neutral-500">XRP</span>
                      </div>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <span className="text-sm text-gray-800 dark:text-white">$0.484377</span>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <span className="text-sm text-green-500">0.0%</span>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <span className="text-sm text-green-500">0.6%</span>
                    </td>
                    <td className="h-px w-72 whitespace-nowrap">
                      <span className="text-sm text-red-500">-7.3%</span>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <span className="text-sm text-gray-800 dark:text-white">$559,515,333</span>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <span className="text-sm text-gray-800 dark:text-white">$25,878,334,217</span>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <div className="inline-block">
                        <div id="hs-sparklines-line-chart-5"></div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <button type="button" className="flex items-center gap-x-2">
                        <StarIcon />
                        <span className="text-sm text-gray-800 dark:text-neutral-200">6</span>
                      </button>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <div className="flex items-center gap-x-3">
                        <svg className="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 2000">
                          <path d="M1000 2000c554.17 0 1000-445.83 1000-1000S1554.17 0 1000 0 0 445.83 0 1000s445.83 1000 1000 1000z" fill="#2775ca"/>
                          <path d="M1275 1158.33c0-145.83-87.5-195.83-262.5-216.66-125-16.67-150-50-150-108.34s41.67-95.83 125-95.83c75 0 116.67 25 137.5 87.5 4.17 12.5 16.67 20.83 29.17 20.83h66.66c16.67 0 29.17-12.5 29.17-29.16v-4.17c-16.67-91.67-91.67-162.5-187.5-170.83v-100c0-16.67-12.5-29.17-33.33-33.34h-62.5c-16.67 0-29.17 12.5-33.34 33.34v95.83c-125 16.67-204.16 100-204.16 204.17 0 137.5 83.33 191.66 258.33 212.5 116.67 20.83 154.17 45.83 154.17 112.5s-58.34 112.5-137.5 112.5c-108.34 0-145.84-45.84-158.34-108.34-4.16-16.66-16.66-25-29.16-25h-70.84c-16.66 0-29.16 12.5-29.16 29.17v4.17c16.66 104.16 83.33 179.16 220.83 200v100c0 16.66 12.5 29.16 33.33 33.33h62.5c16.67 0 29.17-12.5 33.34-33.33v-100c125-20.84 208.33-108.34 208.33-220.84z" fill="#fff"/>
                          <path d="M787.5 1595.83c-325-116.66-491.67-479.16-370.83-800 62.5-175 200-308.33 370.83-370.83 16.67-8.33 25-20.83 25-41.67V325c0-16.67-8.33-29.17-25-33.33-4.17 0-12.5 0-16.67 4.16-395.83 125-612.5 545.84-487.5 941.67 75 233.33 254.17 412.5 487.5 487.5 16.67 8.33 33.34 0 37.5-16.67 4.17-4.16 4.17-8.33 4.17-16.66v-58.34c0-12.5-12.5-29.16-25-37.5zM1229.17 295.83c-16.67-8.33-33.34 0-37.5 16.67-4.17 4.17-4.17 8.33-4.17 16.67v58.33c0 16.67 12.5 33.33 25 41.67 325 116.66 491.67 479.16 370.83 800-62.5 175-200 308.33-370.83 370.83-16.67 8.33-25 20.83-25 41.67V1700c0 16.67 8.33 29.17 25 33.33 4.17 0 12.5 0 16.67-4.16 395.83-125 612.5-545.84 487.5-941.67-75-237.5-258.34-416.67-487.5-491.67z" fill="#fff"/>
                        </svg>
                        <span className="font-semibold text-sm text-gray-800 dark:text-white">USDC</span>
                        <span className="text-xs text-gray-500 dark:text-neutral-500">USDC</span>
                      </div>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <span className="text-sm text-gray-800 dark:text-white">$1.00</span>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <span className="text-sm text-green-500">0.1%</span>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <span className="text-sm text-green-500">0.0%</span>
                    </td>
                    <td className="h-px w-72 whitespace-nowrap">
                      <span className="text-sm text-red-500">-0.0%</span>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <span className="text-sm text-gray-800 dark:text-white">$4,007,517,282</span>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <span className="text-sm text-gray-800 dark:text-white">$25,115,962,449</span>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <div className="inline-block">
                        <div id="hs-sparklines-line-chart-6"></div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <button type="button" className="flex items-center gap-x-2">
                        <StarIcon />
                        <span className="text-sm text-gray-800 dark:text-neutral-200">7</span>
                      </button>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <div className="flex items-center gap-x-3">
                        <ProviderLogo />
                        <span className="font-semibold text-sm text-gray-800 dark:text-white">Tron</span>
                        <span className="text-xs text-gray-500 dark:text-neutral-500">TRX</span>
                      </div>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <span className="text-sm text-gray-800 dark:text-white">$1,546.64</span>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <span className="text-sm text-red-500">-0.2%</span>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <span className="text-sm text-red-500">-0.0%</span>
                    </td>
                    <td className="h-px w-72 whitespace-nowrap">
                      <span className="text-sm text-red-500">-5.7%</span>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <span className="text-sm text-gray-800 dark:text-white">$2,882,655</span>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <span className="text-sm text-gray-800 dark:text-white">$13,629,792,526</span>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <div className="inline-block">
                        <div id="hs-sparklines-line-chart-7"></div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <button type="button" className="flex items-center gap-x-2">
                        <StarIcon />
                        <span className="text-sm text-gray-800 dark:text-neutral-200">8</span>
                      </button>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <div className="flex items-center gap-x-3">
                        <ProviderLogo />
                        <span className="font-semibold text-sm text-gray-800 dark:text-white">Solana</span>
                        <span className="text-xs text-gray-500 dark:text-neutral-500">SOL</span>
                      </div>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <span className="text-sm text-gray-800 dark:text-white">$22.11</span>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <span className="text-sm text-red-500">-0.1%</span>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <span className="text-sm text-green-500">3.6%</span>
                    </td>
                    <td className="h-px w-72 whitespace-nowrap">
                      <span className="text-sm text-red-500">-6.7%</span>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <span className="text-sm text-gray-800 dark:text-white">$317,711,493</span>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <span className="text-sm text-gray-800 dark:text-white">$9,153,498,199</span>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <div className="inline-block">
                        <div id="hs-sparklines-line-chart-8"></div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <button type="button" className="flex items-center gap-x-2">
                        <StarIcon />
                        <span className="text-sm text-gray-800 dark:text-neutral-200">9</span>
                      </button>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <div className="flex items-center gap-x-3">
                        <ProviderLogo />
                        <span className="font-semibold text-sm text-gray-800 dark:text-white">Cardano</span>
                        <span className="text-xs text-gray-500 dark:text-neutral-500">ADA</span>
                      </div>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <span className="text-sm text-gray-800 dark:text-white">$0.245322</span>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <span className="text-sm text-red-500">-0.3%</span>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <span className="text-sm text-red-500">-0.3%</span>
                    </td>
                    <td className="h-px w-72 whitespace-nowrap">
                      <span className="text-sm text-green-500">6.4%</span>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <span className="text-sm text-gray-800 dark:text-white">$100,329,073</span>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <span className="text-sm text-gray-800 dark:text-white">$8,551,032,069</span>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <div className="inline-block">
                        <div id="hs-sparklines-line-chart-9"></div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <button type="button" className="flex items-center gap-x-2">
                        <StarIcon />
                        <span className="text-sm text-gray-800 dark:text-neutral-200">10</span>
                      </button>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <div className="flex items-center gap-x-3">
                        <ProviderLogo />
                        <span className="font-semibold text-sm text-gray-800 dark:text-white">Polygon</span>
                        <span className="text-xs text-gray-500 dark:text-neutral-500">MATIC</span>
                      </div>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <span className="text-sm text-gray-800 dark:text-white">$0.058460</span>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <span className="text-sm text-red-500">-0.1%</span>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <span className="text-sm text-green-500">0.9%</span>
                    </td>
                    <td className="h-px w-72 whitespace-nowrap">
                      <span className="text-sm text-red-500">-5.0%</span>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <span className="text-sm text-gray-800 dark:text-white">$181,045,590</span>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <span className="text-sm text-gray-800 dark:text-white">$8,258,820,867</span>
                    </td>
                    <td className="size-px whitespace-nowrap px-6 py-3">
                      <div className="inline-block">
                        <div id="hs-sparklines-line-chart-10"></div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              {/* End Table */}
            </div>
          </div>
        </div>
      </div>
      {/* End Card */}
    </div>
  )
}

TableCard.defaultProps = {
  title: '',
  description: ''
};

TableCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};