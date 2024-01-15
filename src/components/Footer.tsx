import React from "react"
import cn from "../util/cn"
import colors from "../util/colors"
import Container from "./Container"
import Typography from "./Typography"

function FooterColumn({ children, className, ...props }: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) {
    return (
        <div className={cn("flex flex-col flex-grow", className)} {...props}>
            {children}
        </div>
    )
}

function FooterLinks({ children, className, title, ...props }: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement> & {
    title: string
}>) {
    return (
        <div className={cn("flex flex-col gap-5", className)} {...props}>
            <Typography type="Section categories" className={colors.text.secondary.white}>
                {title}
            </Typography>
            <nav>
                {React.Children.map(children, (child) => (
                    <Typography type="Regular text" className={colors.text.secondary.white}>
                        {child}
                    </Typography>
                ))}
            </nav>
        </div>
    )
}

function Footer() {
    return (
        <footer className={cn("flex items-center justify-center py-10", colors.bg.primary.green)}>
            <Container className="flex flex-row flex-wrap gap-10">
                <FooterColumn>
                    <img src="" alt="company logo" />
                </FooterColumn>
                <FooterColumn>
                    <FooterLinks title="Doormat Navigation">
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Menu</a>
                        <a href="#">Reservations</a>
                        <a href="#">Order online</a>
                        <a href="#">Login</a>
                    </FooterLinks>
                </FooterColumn>
                <FooterColumn>
                    <FooterLinks title="Contact">
                        <span>Address</span>
                        <span>Phone Number</span>
                        <span>Email</span>
                    </FooterLinks>
                </FooterColumn>
                <FooterColumn>
                    <FooterLinks title="Social Media Links">
                        <span>Facebook</span>
                        <span>Instagram</span>
                        <span>LinkedIn</span>
                    </FooterLinks>
                </FooterColumn>
            </Container>
        </footer>
    )
}

export default Footer