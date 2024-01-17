import { useEffect } from "react";
import { DEFAULT_FORM_FIELDS, useReservationContext } from "../pages/Reservations";

function useReservationSuccess() {
    const { formFields, setFormFields } = useReservationContext()

    useEffect(() => {
        setFormFields(DEFAULT_FORM_FIELDS);
    }, [setFormFields]);

    const qrUrl = new URL("https://api.qrserver.com/v1/create-qr-code/");
    qrUrl.searchParams.append("size", "250x250");
    qrUrl.searchParams.append("data", JSON.stringify({
        "First Name": formFields.firstName,
        "Last Name": formFields.lastName,
        "Date of reservation": formFields.date,
        "Time of reservation": formFields.time,
        "Number of people": formFields.numberOfPeople,
        "Occasion": formFields.occasion,
        "Alergens": formFields.alergens,
        "Additional notes": formFields.notes
    }));
    return {
        qrUrl
    }
}
export default useReservationSuccess;