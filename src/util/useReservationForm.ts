import { useEffect, useState } from "react";
import { MAXIMUM_NUMBER_OF_PEOPLE, useReservationContext } from "../pages/Reservations";

function useReservationForm() {
    const [allowedTimes, setAllowedTimes] = useState<string[]>([]);
    const { formFields, setFormFields, setStep } = useReservationContext()

    useEffect(() => {
        const allowedTimes = [];
        for (let i = 8; i < 17; i++) {
            allowedTimes.push(`${i}:00`);
            allowedTimes.push(`${i}:30`);
        }
        setAllowedTimes(allowedTimes);

        // fetchAPI(date)... but the script is not working :(
    }, [formFields.date]);

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (
            formFields.numberOfPeople <= MAXIMUM_NUMBER_OF_PEOPLE &&
            formFields.numberOfPeople > 0 &&
            formFields.firstName.length > 0 &&
            formFields.lastName.length > 0 &&
            formFields.date.length > 0 &&
            formFields.time.length > 0 &&
            new Date(formFields.date) > new Date()
        ) {
            // here we would send the data to the backend
            // if the script was working, we would have a submitAPI(formData) function that would send the data to the backend
            setStep("CONFIRMATION")
        }
    }

    const defaultFormFieldChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormFields(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    const textareaChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormFields(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    return {
        allowedTimes,
        formFields,
        setFormFields,
        setStep,
        handleFormSubmit,
        defaultFormFieldChangeHandler,
        textareaChangeHandler
    }
}

export default useReservationForm;