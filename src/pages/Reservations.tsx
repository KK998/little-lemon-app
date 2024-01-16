import Hero from "../components/Hero"
import Typography from "../components/Typography"
import Default from "../layouts/Default"

import ReservationJPEG from "../assets/reservation.jpeg";
import colors from "../util/colors";

function Reservations() {
    return (
        <Default>
            <Hero image={ReservationJPEG} className={colors.text.secondary.white}>
                <Typography tag="h1" type="Display title" className={colors.text.primary.yellow}>
                    Reserve a table
                </Typography>
                <Typography tag="h2" type="Sub title">Chicago</Typography>
                <Typography tag="p" type="Lead text" className="max-w-full sm:max-w-xs mt-10">
                    To reserve the table with us, please enter the required information below.
                </Typography>
            </Hero>
        </Default>
    )
}

export default Reservations