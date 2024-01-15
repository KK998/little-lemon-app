import Logo from '../assets/Logo.svg';

import routes from '../util/routes'
import { cn } from '../util/cn';
import Container from './Container';

type Props = React.PropsWithChildren<{
    className?: string
}>

const Navbar = ({ className }: Props) => {
    return (
        <div className={cn("flex items-center h-[120px]", className)}>
            <Container className='flex items-center justify-between'>
                <img className="" src={Logo} alt="company logo" />
                <nav className="flex items-center justify-evenly ml-auto gap-5">
                    {routes.map((route) => <a key={route.name} href={route.path}>{route.name}</a>)}
                </nav>
            </Container>
        </div>
    )
}

export default Navbar