import { cn } from "../util/cn"

type Props = React.PropsWithChildren<{
    className?: string
}>

function Container({ className, children }: Props) {
    return (
        <div className={cn("mx-auto container", className)}>{children}</div>
    )
}

export default Container