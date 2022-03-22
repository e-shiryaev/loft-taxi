import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "../App";
import {Provider} from "react-redux";
import {store} from '../store';
import {MemoryRouter} from "react-router-dom";

const Test = () => (
  <Provider store={store}>
    <App/>
  </Provider>
);

describe("Auth test", () => {
  it('Test successful authorization', () => {
    const { getByTestId, queryByTestId } = render(<Test/>, {wrapper: MemoryRouter});

    fireEvent.change(getByTestId('textfield-login-email'), {target: {value: 'test@test.mail.com'}});
    fireEvent.change(getByTestId('textfield-login-password'), {target: {value: 'test'}});

    fireEvent.click(getByTestId('button-login'));
    const submitMap = queryByTestId('submit-map');

    expect(submitMap).not.toBeNull();
    expect(submitMap.textContent).toBe('Заказать');

    fireEvent.click(getByTestId('navigation-link-logout'));
    expect(queryByTestId('submit-map')).toBeNull();
  })

  it('Test unsuccessful authorization', () => {
    const { getByTestId, queryByTestId } = render(<App/>);

    fireEvent.click(getByTestId('button-login'));
    expect(queryByTestId('submit-map')).toBeNull();
  })
});