import Container from './Container';
import Typography from './Typography';

import routes from '../util/routes'
import cn from '../util/cn';
import colors from '../util/colors';

import Logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';

type Props = React.PropsWithChildren<{
    className?: string
}> & React.HTMLAttributes<HTMLDivElement>

const Navbar = ({ className, ...props }: Props) => {
    return (
        <header data-testid="navbar" role='navigation' className={cn("flex items-center h-[120px]", className)} {...props}>
            <Container className='flex items-center justify-between'>
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
    )
}

export default Navbar