import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "../App";

describe("toggle Auth form", () => {
  it('click link and toggle form', () => {
    const { getByTestId } = render(<App/>);

    fireEvent.click(getByTestId('toggle-link'));
    expect(getByTestId('label-form').textContent).toBe('Регистрация');

    fireEvent.click(getByTestId('toggle-link'));
    expect(getByTestId('label-form').textContent).toBe('Войти');
  })
});