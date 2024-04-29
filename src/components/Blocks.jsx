export function Blocks({ children }) {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 items-center gap-6 md:gap-10">
        {children}
      </div>
    </div>
  )
}