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
        <section className={cn("flex items-center justify-center py-10 mb-20", colors.bg.primary.green)}>
            <Container className="relative">
                <div className="flex flex-col gap-5 max-w-full sm:max-w-sm mr-auto">
                    <div className="flex flex-col gap-0">
                        <Typography tag={"h1"} type="Display title" className={colors.text.primary.yellow}>
                            Little Lemon
                        </Typography>
                        <Typography tag={"h3"} type="Sub title" className={colors.text.secondary.white}>
                            Chicago
                        </Typography>
                    </div>
                    <Typography type="Lead text" className={cn(colors.text.secondary.white, "w-[210px] max-w-full")}>
                        We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </Typography>
                    <Button kind="yellow" className="w-[250px] max-w-full whitespace-nowrap">
                        <Link to={"/reservations"}>
                            Reserve a table
                        </Link>
                    </Button>
                </div>
                <img
                    height={`353px`}
                    width={`380px`}
                    loading="eager"
                    className="absolute right-0 top-0 max-w-full object-cover"
                    src={HomePageHero}
                    alt="Man with food"
                />
            </Container>
        </section>
    );
}

function ThisWeekSpecials() {
    return (
        <section className="flex flex-col gap-10 py-16">
            <Container>
                <div className="flex justify-between items-center mb-10">
                    <Typography tag="h3" type="Display title" className={colors.text.secondary.black}>
                        This week's specials!
                    </Typography>
                    <Button kind="yellow">
                        <Link to={"/menu"}>
                            Online Menu
                        </Link>
                    </Button>
                </div>
                <div className="flex flex-wrap gap-5">
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
                </div>
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
