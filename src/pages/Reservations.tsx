import { createContext, useContext, useState } from "react";

import Hero from "../components/Hero"
import Typography from "../components/Typography"
import Testimonials from "../components/Testimonials";
import About from "../components/About";
import Button from "../components/Button";
import FormField from "../components/FormField";
import Default from "../layouts/Default"

import cn from "../util/cn";
import colors from "../util/colors";

import ReservationJPEG from "../assets/reservation.jpeg";

type ReservationStep = "FORM" | "CONFIRMATION" | "SUCCESS"

type ReservationFormFields = {
    firstName: string
    lastName: string
    date: string
    time: string
    numberOfPeople: number
    occasion: string
    alergens?: string
    notes?: string
}

const MAXIMUM_NUMBER_OF_PEOPLE = 50

function FormRow({ children }: React.PropsWithChildren<{}>) {
    return <div className="flex flex-wrap gap-5">{children}</div>
}

function ReservationForm() {
    const { formFields, setFormFields, setStep } = useReservationContext()

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setStep("CONFIRMATION")
    }

    return (
        <section className="flex items-center justify-center py-16">
            <form onSubmit={handleFormSubmit} className={cn("container mx-auto flex flex-col gap-5 p-16 shadow-xl rounded-2xl", colors.bg.primary.green)}>
                <FormRow>
                    <FormField label="First Name" name="firstName">
                        <FormField.Input
                            name="firstName"
                            type="text"
                            value={formFields.firstName}
                            onChange={(e) => setFormFields({ ...formFields, firstName: e.target.value })}
                            required
                        />
                    </FormField>
                    <FormField label="Last Name" name="lastName">
                        <FormField.Input
                            name="lastName"
                            type="text"
                            value={formFields.lastName}
                            onChange={(e) => setFormFields({ ...formFields, lastName: e.target.value })}
                            required
                        />
                    </FormField>
                </FormRow>
                <FormRow>
                    <FormField label="Date Of Arrival" name="date">
                        <FormField.Input
                            name="date"
                            type="date"
                            value={formFields.date}
                            onChange={(e) => setFormFields({ ...formFields, date: e.target.value })}
                            required
                        />
                    </FormField>
                    <FormField label="Time Of Arrival" name="time">
                        <FormField.Input
                            name="time"
                            type="time"
                            value={formFields.time}
                            onChange={(e) => setFormFields({ ...formFields, time: e.target.value })}
                            required
                        />
                    </FormField>
                </FormRow>
                <FormRow>
                    <FormField label="Number Of People" name="numberOfPeople">
                        <FormField.Input
                            name="numberOfPeople"
                            type="number"
                            value={formFields.numberOfPeople}
                            onChange={(e) => setFormFields({ ...formFields, numberOfPeople: Number(e.target.value) })}
                            min={1}
                            max={MAXIMUM_NUMBER_OF_PEOPLE}
                            required
                        />
                    </FormField>
                    <FormField label="Occasion" name="occasion">
                        <FormField.Input
                            name="occasion"
                            type="text"
                            value={formFields.occasion}
                            onChange={(e) => setFormFields({ ...formFields, occasion: e.target.value })}
                        />
                    </FormField>
                </FormRow>
                <FormRow>
                    <FormField label="Alergens" name="alergens">
                        <FormField.Input
                            name="alergens"
                            type="text"
                            value={formFields.alergens}
                            onChange={(e) => setFormFields({ ...formFields, alergens: e.target.value })}
                        />
                    </FormField>
                </FormRow>
                <FormRow>
                    <FormField label="Notes" name="notes">
                        <FormField.TextArea
                            name="notes"
                            value={formFields.notes}
                            onChange={(e) => setFormFields({ ...formFields, notes: e.target.value })}
                        />
                    </FormField>
                </FormRow>
                <FormRow>
                    <Button kind={"yellow"} className="mx-auto" buttonType="submit">
                        Reserve table
                    </Button>
                </FormRow>
            </form>
        </section>
    )
}

function ReservationConfirmation() {
    return <div />
}

function ReservationSuccess() {
    return <div />
}

function stepToComponent(step: ReservationStep) {
    switch (step) {
        case "FORM":
            return (
                <>
                    <Hero image={ReservationJPEG} className={colors.text.secondary.white}>
                        <Typography tag="h1" type="Display title" className={colors.text.primary.yellow}>
                            Reserve a table
                        </Typography>
                        <Typography tag="h2" type="Sub title">Chicago</Typography>
                        <Typography tag="p" type="Lead text" className="max-w-full sm:max-w-xs mt-10">
                            To reserve the table with us, please enter the required information below.
                        </Typography>
                    </Hero>
                    <ReservationForm />
                    <Testimonials />
                    <About />
                </>
            )
        case "CONFIRMATION":
            return (
                <>
                    <ReservationConfirmation />
                    <Testimonials />
                    <About />
                </>
            )
        case "SUCCESS":
            return <ReservationSuccess />
    }
}

type ReservationContextValue = {
    formFields: ReservationFormFields
    setFormFields: (fields: ReservationFormFields) => void
    step: ReservationStep
    setStep: (step: ReservationStep) => void
}

const ReservationContext = createContext<ReservationContextValue | null>(null)

const useReservationContext = () => {
    const context = useContext(ReservationContext);
    if (!context) {
        throw new Error("useReservationContext must be used within a ReservationContextProvider")
    }
    return context
}

function Reservations() {
    const [step, setStep] = useState<ReservationStep>("FORM")
    const [formFields, setFormFields] = useState<ReservationFormFields>({
        firstName: "",
        lastName: "",
        date: new Date().toISOString().split("T")[0], // current date
        time: new Date().toISOString().split("T")[1].split(":").slice(0, 2).join(":"), // current time (hour:minutes)
        numberOfPeople: 1,
        occasion: "",
        alergens: "",
        notes: ""
    })

    return (
        <ReservationContext.Provider value={{ formFields, setFormFields, step, setStep }}>
            <Default>
                {stepToComponent(step)}
            </Default>
        </ReservationContext.Provider>
    )
}

export default Reservations