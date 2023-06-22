import { UserRepository } from "../repository/user-repository.js";
import UtilServices from "../utils/utils.js";

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
    this.utilService = new UtilServices();
  }
  async signup(data) {
    const user = this.userRepository.find({ data.email });
    if (user) {
      throw {
        message: "User already exits",
      };
    }
    data.password = await this.utilService.encryptPass(data.password);
    const response = await this.userRepository.create(data);
    return response;
  }
}
