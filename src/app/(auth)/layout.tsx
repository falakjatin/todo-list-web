import '../globals.css'

export const metadata = {
    title: 'Login!',
    description: 'Welcome to todo list app',
}

export default function AuthLayout({
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
