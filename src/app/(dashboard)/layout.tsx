import Header from '@components/Header'

export const metadata = {
  title: 'Todo List',
  description: 'Welcome to todo list app',
}

const DashboardLayout = ({
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

export default DashboardLayout
