import { Link } from "react-router-dom";

import Button from "../components/Button";
import Typography from "../components/Typography";
import Container from "../components/Container";
import FoodCard from "../components/FoodCard";

import Default from "../layouts/Default";

import colors from "../util/colors";
import cn from "../util/cn";

import HomePageHero from "../assets/HomePageHero.svg";
import Testimonials from "../components/Testimonials";
import About from "../components/About";

function HeroSection() {
    return (
        <section data-testid="hero-section" className={cn("flex flex-col md:flex-row items-center justify-center py-10 mb-20", colors.bg.primary.green)}>
            <Container className="relative md:px-0 px-4">
                <img loading="eager"
                    className="md:absolute md:right-0 md:top-0 w-[380px] md:h-[450px] rounded-xl max-w-full object-cover mb-4 md:mb-0"
                    src={HomePageHero}
                    alt="Man with food"
                />
                <section className="flex flex-col gap-5 max-w-full sm:max-w-sm mr-auto">
                    <div className="flex flex-col gap-0">
                        <Typography data-testid="hero-section--title" tag={"h1"} type="Display title" className={colors.text.primary.yellow}>
                            Little Lemon
                        </Typography>
                        <Typography data-testid="hero-section--subtitle" tag={"h3"} type="Sub title" className={colors.text.secondary.white}>
                            Chicago
                        </Typography>
                    </div>
                    <Typography type="Lead text" className={cn(colors.text.secondary.white, "w-[210px] max-w-full")}>
                        We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </Typography>
                    <Button data-testid="hero-section--link" kind="yellow" className="w-[250px] max-w-full whitespace-nowrap" role="link">
                        <Link to={"/reservations"}>
                            Reserve a table
                        </Link>
                    </Button>
                </section>
            </Container>
        </section>
    );
}

function ThisWeekSpecials() {
    return (
        <section data-testid="specials-section" className="flex flex-col gap-10 p-4 md:py-16 md:px-0">
            <Container>
                <section className="flex flex-col md:flex-row justify-between md:items-center mb-10">
                    <Typography data-testid="specials-section--title" tag="h3" type="Display title" className={colors.text.secondary.black}>
                        This week's specials!
                    </Typography>
                    <Button kind="yellow" data-testid="specials-section--link">
                        <Link to={"/menu"}>
                            Online Menu
                        </Link>
                    </Button>
                </section>
                <article data-testid="specials-section--cards" className="flex flex-wrap gap-5">
                    <FoodCard
                        name="Greek Salad"
                        price={12.99}
                        link="/menu"
                        description="Freshly cut tomatoes, cucumbers, onions, olives, and feta cheese. Served with our homemade dressing."
                        image="https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=640&h=360&dpr=1"
                    />
                    <FoodCard
                        name="Bruchetta"
                        price={5.99}
                        link="/menu"
                        description="Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
                        image="https://images.pexels.com/photos/4969892/pexels-photo-4969892.jpeg?auto=compress&cs=tinysrgb&w=640&h=360&dpr=1"
                    />
                    <FoodCard
                        name="Lemon Desser"
                        price={5.0}
                        link="/menu"
                        description="This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
                        image="https://images.pexels.com/photos/8085289/pexels-photo-8085289.jpeg?auto=compress&cs=tinysrgb&w=640&h=360&dpr=1"
                    />
                </article>
            </Container>
        </section>
    )
}

function HomePage() {
    return (
        <Default>
            <HeroSection />
            <ThisWeekSpecials />
            <Testimonials />
            <About />
        </Default>
    );
}

export default HomePage;
