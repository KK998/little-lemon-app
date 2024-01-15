import About from "../components/About"
import Testimonials from "../components/Testimonials"
import Default from "../layouts/Default"

function Menu() {
    return (
        <Default>
            <About />
            <Testimonials />
        </Default>
    )
}

export default Menu