import image from '../assets/icononly.png'

export function Hero() {
  return (
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 lg:pt-32 lg:pb-24">
      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
        <div>
          <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">Compare TURN networks with <span className="text-ipblue-900">ICEPerf</span></h1>
          <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">Which is the best TURN network for you? ICEPerf shows you the facts.</p>

          {/* Buttons */}
          {/* <div className="mt-7 grid gap-3 w-full sm:inline-flex">
            <Button label="Get Started" icon={
              <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            }/>
          </div> */}
          {/* End Buttons */}
        </div>
        {/* End Col */}

        <div className="relative ms-4">
          <img className="w-full rounded-md" src={image} alt="IcePerf logo" />
          {/* <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-neutral-800 dark:via-neutral-900/0 dark:to-neutral-900/0"></div> */}


        </div>
        {/* End Col */}
      </div>
      {/* End Grid */}
    </div>
  )
}
