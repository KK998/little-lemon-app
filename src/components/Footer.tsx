import React from "react"
import cn from "../util/cn"
import colors from "../util/colors"
import Container from "./Container"
import Typography from "./Typography"

import Logo from "../assets/Footer Logo.svg"
import { Link } from "react-router-dom"

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
                    <img height={`250px`} width={`150px`} src={Logo} alt="company logo" />
                </FooterColumn>
                <FooterColumn>
                    <FooterLinks title="Doormat Navigation">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/menu">Menu</Link>
                        <Link to="/reservations">Reservations</Link>
                        <Link to="/order-online">Order online</Link>
                        <Link to="/login">Login</Link>
                    </FooterLinks>
                </FooterColumn>
                <FooterColumn>
                    <FooterLinks title="Contact">
                        <span>Imaginary Streen 3rd Avenue</span>
                        <span>1000 CA, USA</span>
                        <br />
                        <span>+123 456 789</span>
                        <span>support@littlelemon.com</span>
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