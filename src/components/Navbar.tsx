import Container from './Container';
import Typography from './Typography';

import routes from '../util/routes'
import cn from '../util/cn';
import colors from '../util/colors';

import Logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Button from './Button';

type Props = React.PropsWithChildren<{
    className?: string
}> & React.HTMLAttributes<HTMLDivElement>

const Navbar = ({ className, ...props }: Props) => {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(p => !p)
    }

    return (
        <>
            <header data-testid="navbar" role='navigation' className={cn("hidden sm:flex items-center h-[120px]", className)} {...props}>
                <Container className='items-center justify-between flex'>
                    <Link to="/">
                        <img src={Logo} alt="company logo" />
                    </Link>
                    <nav className="flex items-center justify-evenly ml-auto gap-10">
                        {routes.map((route) => (
                            <Link key={route.name} to={route.path}>
                                <Typography type={"Section categories"} className={colors.text.secondary.black}>
                                    {route.name}
                                </Typography>
                            </Link>
                        ))}
                    </nav>
                </Container>
            </header>

            <header data-testid="navbar-mobile" role='navigation' className={cn("flex flex-col relative sm:hidden", className)} {...props}>
                <Container className='flex justify-between items-center p-4'>
                    <Link to="/">
                        <img src={Logo} alt="company logo" />
                    </Link>
                    <Button kind={'white'} onClick={toggleMenu} className={cn('w-10 h-10 p-0 shadow-xl', menuOpen ? colors.bg.primary.green : colors.bg.secondary.white)}>
                        <svg className={colors.text.secondary.black} width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M4 6H20M4 12H20M4 18H20" stroke={menuOpen ? colors.hex.secondary.white : colors.hex.primary.green} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Button>
                    <nav className={cn("flex flex-col transition-all z-10 top-full absolute left-0 w-full h-auto", colors.bg.secondary.white, menuOpen ? "translate-x-0" : "translate-x-full")}>
                        {routes.map((route) => (
                            <Link key={route.name} to={route.path}>
                                <Typography type={"Section categories"} className={cn("py-4 transition-all text-center hover:bg-primary-green hover:text-secondary-white", colors.text.secondary.black)}>
                                    {route.name}
                                </Typography>
                            </Link>
                        ))}
                    </nav>
                </Container>
            </header>
        </>
    )
}

export default Navbar