import PropTypes from 'prop-types'
import { ProviderLogo } from "../components/ProviderLogo"
// import Chart from "react-apexcharts";
import { providers, providerData, explanations } from "../constants"

export function TableCard({ title, description, field }) {

  //go and get the data

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
                    <th scope="col" className="px-6 py-3 text-start whitespace-nowrap min-w-64">
                      &nbsp;
                    </th>
                    <th scope="col" className="px-6 py-3 text-start whitespace-nowrap min-w-64">
                      <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                        Provider
                      </span>
                    </th>

                    {Object.keys(providerData.cloudflare.data[field]).map((i) => {
                      return (
                        <th key={i} scope="col" className="px-6 py-3 text-start whitespace-nowrap">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                            {i}
                          </span>
                        </th>
                      )
                    })}

                    {/* <th scope="col" className="px-6 py-3 text-start whitespace-nowrap">
                      <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                        Last 7 days
                      </span>
                    </th> */}
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  {providers.map((provider) => {
                    const lcp = provider.toLowerCase();
                    const data = providerData[lcp].data[field]

                    if (!data) {
                      return null
                    }

                    return (
                      <tr key={provider} className='max-h-16'>
                        <td className="size-px whitespace-nowrap px-6 py-3">
                          <div className="flex items-center gap-x-3">
                            <ProviderLogo provider={lcp} />
                          </div>
                        </td>
                        <td className="size-px whitespace-nowrap px-6 py-3">
                          <div className="flex items-center gap-x-3">
                            <span className="font-semibold text-sm text-gray-800 dark:text-white">{provider}</span>
                            {/* <span className="text-xs text-gray-500 dark:text-neutral-500">ETH</span> */}
                          </div>
                        </td>
                        {Object.keys(data).map((i) => {
                          return (
                            <td key={i} className="size-px whitespace-nowrap px-6 py-3">
                              <span className="text-sm text-gray-800 dark:text-white">{data[i] ? `${data[i]} ${explanations[field].measure}` : 'N/A'}</span>
                            </td>
                          )
                        })}
                        {/* <td className="size-px whitespace-nowrap px-6 py-3">
                          <Chart
                            style={{display: "inline-block"}}
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
                        </td> */}
                      </tr>
                    )
                  })}
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
  description: '',
  field: ''
};

TableCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  field: PropTypes.string
};