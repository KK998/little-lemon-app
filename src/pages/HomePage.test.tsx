import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router";

import HomePage from "./HomePage";

describe("Homepage", () => {
    describe("Hero section", () => {
        it("renders the section", () => {
            render(<HomePage />, { wrapper: MemoryRouter });
            const heroSection = screen.getByTestId("hero-section");
            expect(heroSection).toBeInTheDocument();
        });

        it("renders title", () => {
            render(<HomePage />, { wrapper: MemoryRouter });
            const title = screen.getByTestId("hero-section--title");
            expect(title).toBeInTheDocument();
        });

        it("renders subtitle", () => {
            render(<HomePage />, { wrapper: MemoryRouter });
            const subtitle = screen.getByTestId("hero-section--subtitle");
            expect(subtitle).toBeInTheDocument();
        });

        it("renders clicable link", () => {
            render(<HomePage />, { wrapper: MemoryRouter });
            const link = screen.getByTestId("hero-section--link");
            expect(link).toBeInTheDocument();
        });
    })

    describe("Specials section", () => {
        it("renders the section", () => {
            render(<HomePage />, { wrapper: MemoryRouter });
            const specialsSection = screen.getByTestId("specials-section");
            expect(specialsSection).toBeInTheDocument();
        });

        it("renders title", () => {
            render(<HomePage />, { wrapper: MemoryRouter });
            const title = screen.getByTestId("specials-section--title");
            expect(title).toBeInTheDocument();
        });

        it("renders link", () => {
            render(<HomePage />, { wrapper: MemoryRouter });
            const link = screen.getByTestId("specials-section--link");
            expect(link).toBeInTheDocument();
        });

        it("renders 3 food cards", () => {
            render(<HomePage />, { wrapper: MemoryRouter });
            const foodCards = screen.getAllByTestId("food-card");
            expect(foodCards.length).toBe(3);
        });
    })

    describe("Testimonials section", () => {
        it("renders the section", () => {
            render(<HomePage />, { wrapper: MemoryRouter });
            const testimonialsSection = screen.getByTestId("testimonials");
            expect(testimonialsSection).toBeInTheDocument();
        });

        it("renders title", () => {
            render(<HomePage />, { wrapper: MemoryRouter });
            const title = screen.getByTestId("testimonials--title");
            expect(title).toBeInTheDocument();
        });

        it("renders 4 testimonials", () => {
            render(<HomePage />, { wrapper: MemoryRouter });
            const testimonials = screen.getAllByTestId("testimonial");
            expect(testimonials.length).toBe(4);
        });
    });

    describe("About section", () => {
        it("renders the section", () => {
            render(<HomePage />, { wrapper: MemoryRouter });
            const aboutSection = screen.getByTestId("about");
            expect(aboutSection).toBeInTheDocument();
        });

        it("renders title", () => {
            render(<HomePage />, { wrapper: MemoryRouter });
            const title = screen.getByTestId("about--title");
            expect(title).toBeInTheDocument();
        });

        it("renders subtitle", () => {
            render(<HomePage />, { wrapper: MemoryRouter });
            const subtitle = screen.getByTestId("about--subtitle");
            expect(subtitle).toBeInTheDocument();
        });

        it("renders description", () => {
            render(<HomePage />, { wrapper: MemoryRouter });
            const description = screen.getByTestId("about--description");
            expect(description).toBeInTheDocument();
        });

        it("renders 2 images", () => {
            render(<HomePage />, { wrapper: MemoryRouter });
            const imgContainer = screen.getByTestId("about--images");

            const images = within(imgContainer).getAllByRole("img");
            expect(images.length).toBe(2);
        });
    });
});