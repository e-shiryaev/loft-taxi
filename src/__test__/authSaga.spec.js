import {recordSaga} from "../recordSaga";
import authSaga from "../sagas/authSaga";
import {auth, LOG_IN_SUCCESS} from "../actions";
import {serverLogin} from "../loftTaxiServer";

jest.mock('../loftTaxiServer', () => ({serverLogin: jest.fn()}));
const login = 'test@test.com';
const password = '123123';

describe('autMiddleware', () => {
  describe('#auth', () => {
    it ('auth through loftTaxiServer', async () => {
      serverLogin.mockImplementation(() => ({ success: true, token: 'abc' }))

      const dispatched = await recordSaga(authSaga, auth(login, password));

      expect(dispatched).toEqual([{
        type: LOG_IN_SUCCESS,
        payload: {token: 'abc'}
      }]);
    });
  })
})