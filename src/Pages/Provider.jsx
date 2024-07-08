import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Layout } from '../layout/Layout'
import { ProviderTitleAndBlurb } from '../components/ProviderTitleAndBlurb';
import { Typography } from '../components/Typography';
import TrendingUp from '../icons/TrendingUp';
import TrendingDown from '../icons/TrendingDown';
import { explanations, getProviderIdFromName } from '../constants';
import { fixedDecimals } from '../util/maths';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export function Provider({ isOSSProject }) {
  const { name } = useParams();

  const [data, setData] = useState();
  const [id, setId] = useState();
  // const [throughputData, setThroughputData] = useState();
  const [dataSeries, setDataSeries] = useState([]);

  useEffect(() => {
    const id = getProviderIdFromName(name);

    const getPosts = async () => {
      const resp = await fetch(`/api/${id}`);
      const postsResp = await resp.json();

      let avgData = postsResp?.providerData?.[id]?.data;
      if (isOSSProject) {
        avgData = postsResp?.ossData?.[id]?.data;
      }

      const series = [];

      if (postsResp.day7data.throughput?.length) {
        const num = postsResp.day7data.throughput.length - 1;
        const { udp, tcp, tls } = postsResp.day7data.throughput[num];
        if (udp?.length || tcp?.length || tls?.length) {
          postsResp.day7data.throughput[num].xAxis.forEach((k,i) => {
            let d = {
              name: k
            }
            if (udp?.length) {
              d.udp = udp[i]
            }
            if (tcp?.length) {
              d.tcp = tcp[i]
            }
            if (tls?.length) {
              d.tls = tls[i]
            }
            series.push(d)
          })
        }
      }

      for (const testName in avgData) {
        if (testName === 'throughtput') continue;
        for (const protocol in avgData[testName]) {
          if (postsResp.day7data[testName][protocol]) {
            avgData[testName][protocol].trend = [];
            postsResp.day7data[testName][protocol].x?.forEach((date, i) => {
              avgData[testName][protocol].trend.push({
                name: date,
                value: postsResp.day7data[testName][protocol].y[i],
              });
            });
          }
        }
      }
      setData(avgData);
      setDataSeries(series);
      // setThroughputData(postsResp.day7data.throughput);
    };

    getPosts();
    setId(id);
  }, [name, isOSSProject])

  if (!data) {
    return <></>;
  }

  console.log(data)

  return (
    <Layout>
      {/* Grid */}
      <ProviderTitleAndBlurb provider={id} />
      {Object.keys(data).map((test) => {
        if ((id === 'google' && test !== 'avgStunCandidate') || test === 'throughput') {
          return <></>;
        }
        return (
          <div key={test} className='mt-10'>
            <div>
              <h3 className='text-2xl dark:text-white'>{explanations[test]?.title}</h3>
              <p className='dark:text-white'><small>{explanations[test]?.description}</small></p>
            </div>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
              {Object.keys(data[test]).map((protocol) => {
                // Card
                return (
                  <div key={protocol} className='flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700'>
                    <div className='p-4 md:p-5'>
                      <div className='flex items-center gap-x-2'>
                        <p className='text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500'>
                          {protocol.toUpperCase()}
                        </p>
                        {/* <div className='hs-tooltip'>
                          <div className='hs-tooltip-toggle'>
                            <svg className='flex-shrink-0 size-4 text-gray-500 dark:text-neutral-500' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><circle cx='12' cy='12' r='10'/><path d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/><path d='M12 17h.01'/></svg>
                            <span className='hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700' role='tooltip'>
                              {explanations[test].description}
                            </span>
                          </div>
                        </div> */}
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

                      {!!data[test][protocol].trend?.length && (
                        <div className='mt-4 w-full h-36'>
                          <ResponsiveContainer width='100%' height='100%'>
                            <LineChart
                              width={500}
                              height={300}
                              data={data[test][protocol].trend}
                              margin={{
                                top: 5,
                                right: 5,
                                left: 5,
                                bottom: 5,
                              }}
                            >
                              <CartesianGrid strokeDasharray='3 3' />
                              <XAxis dataKey='name' type='category' />
                              <YAxis unit={explanations[test].measure} />
                              <Tooltip formatter={(value) => `${fixedDecimals(value, 1)}`}/>
                              <Line type='linear' dataKey='value' stroke='rgb(33,67,107)' dot={false} strokeWidth={2} />
                            </LineChart>
                          </ResponsiveContainer>
                        </div>
                      )}
                    </div>
                  </div>
                )
                // End Card
              })}
            </div>
          </div>
        )
      })}

      <div className='mt-20 w-full h-96'>
        {!!dataSeries.length && (
          <ResponsiveContainer width='100%' height='100%'>
            <h3 className='text-2xl dark:text-white'>TURN Throughput</h3>
            <LineChart
              width={500}
              height={300}
              data={dataSeries}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' type='number' interval='preserveStartEnd' tickFormatter={(value) => fixedDecimals(value / 1000, 1)} unit='s' />
              <YAxis unit='Mb/s'/>
              <Tooltip labelFormatter={(value) => fixedDecimals(value / 1000, 1)} formatter={(value) => `${fixedDecimals(value, 2)} Mb/s`}/>
              <Legend verticalAlign='top' />
              <Line type='linear' dataKey='udp' stroke='rgb(33,67,107)' dot={false} strokeWidth={3} />
              <Line type='linear' dataKey='tcp' stroke='rgb(97,156,220)' dot={false} strokeWidth={3} />
              <Line type='linear' dataKey='tls' stroke='rgb(14,30,47)' dot={false} strokeWidth={3} />

            </LineChart>
          </ResponsiveContainer>
        )}
      </div>

    </Layout>
  )
}

Provider.defaultProps = {
  isOSSProject: false,
};

Provider.propTypes = {
  isOSSProject: PropTypes.boolean,
};
