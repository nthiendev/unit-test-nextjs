import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/app/page";

describe("Home", () => {
  it("should have Docs text", () => {
    render(<Home />); // ARRANGE
    const myElem = screen.getByText("Docs"); // ACT

    expect(myElem).toBeInTheDocument();
  });

  it("should contain 'Information' text", () => {
    render(<Home />); // ARRANGE
    const myElem = screen.getByText(/Information/i); // ACT

    expect(myElem).toBeInTheDocument();
  });

  it("should contain 'Information' text", () => {
    render(<Home />); // ARRANGE
    const myElem = screen.getByText(/Information/i); // ACT

    expect(myElem).toBeInTheDocument();
  });
});
