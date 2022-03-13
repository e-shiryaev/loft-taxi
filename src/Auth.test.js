import React from "react";
import { render, fireEvent } from "@testing-library/react";
import {App} from "./App";

// describe("Auth test", () => {
  // it('Test successful authorization', () => {
  //   const { getByTestId, queryByTestId } = render(<App/>);

    // fireEvent.change(getByTestId('textfield-login-email'), {target: {value: 'test@test.mail.com'}});
    // fireEvent.change(getByTestId('textfield-login-password'), {target: {value: 'test'}});

    // fireEvent.click(getByTestId('button-login'));
    // expect(queryByTestId('submit-map').textContent).not.toBe('Заказать');

    // fireEvent.click(getByTestId('button-login'));
    // expect(queryByTestId('submit-map').textContent).toBe('Заказать');
  // })

  // it('Test unsuccessful authorization', () => {
  //   const { getByTestId, queryByTestId } = render(<App/>);
  //
  //   fireEvent.click(getByTestId('button-login'));
  //   expect(queryByTestId('submit-map').textContent).toBeFalsy();
  // })
// });