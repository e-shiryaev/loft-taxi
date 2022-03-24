import {LOG_OUT, AUTH, errorLogIn, logIn} from "../actions";
import {serverLogin} from "../loftTaxiServer";

export const authMiddleware = (store) => (next) => async (action) => {
  let resp;

  switch (action.type) {
    case AUTH:
      const {email, password} = action.payload;

      resp = await serverLogin(email, password);

      if (resp.success) {
        store.dispatch(logIn(resp.token));

        localStorage.setItem('isLoggedIn', '1');
        localStorage.setItem('token', resp.token);
      } else {
        store.dispatch(errorLogIn(resp.error));
      }
      break;
    case LOG_OUT:
      localStorage.clear();
      next(action);
      break;
    default:
      next(action);
  }
}