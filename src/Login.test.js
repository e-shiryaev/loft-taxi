import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Login from "./Login";

describe("toggle Auth form", () => {
  it('click link and toggle form', () => {
    const { getByTestId } = render(<Login/>);

    fireEvent.click(getByTestId('toggle-link'));
    expect(getByTestId('label-form').textContent).toBe('Регистрация');

    fireEvent.click(getByTestId('toggle-link'));
    expect(getByTestId('label-form').textContent).toBe('Войти');
  })
});