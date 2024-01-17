import { fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Reservations, { MAXIMUM_NUMBER_OF_PEOPLE } from "./Reservations";

const prepareForm = () => {
    render(<Reservations />, { wrapper: MemoryRouter });
    const formSubmitButton = screen.getByTestId("reservation-form--submit");

    const firstNameInput = screen.getByTestId("reservation-form--firstname");
    const lastNameInput = screen.getByTestId("reservation-form--lastname");
    const dateInput = screen.getByTestId("reservation-form--date");
    const timeInput = screen.getByTestId("reservation-form--time");
    const numberOfPeopleInput = screen.getByTestId("reservation-form--people");

    return { formSubmitButton, firstNameInput, lastNameInput, dateInput, timeInput, numberOfPeopleInput };
}

const ocrrectlyFilledForm = (firstNameInput: HTMLElement, lastNameInput: HTMLElement, dateInput: HTMLElement, timeInput: HTMLElement, numberOfPeopleInput: HTMLElement) => {
    const date = new Date();
    date.setDate(date.getDate() + 1);

    fireEvent.change(firstNameInput, { target: { value: "John" } });
    fireEvent.change(lastNameInput, { target: { value: "Doe" } });
    fireEvent.change(dateInput, { target: { value: date.toISOString().split("T")[0] } });
    fireEvent.change(timeInput, { target: { value: "12:00" } });
    fireEvent.change(numberOfPeopleInput, { target: { value: 1 } });
}

const moveToStepTwo = () => {
    const { formSubmitButton, firstNameInput, lastNameInput, dateInput, timeInput, numberOfPeopleInput } = prepareForm();

    ocrrectlyFilledForm(firstNameInput, lastNameInput, dateInput, timeInput, numberOfPeopleInput);

    fireEvent.click(formSubmitButton);
}

const moveToStepThree = async () => {
    moveToStepTwo();
    const button = screen.getByTestId("confirmation--confirm-reservation");
    fireEvent.click(button);
}

describe("Reservation", () => {
    describe("Step 1 - Form", () => {
        describe("Renders correct sections", () => {
            it("renders the hero section", () => {
                render(<Reservations />, { wrapper: MemoryRouter });
                const heroSection = screen.getByTestId("hero");
                expect(heroSection).toBeInTheDocument();
            });

            it("renders the form", () => {
                render(<Reservations />, { wrapper: MemoryRouter });
                const form = screen.getByTestId("reservation-form");
                expect(form).toBeInTheDocument();
            });

            it("renders the testimonials and about section", () => {
                render(<Reservations />, { wrapper: MemoryRouter });
                const testimonialsSection = screen.getByTestId("testimonials");
                const aboutSection = screen.getByTestId("about");

                expect(testimonialsSection).toBeInTheDocument();
                expect(aboutSection).toBeInTheDocument();
            });
        });

        describe("Form validation", () => {
            it("User can't continue on empty form", () => {
                render(<Reservations />, { wrapper: MemoryRouter });
                const formSubmitButton = screen.getByTestId("reservation-form--submit");

                fireEvent.click(formSubmitButton);

                const form = screen.getByTestId("reservation-form");
                expect(form).toBeInTheDocument();
            });

            it("User can't continue on no first name", () => {
                const { formSubmitButton, firstNameInput } = prepareForm();

                fireEvent.change(firstNameInput, { target: { value: "" } });
                fireEvent.click(formSubmitButton);

                const form = screen.getByTestId("reservation-form");
                expect(form).toBeInTheDocument();
            });

            it("User can't continue on no last name", () => {
                const { formSubmitButton, lastNameInput } = prepareForm();

                fireEvent.change(lastNameInput, { target: { value: "" } });
                fireEvent.click(formSubmitButton);

                const form = screen.getByTestId("reservation-form");
                expect(form).toBeInTheDocument();
            });

            it("User can't continue on no date", () => {
                const { formSubmitButton, dateInput } = prepareForm();

                fireEvent.change(dateInput, { target: { value: "" } });
                fireEvent.click(formSubmitButton);

                const form = screen.getByTestId("reservation-form");
                expect(form).toBeInTheDocument();
            });

            it("User can't continue on no time", () => {
                const { formSubmitButton, timeInput } = prepareForm();

                fireEvent.change(timeInput, { target: { value: "" } });
                fireEvent.click(formSubmitButton);

                const form = screen.getByTestId("reservation-form");
                expect(form).toBeInTheDocument();
            });

            it("User can't continue if number of people is wrong", () => {
                const { formSubmitButton, numberOfPeopleInput } = prepareForm();
                let form;

                // if number of people is less than 1
                fireEvent.change(numberOfPeopleInput, { target: { value: 0 } });
                fireEvent.click(formSubmitButton);
                form = screen.getByTestId("reservation-form");
                expect(form).toBeInTheDocument();

                // if number of people is more than defined const
                fireEvent.change(numberOfPeopleInput, { target: { value: MAXIMUM_NUMBER_OF_PEOPLE } });
                fireEvent.click(formSubmitButton);
                form = screen.getByTestId("reservation-form");
                expect(form).toBeInTheDocument();

                // if number of people is not a number
                fireEvent.change(numberOfPeopleInput, { target: { value: "not a number" } });
                fireEvent.click(formSubmitButton);
                form = screen.getByTestId("reservation-form");
                expect(form).toBeInTheDocument();
            });

            it("User can't continue if date is in the past", () => {
                const { formSubmitButton, dateInput } = prepareForm();

                const date = new Date();
                date.setDate(date.getDate() - 1);

                fireEvent.change(dateInput, { target: { value: date.toISOString().split("T")[0] } });
                fireEvent.click(formSubmitButton);

                const form = screen.getByTestId("reservation-form");
                expect(form).toBeInTheDocument();
            });

            it("User can continue if all fields are correctly filled", () => {
                const { formSubmitButton, firstNameInput, lastNameInput, dateInput, timeInput, numberOfPeopleInput } = prepareForm();

                ocrrectlyFilledForm(firstNameInput, lastNameInput, dateInput, timeInput, numberOfPeopleInput);

                fireEvent.click(formSubmitButton);

                const form = screen.queryByTestId("reservation-form");
                expect(form).not.toBeInTheDocument();
            });
        });
    })

    describe("Step 2 - Confirmation", () => {
        describe("Renders correct sections", () => {
            it("renders the confirmation section", () => {
                moveToStepTwo();

                const confirmationSection = screen.getByTestId("confirmation");
                expect(confirmationSection).toBeInTheDocument();
            });

            it("renders the testimonials and about section", () => {
                moveToStepTwo();

                const testimonialsSection = screen.getByTestId("testimonials");
                const aboutSection = screen.getByTestId("about");

                expect(testimonialsSection).toBeInTheDocument();
                expect(aboutSection).toBeInTheDocument();
            });
        });

        describe("Confirmation Section", () => {
            it("Renders all form fields", () => {
                moveToStepTwo();

                const fields = screen.getByTestId("confirmation--fields");
                expect(fields).toBeInTheDocument();

                const labels = within(fields).getAllByTestId("confirmation--field-label");

                expect(labels[0]).toHaveTextContent("First Name:");
                expect(labels[1]).toHaveTextContent("Last Name:");
                expect(labels[2]).toHaveTextContent("Date Of Arrival:");
                expect(labels[3]).toHaveTextContent("Time Of Arrival:");
                expect(labels[4]).toHaveTextContent("Number Of People:");
                expect(labels[5]).toHaveTextContent("Occasion:");
                expect(labels[6]).toHaveTextContent("Alergens:");
                expect(labels[7]).toHaveTextContent("Additional Notes:");
            })

            it("Renders edit reservation button", () => {
                moveToStepTwo();

                const button = screen.getByTestId("confirmation--edit-reservation");
                expect(button).toBeInTheDocument();
            });

            it("Renders confirm reservation button", () => {
                moveToStepTwo();

                const button = screen.getByTestId("confirmation--confirm-reservation");
                expect(button).toBeInTheDocument();
            });

            it("Goes to step 1 on edit reservation button click", () => {
                moveToStepTwo();

                const button = screen.getByTestId("confirmation--edit-reservation");
                fireEvent.click(button);

                const form = screen.getByTestId("reservation-form");
                expect(form).toBeInTheDocument();
            });

            it("Goes to step 3 on confirm reservation button click", async () => {
                moveToStepTwo();
                const button = screen.getByTestId("confirmation--confirm-reservation");
                fireEvent.click(button);

                await waitFor(() => {
                    const section = screen.getByTestId("reservation-success");
                    expect(section).toBeInTheDocument();
                });
            });
        })
    })

    describe("Step 3 - Success", () => {
        it("Renders thank you title", async () => {
            await moveToStepThree();

            const title = screen.getByTestId("reservation-success--title");
            expect(title).toBeInTheDocument();
        });

        it("Renders thank you message", async () => {
            await moveToStepThree();

            const message = screen.getByTestId("reservation-success--message");
            expect(message).toBeInTheDocument();
        });

        it("Renders QR code", async () => {
            await moveToStepThree();

            const qrCode = screen.getByTestId("reservation-success--qr-code");
            expect(qrCode).toBeInTheDocument();
        });

        it("Renders Back to Home button", async () => {
            await moveToStepThree();

            const button = screen.getByTestId("reservation-success--link");
            expect(button).toBeInTheDocument();
        });
    })
})