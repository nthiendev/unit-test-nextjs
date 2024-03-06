import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/app/page";

it("should have Docs text", () => {
  render(<Home />); // ARRANGE
  const myElem = screen.getByText("Docs"); // ACT

  expect(myElem).toBeInTheDocument();
});
