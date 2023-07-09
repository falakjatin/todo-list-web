import { AuthProvider } from '@/contexts/AuthProvider'
import ThemeProviderContext from '@/contexts/ThemeProvider'

import Header from '@components/Header'

import '@styles/globals.css'

export const metadata = {
  title: 'Todo List',
  description: 'Welcome to todo list app',
}

const RootLayout = ({
  children,
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
              <main className='px-6 md:px-8 mt-5 flex flex-1'>
                {children}
              </main>
            </div>
          </AuthProvider>
        </ThemeProviderContext>
      </body>
    </html>
  )
}

export default RootLayout
