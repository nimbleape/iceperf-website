import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Chart from 'react-apexcharts';

import { Layout } from '../layout/Layout'
import { ProviderTitleAndBlurb } from '../components/ProviderTitleAndBlurb'
import TrendingUp from '../icons/TrendingUp';
import TrendingDown from '../icons/TrendingDown';
import { explanations, getProviderIdFromName } from '../constants'
import { fixedDecimals } from '../util/maths';

export function Provider({ isOSSProject }) {
  const { name } = useParams();

  const [data, setData] = useState();
  const [id, setId] = useState();
  const [throughputData, setThroughputData] = useState();
  const [dataSeries, setDataSeries] = useState([]);


  useEffect(() => {
    const id = getProviderIdFromName(name);

    const getPosts = async () => {
      const resp = await fetch(`/api/${id}`);
      const postsResp = await resp.json();

      if (isOSSProject) {
        setData(postsResp?.ossData?.[id]?.data);
      } else {
        setData(postsResp?.providerData?.[id]?.data);
      }
      if (!postsResp?.providerData?.[id]?.data) {
        return;
      }

      if (postsResp.throughput) {
        const { udp, tcp, tls } = postsResp.throughput;
        if (udp?.y?.length || tcp?.y?.length || tls?.y?.length) {
          const series = [];
          if (udp?.y?.length) {
            series.push({
              name: 'TURN - UDP',
              data: udp.y,
            });
          }
          if (tcp?.y?.length) {
            series.push({
              name: 'TURN - TCP',
              data: tcp.y,
            });
          }
          if (tls?.y?.length) {
            series.push({
              name: 'TURNS - TCP',
              data: tls.y,
            });
          }
          setDataSeries(series);
          setThroughputData(postsResp.throughput);
        }
      }
    };

    getPosts();
    setId(id);
  }, [name, isOSSProject])

  if (!data) {
    return <></>;
  }

  console.log(throughputData)

  return (
    <Layout>
      {/* Grid */}
      <ProviderTitleAndBlurb provider={id} />
      {Object.keys(data).map((test) => {
        return (
          <div key={test} className='mt-10'>
            <div>
              <h3>{explanations[test].title}</h3>
            </div>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'>
              {Object.keys(data[test]).map((protocol) => {
                // Card
                return (
                  <div key={protocol} className='flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700'>
                    <div className='p-4 md:p-5'>
                      <div className='flex items-center gap-x-2'>
                        <p className='text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500'>
                          {protocol.toUpperCase()}
                        </p>
                        <div className='hs-tooltip'>
                          <div className='hs-tooltip-toggle'>
                            <svg className='flex-shrink-0 size-4 text-gray-500 dark:text-neutral-500' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><circle cx='12' cy='12' r='10'/><path d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/><path d='M12 17h.01'/></svg>
                            <span className='hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700' role='tooltip'>
                              {explanations[test].description}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className='mt-1 flex items-center gap-x-2'>
                        <h3 className='text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200'>
                          {data[test][protocol].value ? `${fixedDecimals(data[test][protocol].value, 1)} ${explanations[test].measure}` : 'N/A'}
                        </h3>
                        {!!data[test][protocol].offsetFromBestPercent && (
                          <span className='flex items-center gap-x-1 text-redBad dark:text-redBad-dark leading-8'>
                            {data[test][protocol].offsetFromBestPercent > 0 ?
                              <TrendingUp /> : <TrendingDown />
                            }
                            <span className='inline-block text-xs'>
                              {data[test][protocol].offsetFromBestPercent > 0 && '+'}
                              {Math.ceil(data[test][protocol].offsetFromBestPercent)}%
                            </span>
                          </span>
                        )}
                        {data[test][protocol].offsetFromBestPercent === 0 && (
                          <span className='flex items-center gap-x-1 text-greenGood dark:text-greenGood-dark text-xs leading-8'>
                            Best
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                )
                // End Card
              })}
            </div>
          </div>
        )
      })}

      {throughputData && !!dataSeries.length && (
        <div className='mt-20 w-full h-96'>
          <Chart
            style={{display: 'inline-block' }}
            options={{
              title: {
                text: 'TURN Throughput',
                style: {
                  fontSize: 16,
                  fontWeight: 'normal',
                  fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji"',
                }
              },
              chart: {
                animations: {
                  enabled: false,
                },
                toolbar: {
                  show: false,
                  offsetY: 50,
                  tools: {
                    download: false,
                    selection: false,
                    zoom: false,
                    zoomin: false,
                    zoomout: false,
                    pan: false,
                    reset: false,
                  },
                },
              },
              stroke: {
                curve: 'straight',
                width: 2
              },
              legend: {
                show: true,
                showForSingleSeries: true,
                position: 'top',
                horizontalAlign: 'right',
              },
              xaxis: {
                type: 'numeric',
                categories: throughputData.xAxis,
                min: 0,
                labels: {
                  formatter: (value) => fixedDecimals(value / 1000, 1),
                },
                title: {
                  text: 'Test time [s]',
                },
                crosshairs: {
                  show: true,
                },
                tooltip: {
                  formatter: (value) => `${fixedDecimals(value / 1000, 1)} s`,
                },
              },
              yaxis: {
                labels: {
                  formatter: (value) => `${value} Mb/s`,
                },
              },
              markers: {
                hover: {
                  size: 0
                }
              },
              tooltip: {
                x: {
                  show: false,
                },
                y: {
                  formatter: (value) => `${fixedDecimals(value, 2)} Mb/s`,
                },
                followCursor: true,
              },
            }}
            series={dataSeries}
            type='line'
            width='600px'
            height='400px'
          />
        </div>
      )}
    </Layout>
  )
}

Provider.defaultProps = {
  isOSSProject: false,
};

Provider.propTypes = {
  isOSSProject: PropTypes.boolean,
};
