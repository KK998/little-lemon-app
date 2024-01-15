import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

function Default({ children }: React.PropsWithChildren) {
    return (
        <div className="flex flex-col min-h-[100vh]">
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Default