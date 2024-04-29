export function SubscribeForm() {
  return (
    <form action="https://xyz.us21.list-manage.com/subscribe/post?u=085f45fd52c0e578bf1635f71&id=f1965018c7&f_id=004985e6f0" method="post" target="_blank">
      <input type="hidden" name="tags" value="2989562" />
      <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 bg-white rounded-lg p-2 dark:bg-neutral-900">
        <div className="w-full">
          <label htmlFor="EMAIL" className="sr-only">Email</label>
          <input type="text" id="EMAIL" name="EMAIL" className="py-3 px-4 block w-full border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Enter your email" />
        </div>
      </div>
      <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 bg-white rounded-lg p-2 dark:bg-neutral-900">
        <div className="w-1/2">
          <label htmlFor="FNAME" className="sr-only">First Name</label>
          <input type="text" id="FNAME" name="FNAME" className="py-3 px-4 block w-full border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="First Name" />
        </div>
        <div className="w-1/2">
          <label htmlFor="LNAME" className="sr-only">Last Name</label>
          <input type="text" id="LNAME" name="LNAME" className="py-3 px-4 block w-full border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Last Name" />
        </div>
      </div>
      <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 p-2">
        <button type="submit" className="sm:p-4 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-ipblue-900  text-white hover:bg-ipblue-800 disabled:opacity-50 disabled:pointer-events-none">
          Subscribe
          <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </button>
      </div>
      <p className="mt-3 text-sm text-gray-400">
        Stay up to date on ICEPerf. Never spam.
      </p>
    </form>
  )
}