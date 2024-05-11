import Link from 'next/link'

const NotFound = () => {
    return (
        <section className="bg-white dark:bg-gray-900 flex flex-1 min-w-full">
            <div className="container flex items-center px-6 py-12 mx-auto justify-center">
                <div>
                    <p className="text-sm font-medium text-blue-500 dark:text-blue-400">404 error</p>
                    <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">We can&apos;t find that page</h1>
                    <p className="mt-4 text-gray-500 dark:text-gray-400">Sorry, the page you are looking for doesn&apos;t exist or has been moved.</p>
                    <div className="flex items-center mt-6 gap-x-3">
                        <Link href={'/'} className="link-button flex items-center justify-center w-1/2 px-5 py-2 transition-colors duration-200 rounded-lg gap-x-2 sm:w-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                            </svg>
                            <span>Take me home</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NotFound
