import Container from './Container';
import Typography from './Typography';

import routes from '../util/routes'
import cn from '../util/cn';
import colors from '../util/colors';

import Logo from '../assets/Logo.svg';

type Props = React.PropsWithChildren<{
    className?: string
}> & React.HTMLAttributes<HTMLDivElement>

const Navbar = ({ className, ...props }: Props) => {
    return (
        <div className={cn("flex items-center h-[120px]", className)} {...props}>
            <Container className='flex items-center justify-between'>
                <img src={Logo} alt="company logo" />
                <nav className="flex items-center justify-evenly ml-auto gap-10">
                    {routes.map((route) => <a key={route.name} href={route.path}>
                        <Typography type={"Section categories"} className={colors.text.secondary.black}>
                            {route.name}
                        </Typography>
                    </a>)}
                </nav>
            </Container>
        </div>
    )
}

export default Navbar