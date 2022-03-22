import {authMiddleware} from "../milldewares/authMiddleware";
import {auth, LOG_IN} from "../actions";
import {serverLogin} from "../loftTaxiServer";

jest.mock('../loftTaxiServer', () => ({serverLogin: jest.fn(() => {
  return {
    success: true,
    token: 'sdf'
  }})}));

describe('autMiddleware', () => {
  describe('#auth', () => {
    it ('auth through loftTaxiServer', async () => {
      const dispatch = jest.fn();
      const login = 'test@test.com';
      const password = '123123';

      await authMiddleware({dispatch})()(
        auth(login, password)
      );
      expect(serverLogin).toBeCalledWith(login, password);
      expect(dispatch).toBeCalledWith({type: LOG_IN});
    });
  })
})