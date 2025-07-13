import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

const customRender = (component) => {
  return render(
    <BrowserRouter>
      <Provider store={appStore}>{component}</Provider>
    </BrowserRouter>
  );
};

describe("Header Component Test Cases by Amisha", () => {
  test("Should render Header with Login button", () => {
    customRender(<Header />);
    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();
  });

  test("Should render cart link with correct href", () => {
    customRender(<Header />);
    const links = screen.getAllByRole("link");
    const cartLink = links.find((link) => link.getAttribute("href") === "/cart");
    expect(cartLink).toBeTruthy();
  });

  test("Should change Login to Logout on button click", () => {
    customRender(<Header />);
    const loginButton = screen.getByRole("button", { name: "Login" });
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", { name: "Logout" });
    expect(logoutButton).toBeInTheDocument();
  });

  test("Should render navigation links - Home, About, Contact", () => {
    customRender(<Header />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About Us")).toBeInTheDocument();
    expect(screen.getByText("Contact Us")).toBeInTheDocument();
  });

  test("Should toggle mobile menu and show Home link in dropdown", () => {
    customRender(<Header />);
    const hamburgerButton = screen.getByRole("button", {
      name: /toggle menu/i,
    });
    fireEvent.click(hamburgerButton);
    const homeLinks = screen.getAllByText("Home");
    expect(homeLinks.length).toBeGreaterThan(1);
  });
});