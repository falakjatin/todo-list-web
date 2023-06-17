import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Todo List',
  description: 'Welcome to todo list app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id='root'>
          <p>Root Layout</p>
          {children}
        </div>
      </body>
    </html>
  )
}
