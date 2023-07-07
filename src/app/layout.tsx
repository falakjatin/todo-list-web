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
              {children}
            </div>
          </AuthProvider>
        </ThemeProviderContext>
      </body>
    </html>
  )
}

export default RootLayout
