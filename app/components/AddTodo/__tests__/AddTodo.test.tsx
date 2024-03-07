import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import AddTodo from "../AddTodo";

const mockSetTodos = jest.fn();

describe("AddTodo", () => {
  describe("Render", () => {
    it("Should render the input", () => {
      render(<AddTodo setTodos={mockSetTodos} />);

      const input = screen.getByPlaceholderText("New Todo");

      expect(input).toBeInTheDocument();
    });
  });
});
