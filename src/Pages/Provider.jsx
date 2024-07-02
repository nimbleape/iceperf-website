import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Layout } from '../layout/Layout'
import { ProviderTitleAndBlurb } from '../components/ProviderTitleAndBlurb'
import TrendingUp from '../icons/TrendingUp';
import TrendingDown from '../icons/TrendingDown';
import { explanations } from '../constants'
import { fixedDecimals } from '../util/maths';

export function Provider() {
  const { id } = useParams();

  const [currentImage, setCurrentImage] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    const getPosts = async () => {
      const resp = await fetch('/api/posts');
      const postsResp = await resp.json();

      if (!postsResp?.providerData?.[id]?.data) {
        return;
      }

      setData(postsResp.providerData[id].data);
    };

    getPosts();

    if (id !== 'xirsys' && id !== 'google') {
      import(`../assets/throughput/${id}.png`).then((image) =>
        setCurrentImage(image.default)
      )
    } else {
      setCurrentImage(undefined)
    }
  }, [id])

  if (!data) {
    return <></>;
  }

  console.log(data)
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

      <div className='mt-10'>
        <img src={currentImage} />
      </div>
      </Layout>
  )
}
