import { VariantProps, cva } from "class-variance-authority"
import cn from "../util/cn";
import colors from "../util/colors";
import Typography from "./Typography";

const ButtonVariants = cva("h-[50px] py-4 px-20 rounded-2xl max-w-full flex items-center justify-center gap-5", {
    variants: {
        kind: {
            yellow: cn(colors.bg.primary.yellow, colors.text.secondary.black),
            green: cn(colors.bg.primary.green, colors.text.secondary.white),
            white: cn(colors.bg.secondary.white, colors.text.secondary.black, `border border-[${colors.hex.secondary.black}]`)
        }
    },
    defaultVariants: {
        kind: "yellow"
    }
});

type Props = React.PropsWithChildren & React.HTMLAttributes<HTMLButtonElement> & VariantProps<typeof ButtonVariants>;

function Button({ children, className, kind, ...props }: Props) {
    return (
        <Typography
            className={ButtonVariants({ kind, className })}
            tag="button"
            type="Card title"
            {...props}>
            {children}
        </Typography>
    )
}

export default Button