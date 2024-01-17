import React from "react"
import cn from "../util/cn"
import colors from "../util/colors"
import Container from "./Container"
import Typography from "./Typography"

import Logo from "../assets/Footer Logo.svg"
import { Link } from "react-router-dom"

function FooterColumn({ children, className, ...props }: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) {
    return (
        <section className={cn("flex flex-col flex-grow", className)} {...props}>
            {children}
        </section>
    )
}

function FooterLinks({ children, className, title, ...props }: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement> & {
    title: string
}>) {
    return (
        <section role="contentinfo" className={cn("flex flex-col gap-5", className)} {...props}>
            <Typography type="Section categories" className={colors.text.secondary.white} role="columnheader">
                {title}
            </Typography>
            <ul>
                {React.Children.map(children, (child) => (
                    <Typography type="Regular text" className={colors.text.secondary.white}>
                        {child}
                    </Typography>
                ))}
            </ul>
        </section>
    )
}

function Footer() {
    return (
        <footer data-testid="footer" className={cn("flex items-center justify-center px-4 py-10 md:px-0", colors.bg.primary.green)}>
            <Container className="flex flex-row flex-wrap gap-10">
                <FooterColumn className="hidden md:flex">
                    <img data-testid="footer-logo" height={`250px`} width={`150px`} src={Logo} alt="company logo" />
                </FooterColumn>
                <FooterColumn>
                    <FooterLinks role="navigation" title="Doormat Navigation">
                        <Link role="link" to="/">Home</Link>
                        <Link role="link" to="/about">About</Link>
                        <Link role="link" to="/menu">Menu</Link>
                        <Link role="link" to="/reservations">Reservations</Link>
                        <Link role="link" to="/order-online">Order online</Link>
                        <Link role="link" to="/login">Login</Link>
                    </FooterLinks>
                </FooterColumn>
                <FooterColumn>
                    <FooterLinks role="contentinfo" title="Contact">
                        <span>Imaginary Streen 3rd Avenue</span>
                        <span>1000 CA, USA</span>
                        <br />
                        <span>+123 456 789</span>
                        <span>support@littlelemon.com</span>
                    </FooterLinks>
                </FooterColumn>
                <FooterColumn>
                    <FooterLinks role="contentinfo" title="Social Media Links">
                        <span>Facebook</span>
                        <span>Instagram</span>
                        <span>LinkedIn</span>
                    </FooterLinks>
                </FooterColumn>
                <FooterColumn className="md:hidden">
                    <img data-testid="footer-logo-mobile" className="object-contain w-1/2 mx-auto" src={Logo} alt="company logo" />
                </FooterColumn>
            </Container>
        </footer>
    )
}

export default Footer