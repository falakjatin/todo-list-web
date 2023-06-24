import '@styles/globals.css'

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
    <div>
      <p>Dashboard Layout</p>
      {children}
    </div>
  )
}

export default DashboardLayout
