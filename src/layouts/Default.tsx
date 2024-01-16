import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import cn from "../util/cn"

function Default({ children, className }: React.PropsWithChildren<{
    className?: string
}>) {
    return (
        <div className="flex flex-col min-h-[100vh]">
            <Navbar />
            <main className={cn("flex flex-col flex-grow", className)}>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Default