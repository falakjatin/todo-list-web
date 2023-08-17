import { AuthProvider } from '@/contexts/AuthProvider'
import ThemeProviderContext from '@/contexts/ThemeProvider'

import Header from '@components/Header'

import '@styles/globals.css'

export const metadata = {
  title: 'Todo List',
  description: 'Welcome to todo list app',
}

const RootLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang='en' data-theme='dark'>
      <body className='bg-bgColor text-textColor'>
        <ThemeProviderContext>
          <AuthProvider>
            <div id='root' className='min-h-screen flex flex-col'>
              <Header />
              <main className='px-6 md:px-8 mt-5 mx-auto flex flex-1 max-w-7xl min-w-full'>
                <div className='flex min-w-full'>
                  {children}
                </div>
              </main>
            </div>
          </AuthProvider>
        </ThemeProviderContext>
      </body>
    </html>
  )
}

export default RootLayout
