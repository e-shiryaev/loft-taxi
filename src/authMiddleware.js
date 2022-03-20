import {LOG_OUT, AUTH, CHANGE_CARD, errorLogIn, logIn, errorChangeCard, LOAD_CARD, setCard} from "./actions";
import {serverLogin, serverSaveCard, serverLoadCard} from "./loftTaxiServer";

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
    case CHANGE_CARD:
      const payload = action.payload;
      resp = await serverSaveCard({...payload, token: store.getState().auth.token});

      if (resp.success) {
        store.dispatch(setCard({...payload}));

        localStorage.setItem('cardInfo', JSON.stringify(payload));
      } else {
        store.dispatch(errorChangeCard(resp.error));
      }
      break;
    case LOAD_CARD:
      resp = await serverLoadCard(store.getState().auth.token);

      if (resp.id) {
        delete resp.id;
        store.dispatch(setCard({...resp}));

        localStorage.setItem('cardInfo', JSON.stringify(resp));
      } else {
        store.dispatch(errorChangeCard(resp.error));
      }
      break;
    default:
      next(action);
  }
}