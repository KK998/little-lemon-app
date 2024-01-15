import { Link } from "react-router-dom";
import Button from "../components/Button";
import Typography from "../components/Typography";
import Default from "../layouts/Default";
import colors from "../util/colors";
import cn from "../util/cn";
import Container from "../components/Container";

import HomePageHero from "../assets/HomePageHero.svg";

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
                    <Typography type="Lead text" className={colors.text.secondary.white}>
                        We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </Typography>
                    <Button kind="yellow">
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

function HomePage() {
    return (
        <Default>
            <HeroSection />
        </Default>
    );
}

export default HomePage;
