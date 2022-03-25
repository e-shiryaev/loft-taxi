import {call, put, takeEvery} from 'redux-saga/effects';
import {serverLoadAddressList, serverRoute} from "../loftTaxiServer";
import {LOAD_ADDRESS, ROUTE, setAddressList} from "../actions";


const fetchAddress = function* () {
  const addresses = yield call(serverLoadAddressList);

  if (addresses && addresses.length) {
    yield put(setAddressList(addresses));
  }
}

const fetchRoute = function* (action) {
  const {from, to} = action.payload;
  const resp = yield call(serverRoute, from, to);

  console.log(resp, 'route');
}

const mapSaga = function* () {
  yield takeEvery(LOAD_ADDRESS, fetchAddress);
  yield takeEvery(ROUTE, fetchRoute);
}

export default mapSaga;