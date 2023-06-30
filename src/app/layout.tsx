import { AuthProvider } from '@/contexts/AuthProvider'
import ThemeProviderContext from '@/contexts/ThemeProvider'

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
      <body>
        <ThemeProviderContext>
          <AuthProvider>
            <div id='root'>
              {children}
            </div>
          </AuthProvider>
        </ThemeProviderContext>
      </body>
    </html>
  )
}

export default RootLayout
