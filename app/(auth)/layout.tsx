import '../globals.css'

export const metadata = {
  title: 'Auth',
  description: 'Welcome to todo list app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
        <div>
          <p>Auth Layout</p>
          {children}
        </div>
  )
}
