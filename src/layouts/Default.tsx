import Navbar from "../components/Navbar"

function Default({ children }: React.PropsWithChildren) {
    return (
        <main className="flex flex-col">
            <Navbar />
            {children}
        </main>
    )
}

export default Default