import UserServices from "../services/userService";

class UserController {
  //register user
  static async registerUser(req, res) {
    const newUser = await UserServices.registerUser(req);
    if (!newUser) {
      return res.status(404).json({ message: "failed to register",});
    }
    return res.status(201).json({ message: "sucess", data: newUser });
  }

  static testController(req, res) {
    const test = UserServiceS.testServiceFunction(req);

    return res.status(200).json({
      message: "OK! Successfully",
      data: test,
    });
  }
}

export default UserController;
