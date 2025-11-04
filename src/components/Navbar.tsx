import NavItems from '../data/NavItemData.ts';

const Navbar = () => {
   return (
    <header className="inset-x-0 fixed shadow-md bg-white">
      <div className="mx-auto max-w-6xl px-6 lg:px-4">
        <div className="flex items-center justify-between py-4">
          <button className="text-lg font-semibold tracking-tight text-neutral-900">
            Lanz Malto
          </button>

          <nav className="hidden gap-6 md:flex">
            {NavItems.map(item => (
              <button
                key={item.id}
                className="text-sm font-medium text-neutral-600 hover:text-purple-600 active:text-purple-600 hover:pointer transition"
              onClick={() => {
                document.getElementById(item.label)?.scrollIntoView({behavior: 'smooth'})
              }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              aria-label="Toggle theme"
              className="rounded-md border border-neutral-200 p-2 hover:bg-neutral-100 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-neutral-700">
                <path d="M21.64 13.64A9 9 0 1 1 10.36 2.36 7 7 0 1 0 21.64 13.64z" />
              </svg>
            </button>

            <button
              className="md:hidden rounded-md p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800"
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-neutral-800">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar;