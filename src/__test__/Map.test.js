import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Map from "./Map";

describe("Navigation of project", () => {
  it('click link and toggle form', () => {
    const { getByTestId } = render(<Map/>);

    fireEvent.click(getByTestId('navigation-link-profile'));
    expect(getByTestId('label-form').textContent).toBe('Профиль');

    fireEvent.click(getByTestId('navigation-link-map'));
    expect(getByTestId('submit-map').textContent).toBe('Заказать');
  })
});