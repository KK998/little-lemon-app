import { useMemo } from "react";
import { useReservationContext } from "../pages/Reservations";

function useReservationConfirmation() {
    const { formFields, setStep } = useReservationContext()

    const handleEditReservation = () => {
        setStep("FORM")
    }

    const handleConfirmReservation = () => {
        setStep("SUCCESS")
    }

    const formattedDate = useMemo(() => new Date(formFields.date).toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }), [formFields.date])

    return {
        formattedDate,
        handleEditReservation,
        handleConfirmReservation,
        formFields
    }
}

export default useReservationConfirmation;