import { useEffect, useState } from "react";
import { MAXIMUM_NUMBER_OF_PEOPLE, useReservationContext } from "../pages/Reservations";

function useReservationForm() {
    const [formErrors, setFormErrors] = useState<Record<string, string>>({});
    const [allowedTimes, setAllowedTimes] = useState<string[]>([]);
    const { formFields, setFormFields, setStep } = useReservationContext()

    useEffect(() => {
        const allowedTimes = [];
        for (let i = 12; i < 24; i++) {
            allowedTimes.push(`${i}:00`);
            allowedTimes.push(`${i}:30`);
        }
        setAllowedTimes(allowedTimes);

        // fetchAPI(date)... but the script is not working :(
    }, [formFields.date]);

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setFormErrors({});
        if (formFields.numberOfPeople > MAXIMUM_NUMBER_OF_PEOPLE) {
            setFormErrors(prev => ({
                ...prev,
                numberOfPeople: `Maximum number of people is ${MAXIMUM_NUMBER_OF_PEOPLE}`
            }))
        }
        if (formFields.numberOfPeople <= 0) {
            setFormErrors(prev => ({
                ...prev,
                numberOfPeople: `Minimum number of people is 1`
            }))
        }
        if (formFields.firstName.length === 0) {
            setFormErrors(prev => ({
                ...prev,
                firstName: `First name is required`
            }))
        }
        if (formFields.lastName.length === 0) {
            setFormErrors(prev => ({
                ...prev,
                lastName: `Last name is required`
            }))
        }
        if (formFields.date.length === 0) {
            setFormErrors(prev => ({
                ...prev,
                date: `Date is required`
            }))
        }
        if (formFields.time.length === 0) {
            setFormErrors(prev => ({
                ...prev,
                time: `Time is required`
            }))
        }
        if (new Date(formFields.date) < new Date()) {
            setFormErrors(prev => ({
                ...prev,
                date: `Date must be in the future`
            }))
        }
        if (formFields.numberOfPeople <= 0) {
            setFormErrors(prev => ({
                ...prev,
                numberOfPeople: `Minimum number of people is 1`
            }))
        }

        const requiredFields: Array<keyof typeof formFields> = ["firstName", "lastName", "date", "time", "numberOfPeople"];

        if (
            formErrors && Object.keys(formErrors).length === 0 &&
            requiredFields.every(field => formFields[field])
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
        textareaChangeHandler,
        formErrors
    }
}

export default useReservationForm;