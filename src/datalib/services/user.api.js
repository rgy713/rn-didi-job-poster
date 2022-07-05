import getApiUri from '../api.util';
import SecuredBaseApi from '../securedBase.api';
/*
 * Here we handled user related API's
 * @author Didijobs <rgy713>
 */
class AuthenticationApi extends SecuredBaseApi {
  /*
   * This function is used to geneate email otp for email verification
   * @author Didijobs <rgy713>
   */
  async generateEmailOtp(email) {
    try {
      const response = await this.securedAxios.post(
        getApiUri('/auth/generate-otp'),
        {
          email,
        },
      );
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
   * This function is used to update user information
   * @author Didijobs <rgy713>
   */
  async updateUser(data) {
    try {
      const response = await this.securedAxios.put(
        getApiUri('/user/update-profile'),
        data,
      );
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
   * This function is used to verify email otp
   * @author Didijobs <rgy713>
   */
  async verifyEmailOTP(email, otp) {
    try {
      const response = await this.securedAxios.post(
        getApiUri('/auth/verify-email'),
        {email, otp},
      );
      console.log(response);
      if (response.data) {
        return response;
      }
      return false;
    } catch (err) {
      console.log(err);
      console.error(err);
      return false;
    }
  }
  /*
   * This function is used to fetch user profile
   * @author Didijobs <rgy713>
   */
  async getUserById() {
    try {
      const response = await this.securedAxios.get(
        getApiUri('/user/get-user-profile'),
      );
      console.log('response', response);
      if (response.data) {
        return response.data;
      }
      return false;
    } catch (err) {
      console.error('err', err);
      return false;
    }
  }
  /*
   * This function is used to upload image
   * @author Didijobs <rgy713>
   */
  async uploadProfilePic(file) {
    try {
      console.log('uploadProfilePic', file);
      const response = await this.securedAxios.post(
        getApiUri('/utility/upload-file'),
        file,
      );
      console.log(response);
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

export default AuthenticationApi;
