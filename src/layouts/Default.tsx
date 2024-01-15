function Default({ children }: React.PropsWithChildren) {
    return (
        <main className="flex flex-col">
            <>
                {children}
            </>
        </main>
    )
}

export default Default