'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import { useAuth } from '@/contexts/AuthProvider'
import ThemeSwitcher from '@components/ThemeSwitch/ThemeSwitch'

const Header = () => {

    const pathname = usePathname()
    const { userData, clearUserData } = useAuth()

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)] dark:shadow-modalDarkShadow bg-headerBg">
            {/* navigation bar for md */}
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 md:px-8 sticky top-0" aria-label="Global">
                <div className="flex md:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span>logo</span>
                    </Link>
                </div>
                <div className="flex md:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden md:flex md:flex-1 md:justify-end">
                    <ThemeSwitcher />
                    {userData ? <button
                        onClick={clearUserData}
                        className="text-sm font-semibold leading-6">
                        Log out <span aria-hidden="true">&rarr;</span>
                    </button>
                        : <Link href={pathname === '/' ? '/register' : '/'} className="text-sm font-semibold leading-6">
                            {pathname === '/' ? 'Register' : 'Log in'} <span aria-hidden="true">&rarr;</span>
                        </Link>}
                </div>
            </nav>

            <Dialog as="div" className="md:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                {/* navigation bar for mobile */}
                <Dialog.Panel className="bg-bgColor fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span>logo</span>
                        </a>
                        <ThemeSwitcher />
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="py-6">
                                {userData ? <button
                                    onClick={clearUserData}
                                    className="-mx-3 block rounded-md px-3 py-2.5 font-semibold leading-7 hover:bg-gray-50"
                                >
                                    Log out
                                </button>
                                    : <Link
                                        href={pathname === '/' ? '/register' : '/'}
                                        className="-mx-3 block rounded-md px-3 py-2.5 font-semibold leading-7 hover:bg-gray-50"
                                    >
                                        {pathname === '/' ? 'Register' : 'Log in'}
                                    </Link>}
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}

export default Header
