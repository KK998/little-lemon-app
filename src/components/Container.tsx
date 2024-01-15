import { cn } from "../util/cn"

type Props = React.PropsWithChildren<{
    className?: string
}> & React.HTMLAttributes<HTMLDivElement>

function Container({ className, children, ...props }: Props) {
    return (
        <div className={cn("mx-auto container", className)} {...props}>{children}</div>
    )
}

export default Container