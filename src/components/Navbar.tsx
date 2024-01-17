import Container from './Container';
import Typography from './Typography';

import routes from '../util/routes'
import cn from '../util/cn';
import colors from '../util/colors';

import Logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

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

            <header data-testid="navbar" role='navigation' className={cn("flex flex-col relative sm:hidden", className)} {...props}>
                <Container className='flex justify-between items-center'>
                    <Link to="/">
                        <img src={Logo} alt="company logo" />
                    </Link>
                    <button onClick={toggleMenu} className='focus:outline-none'>
                        <svg className={colors.text.secondary.black} width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <nav className={cn("flex flex-col z-10 bottom-0 absolute left-0 w-full h-auto", colors.bg.secondary.white)}>
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
        </>
    )
}

export default Navbar