function Error({ children }: React.PropsWithChildren) {
    return (
        <main>
            <h1>We encountered an error</h1>
            <>{children}</>
        </main>
    )
}

export default Error