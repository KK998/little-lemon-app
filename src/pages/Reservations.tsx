import { createContext, useContext, useState } from "react";
import { Link } from "react-router-dom";

import Hero from "../components/Hero"
import Typography from "../components/Typography"
import Testimonials from "../components/Testimonials";
import About from "../components/About";
import Button from "../components/Button";
import FormField from "../components/FormField";
import Container from "../components/Container";
import Default from "../layouts/Default"

import cn from "../util/cn";
import colors from "../util/colors";
import { getCurrentRoudedTime } from "../util/time";
import useReservationForm from "../util/useReservationForm";
import useReservationConfirmation from "../util/useReservationConfirmation";
import useReservationSuccess from "../util/useReservationSuccess";

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

type ReservationContextValue = {
    formFields: ReservationFormFields
    setFormFields: React.Dispatch<React.SetStateAction<ReservationFormFields>>
    step: ReservationStep
    setStep: React.Dispatch<React.SetStateAction<ReservationStep>>
}

export const MAXIMUM_NUMBER_OF_PEOPLE = 50

export const DEFAULT_FORM_FIELDS: ReservationFormFields = {
    firstName: "",
    lastName: "",
    date: new Date().toISOString().split("T")[0], // current date
    time: getCurrentRoudedTime(), // current time (hour:minutes)
    numberOfPeople: 1,
    occasion: "Other",
    alergens: "",
    notes: ""
};

const STEP_TO_COMPONENT: Record<ReservationStep, JSX.Element> = {
    "FORM": <ReservationForm />,
    "CONFIRMATION": <ReservationConfirmation />,
    "SUCCESS": <ReservationSuccess />
}

const ReservationContext = createContext<ReservationContextValue | null>(null)

export const useReservationContext = () => {
    const context = useContext(ReservationContext);
    if (!context) {
        throw new Error("useReservationContext must be used within a ReservationContextProvider")
    }
    return context
}

function FormRow({ children, className, ...props }: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) {
    return <section className={cn("flex flex-wrap gap-5", className)} {...props}>{children}</section>
}

function ReservationEntry({ label, value }: { label: string, value: string | number }) {
    return (
        <section className="flex flex-col">
            <Typography tag="p" type="Section categories" className={cn(colors.text.secondary.black)} data-testid="confirmation--field-label">
                {label}:
            </Typography>
            <Typography tag="p" type="Lead text" className={cn(colors.text.secondary.black)}>
                {value}
            </Typography>
        </section>
    )
}

function ReservationForm() {
    const {
        allowedTimes,
        handleFormSubmit,
        formFields,
        setFormFields,
        defaultFormFieldChangeHandler,
        textareaChangeHandler
    } = useReservationForm();

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
            <section className="flex items-center justify-center py-16">
                <form data-testid="reservation-form" onSubmit={handleFormSubmit} className={cn("container mx-auto flex flex-col gap-5 p-16 shadow-xl rounded-2xl", colors.bg.primary.green)}>
                    <FormRow>
                        <FormField label="First Name" name="firstName">
                            <FormField.Input
                                name="firstName"
                                type="text"
                                value={formFields.firstName}
                                onChange={defaultFormFieldChangeHandler}
                                required
                                placeholder="John"
                                data-testid="reservation-form--firstname"
                            />
                        </FormField>
                        <FormField label="Last Name" name="lastName">
                            <FormField.Input
                                name="lastName"
                                type="text"
                                value={formFields.lastName}
                                onChange={defaultFormFieldChangeHandler}
                                required
                                placeholder="Doe"
                                data-testid="reservation-form--lastname"
                            />
                        </FormField>
                    </FormRow>
                    <FormRow>
                        <FormField label="Date Of Arrival" name="date">
                            <FormField.Input
                                name="date"
                                type="date"
                                value={formFields.date}
                                onChange={defaultFormFieldChangeHandler}
                                required
                                data-testid="reservation-form--date"
                            />
                        </FormField>
                        <FormField label="Time Of Arrival" name="time">
                            <FormField.Input
                                name="time"
                                type="time"
                                value={formFields.time}
                                onChange={(e) => {
                                    if (!allowedTimes.includes(e.target.value)) {
                                        return;
                                    }
                                    setFormFields({ ...formFields, time: e.target.value });
                                }}
                                required
                                data-testid="reservation-form--time"
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
                                data-testid="reservation-form--people"
                            />
                        </FormField>
                        <FormField label="Occasion" name="occasion">
                            <FormField.Select
                                name="occasion"
                                value={formFields.occasion}
                                onChange={(e) => setFormFields({ ...formFields, occasion: e.target.value })}>
                                <option value="Other">Other</option>
                                <option value="Birthday">Birthday</option>
                                <option value="Anniversary">Anniversary</option>
                                <option value="Business">Business</option>
                                <option value="Wedding">Wedding</option>
                            </FormField.Select>
                        </FormField>
                    </FormRow>
                    <FormRow>
                        <FormField label="Alergens" name="alergens">
                            <FormField.TextArea
                                name="alergens"
                                value={formFields.alergens}
                                onChange={textareaChangeHandler}
                                placeholder="No alergens"
                            />
                        </FormField>
                    </FormRow>
                    <FormRow>
                        <FormField label="Additional Notes" name="notes">
                            <FormField.TextArea
                                name="notes"
                                value={formFields.notes}
                                onChange={textareaChangeHandler}
                                rows={5}
                                placeholder="No additional notes"
                            />
                        </FormField>
                    </FormRow>
                    <FormRow className="mt-5">
                        <Button data-testid="reservation-form--submit" kind={"yellow"} className="mx-auto" buttonType="submit">
                            Reserve table
                        </Button>
                    </FormRow>
                </form>
            </section>
        </>
    )
}

