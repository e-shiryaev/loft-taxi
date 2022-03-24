import {CHANGE_CARD, errorChangeCard, LOAD_CARD, setCard} from "../actions";
import {serverSaveCard, serverLoadCard} from "../loftTaxiServer";

export const cardMiddleware = (store) => (next) => async (action) => {
  let resp;

  switch (action.type) {
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