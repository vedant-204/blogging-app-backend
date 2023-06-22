import bcrypt from "bcrypt";

class UtilServices {
  encryptPass(pass) {
    try {
      const SALT = bcrypt.genSaltSync(9);
      const encryptedPassword = bcrypt.hashSync(pass, SALT);
      return encryptedPassword;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export default UtilServices;