function ReservationConfirmation() {
    const {
        formattedDate,
        handleEditReservation,
        handleConfirmReservation,
        formFields
    } = useReservationConfirmation();

    return (
        <Container data-testid="confirmation" className="flex flex-col gap-5 py-16">
            <section className="flex flex-col gap-0">
                <Typography tag={"h1"} type="Display title" className={colors.text.primary.yellow}>
                    Table reservation
                </Typography>
                <Typography tag={"h2"} type="Sub title" className={colors.text.secondary.black}>
                    Chicago
                </Typography>
            </section>
            <section data-testid="confirmation--fields" role="contentinfo" className="flex flex-col gap-3">
                <ReservationEntry label="First Name" value={formFields.firstName} />
                <ReservationEntry label="Last Name" value={formFields.lastName} />
                <ReservationEntry label="Date Of Arrival" value={formattedDate} />
                <ReservationEntry label="Time Of Arrival" value={formFields.time} />
                <ReservationEntry label="Number Of People" value={`${formFields.numberOfPeople} person`} />
                <ReservationEntry label="Occasion" value={formFields.occasion} />
                <ReservationEntry label="Alergens" value={formFields.alergens || "No alergens"} />
                <ReservationEntry label="Additional Notes" value={formFields.notes || "No additional notes"} />
            </section>
            <section data-testid="confirmation--buttons" role="navigation" className="flex flex-wrap items-start justify-start gap-5">
                <Button kind="white" onClick={handleEditReservation} data-testid="confirmation--edit-reservation">
                    Edit reservation
                </Button>
                <Button kind="yellow" onClick={handleConfirmReservation} data-testid="confirmation--confirm-reservation">
                    Confirm reservation
                </Button>
            </section>
        </Container>
    )
}

function ReservationSuccess() {
    const { qrUrl } = useReservationSuccess();

    return (
        <Container data-testid="reservation-success" className="flex flex-col justify-center items-center gap-10 grow h-auto">
            <section className="flex flex-col justify-center text-center gap-0">
                <Typography data-testid="reservation-success--title" tag={"h1"} type="Display title" className={colors.text.primary.yellow}>
                    Thank you for your reservation!
                </Typography>
                <Typography data-testid="reservation-success--message" tag={"p"} type="Lead text" className={colors.text.secondary.black}>
                    Show this QR code at reception.
                </Typography>
            </section>
            <aside className="flex flex-col items-center justify-center p-5">
                <img data-testid="reservation-success--qr-code" src={qrUrl.toString()} alt="QR code" className="object-contain" />
            </aside>
            <Link data-testid="reservation-success--link" role="link" to="/">
                <Button role="link">
                    Back to home
                </Button>
            </Link>
        </Container>
    )
}

function Reservations() {
    const [step, setStep] = useState<ReservationStep>("FORM")
    const [formFields, setFormFields] = useState<ReservationFormFields>(DEFAULT_FORM_FIELDS)

    return (
        <ReservationContext.Provider value={{ formFields, setFormFields, step, setStep }}>
            <Default>
                {STEP_TO_COMPONENT[step]}
                {step !== "SUCCESS" && (
                    <>
                        <Testimonials />
                        <About />
                    </>
                )}
            </Default>
        </ReservationContext.Provider>
    )
}

export default Reservations