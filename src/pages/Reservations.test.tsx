import { fireEvent, render, screen } from "@testing-library/react";
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

describe("Reservation", () => {
    describe("Step 1 - Form", () => {
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

        it("User can't continue on empty form", () => {
            render(<Reservations />, { wrapper: MemoryRouter });
            const formSubmitButton = screen.getByTestId("reservation-form--submit");

            fireEvent.click(formSubmitButton);

            const form = screen.getByTestId("reservation-form");
            expect(form).toBeInTheDocument();
        });


        describe("Form validation", () => {
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
        });
    })

    describe("Step 2 - Confirmation", () => {

    })

    describe("Step 3 - Success", () => {

    })
})