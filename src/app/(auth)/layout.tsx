import '@styles/globals.css'

export const metadata = {
  title: 'Auth',
  description: 'Welcome to todo list app',
}

const AuthLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <div>
      <p>Auth Layout</p>
      {children}
    </div>
  )
}

export default AuthLayout
