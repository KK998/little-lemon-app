import { Link, useRouteError } from "react-router-dom";
import Typography from "../components/Typography"
import Default from "./Default";
import Button from "../components/Button";

function Error() {
    const error = useRouteError() as any;

    if (process.env.NODE_ENV !== "development") {
        console.log(error);
    }

    const message = error?.message || "";

    return (
        <Default className="flex flex-col items-center justify-center text-center">
            <Typography type="Display title" tag={"h1"}>
                Oops!
            </Typography>
            <Typography>Sorry, an unexpected error has occurred.</Typography>
            <p>
                <i>{message}</i>
            </p>
            <br />
            <Link to="/">
                <Button kind={"yellow"}>
                    Return to the home page
                </Button>
            </Link>
        </Default>
    )
}

export default Error