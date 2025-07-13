import { render, screen, fireEvent } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Page Basic Testing by Amisha", () => {
  test("Should render Contact heading", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading", { name: "Contact Us" });
    expect(heading).toBeInTheDocument();
  });

  test("Should render the send button", () => {
    render(<Contact />);
    const button = screen.getByRole("button", { name: "Send" });
    expect(button).toBeInTheDocument();
  });

  test("Should have name input field", () => {
    render(<Contact />);
    const nameInput = screen.getByPlaceholderText("Your name");
    expect(nameInput).toBeInTheDocument();
  });

  test("Should have email input field", () => {
    render(<Contact />);
    const emailInput = screen.getByPlaceholderText("you@example.com");
    expect(emailInput).toBeInTheDocument();
  });

  test("Should have message textarea", () => {
    render(<Contact />);
    const messageTextarea = screen.getByPlaceholderText(
      "Write your message..."
    );
    expect(messageTextarea).toBeInTheDocument();
  });

  test("Should show toast on form submit", () => {
    render(<Contact />);

    const nameInput = screen.getByPlaceholderText("Your name");
    const emailInput = screen.getByPlaceholderText("you@example.com");
    const messageTextarea = screen.getByPlaceholderText(
      "Write your message..."
    );
    const button = screen.getByRole("button", { name: "Send" });

    fireEvent.change(nameInput, { target: { value: "Amisha" } });
    fireEvent.change(emailInput, { target: { value: "amisha@example.com" } });
    fireEvent.change(messageTextarea, { target: { value: "Test message" } });

    fireEvent.click(button);

    const toast = screen.getByText("Message sent successfully!");
    expect(toast).toBeInTheDocument();
  });
});
