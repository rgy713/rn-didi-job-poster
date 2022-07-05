import {isNil} from 'lodash-es';
import getApiUri from '../api.util';
import SecuredBaseApi from '../securedBase.api';
  /*
   * Here we handle user bank related Api's
   * @author Didijobs <rgy713>
   */
class BankApi extends SecuredBaseApi {
    /*
   * This function is used to add an user bank
   * @author Didijobs <rgy713>
   */
  async addBank(data) {
    try {
      const response = await this.securedAxios.post(
        getApiUri('/user/add-bank'),
        data,
      );
      console.log(response)
      if (response.data) {
        return response.data;
      }
      return false;
    } catch (err) {
      console.error(err);
      return false;
    }
  }
    /*
   * This function is used to fetch all bank account of an user
   * @author Didijobs <rgy713>
   */
  async getBankAccount(data) {
    try {
      const response = await this.securedAxios.get(
        getApiUri('/user/get-bank-accounts'),
      );
      console.log(response)
      if (response.data) {
        return response.data;
      }
      return false;
    } catch (err) {
      console.error(err);
      return false;
    }
  }
}

export default BankApi;
