import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import cn from "../util/cn"

function Default({ children, className }: React.PropsWithChildren<{
    className?: string
}>) {
    return (
        <main className="flex flex-col min-h-[100vh]">
            <Navbar />
            <section className={cn("flex flex-col flex-grow", className)}>
                {children}
            </section>
            <Footer />
        </main>
    )
}

export default Default