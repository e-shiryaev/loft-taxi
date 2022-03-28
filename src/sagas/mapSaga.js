import {call, put, select, takeEvery} from 'redux-saga/effects';
import {serverLoadAddressList, serverRoute} from "../loftTaxiServer";
import {errorRoute, MAP_ADDRESS_REQUEST, MAP_ROUTE_REQUEST, setAddressList, setLinestring} from "../actions";
import {getCardInfo} from "../reducers";


const fetchAddress = function* () {
  const addresses = yield call(serverLoadAddressList);

  if (addresses && addresses.length) {
    yield put(setAddressList(addresses));
  } else {
    yield put(errorRoute('Произошла ошибка загрузки маршрутов'));
  }
}

const fetchRoute = function* (action) {
  const cardInfo = yield select(getCardInfo);

  const keys = {
    expiryDate: '',
    cardNumber: '',
    cardName: '',
    cvc: ''
  };

  for (let key in keys) {
    if (!cardInfo[key] || cardInfo[key] === null) {
      yield put(errorRoute('Не заполнены данные кредитной карты'))
      return;
    }
  }

  const {from, to} = action.payload;
  const resp = yield call(serverRoute, from, to);

  if (resp.length) {
    yield put(setLinestring(resp))
  } else {
    yield put(errorRoute('Не удалось построить маршрут'))
  }
}

const mapSaga = function* () {
  yield takeEvery(MAP_ADDRESS_REQUEST, fetchAddress);
  yield takeEvery(MAP_ROUTE_REQUEST, fetchRoute);
}

export default mapSaga;