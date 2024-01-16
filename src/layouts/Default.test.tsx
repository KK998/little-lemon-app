import { render, screen, within } from "@testing-library/react";
import Default from "./Default";
import { MemoryRouter } from "react-router";


describe("Default Layout", () => {
    it("renders children", () => {
        render(
            <Default>
                <div data-testid="test-children" />
            </Default>
            , { wrapper: MemoryRouter });
        const children = screen.getByTestId("test-children");
        expect(children).toBeInTheDocument();
    });

    describe("Header", () => {
        it("renders header", () => {
            render(<Default />, { wrapper: MemoryRouter });
            const navbar = screen.getByTestId("navbar");
            expect(navbar).toBeInTheDocument();
        });

        it("renders a logo", () => {
            render(<Default />, { wrapper: MemoryRouter });
            const navbar = screen.getByTestId("navbar");
            const logo = within(navbar).getByAltText("company logo");

            expect(logo).toBeInTheDocument();
        })

        it("renders a navigation", () => {
            render(<Default />, { wrapper: MemoryRouter });
            const navbar = screen.getByTestId("navbar");
            const navigation = within(navbar).getByRole("navigation");

            expect(navigation).toBeInTheDocument();
        })

        it("Navigation has all the links", () => {
            render(<Default />, { wrapper: MemoryRouter });
            const navbar = screen.getByTestId("navbar");
            const navigation = within(navbar).getByRole("navigation");

            const links = within(navigation).getAllByRole("link");

            const neededLinks = ["Home", "About", "Menu", "Reservations", "Order online", "Login"];

            links.forEach((link) => {
                link.textContent && neededLinks.splice(neededLinks.indexOf(link.textContent!), 1);
            });

            expect(neededLinks.length).toBe(0);
        });
    })

    describe("Footer", () => {
        it("renders footer", () => {
            render(<Default />, { wrapper: MemoryRouter });
            const footer = screen.getByTestId("footer");
            expect(footer).toBeInTheDocument();
        });

        it("renders footer logo", () => {
            render(<Default />, { wrapper: MemoryRouter });
            const logo = screen.getByTestId("footer-logo");
            expect(logo).toBeInTheDocument();
        });

        it("renders doormat navigation", () => {
            render(<Default />, { wrapper: MemoryRouter });

            const footer = screen.getByTestId("footer");
            const doormat = within(footer).getByRole("navigation");

            expect(doormat).toBeInTheDocument();
        });

        it("renders contact", () => {
            render(<Default />, { wrapper: MemoryRouter });

            const footer = screen.getByTestId("footer");
            const contact = within(footer).getByText("Contact");

            expect(contact).toBeInTheDocument();
        });

        it("renders social media links", () => {
            render(<Default />, { wrapper: MemoryRouter });

            const footer = screen.getByTestId("footer");
            const socialMedia = within(footer).getByText("Social Media Links");

            expect(socialMedia).toBeInTheDocument();
        });
    });
});