import Header from '@components/Header'

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
    <>
      <Header />
      {children}
    </>
  )
}

export default AuthLayout
