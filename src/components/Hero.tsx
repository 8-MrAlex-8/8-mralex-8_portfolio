import image from "../assets/mypic.png"

const Hero = () => {
    return (
        <section className = "min-h-screen pt-28 pb-12 md:pt-20 md:pb-0 flex flex-col md:flex-row justify-center items-center px-10 w-full md:px-16 gap-8">
            <div className = "w-full md:w-1/2">
                <p className="mb-3 text-sm font-semibold text-amber-600">Developer, Data Geek, Mathematician.</p>
                <h1 className="text-4xl font-bold text-neutral-900 dark:text-white md:text-5xl">
                    Hi, I'm Lanz Alexander Malto.
                </h1>
                <p className="mt-4 text-neutral-600 dark:text-neutral-300">
                    I build performant, delightful web experiences. I specialize in React, TypeScript, and modern UI.
                </p>
                <div className="mt-6 flex flex-wrap justify-end md:justify-start items-center gap-3">
                <a href="#projects" className="inline-flex items-center rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200">
                    View Projects
                </a>
                <a href="#contact" className="inline-flex items-center rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-800">
                    Contact Me
                </a>
                </div>
            </div>
            <div className = "w-full md:w-1/2">
            <div className="h-100 w-full rounded-2xl bg-gradient-to-tr from-amber-300 via-rose-300 to-sky-300 p-1 dark:from-amber-400 dark:via-rose-400 dark:to-sky-400">
              <div className="flex h-full w-full items-center justify-center rounded-2xl bg-white/80">
                <span className="text-5xl">👋</span>
              </div>
            </div>  
            </div>
        </section>
    )
}

export default Hero;