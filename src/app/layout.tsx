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
          <div id='root'>
            {children}
          </div>
        </ThemeProviderContext>
      </body>
    </html>
  )
}

export default RootLayout
