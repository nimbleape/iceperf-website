import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Layout } from '../layout/Layout'
import { ProviderTitleAndBlurb } from '../components/ProviderTitleAndBlurb'
import { explanations } from '../constants'



export function Provider() {
  const { id } = useParams();

  const [currentImage, setCurrentImage] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    const getPosts = async () => {
      const resp = await fetch('/api/posts');
      const postsResp = await resp.json();

      if (!postsResp?.providerData) {
        return;
      }

      setData(postsResp.providerData[id]);
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

  return (
    <Layout>
      {/* Grid */}
      <ProviderTitleAndBlurb provider={id} />
      {Object.keys(data.data).map((o) => {
        return (
          <>
            <div>
              <h3>{explanations[o].title}</h3>
            </div>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'>
              {Object.keys(data.data[o]).map((i) => {
                // Card
                return (
                  <div key={i} className='flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700'>
                    <div className='p-4 md:p-5'>
                      <div className='flex items-center gap-x-2'>
                        <p className='text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500'>
                          {i.toUpperCase()}
                        </p>
                        <div className='hs-tooltip'>
                          <div className='hs-tooltip-toggle'>
                            <svg className='flex-shrink-0 size-4 text-gray-500 dark:text-neutral-500' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><circle cx='12' cy='12' r='10'/><path d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/><path d='M12 17h.01'/></svg>
                            <span className='hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700' role='tooltip'>
                              {explanations[o].description}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className='mt-1 flex items-center gap-x-2'>
                        <h3 className='text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200'>
                          {data.data[o][i] ? `${data.data[o][i]} ${explanations[o].measure}` : 'N/A'}
                        </h3>
                        {/* TODO percentage from best/worst */}
                        {/* <span className='flex items-center gap-x-1 text-green-600'>
                          <svg className='inline-block size-4 self-center' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><polyline points='22 7 13.5 15.5 8.5 10.5 2 17'/><polyline points='16 7 22 7 22 13'/></svg>
                          <span className='inline-block text-sm'>
                            1.7%
                          </span>
                        </span> */}
                      </div>
                    </div>
                  </div>
                )
                // End Card
              })}
            </div>
          </>
        )
      })}

      <div>
        <img src={currentImage} />
      </div>
      </Layout>
  )
}
