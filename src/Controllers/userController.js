import UserServices from "../services/userService";
import handlePassword from "../utils/handlepassword";
import TokenAuth from "../utils/token";

class UserController {
  //login controller
  static async loginUserController(req,res){
    const user = await UserServices.loginUser(req);

    if(!user){
      return res.status(400).json({message:"User is not exist"})
    }

    // const token = TokenAuth.TokenGenerator({
    //   id:user._id,
    //   email:user.email,
    //   status:user.status,
    //   role:user.role
    // })
    // return res.status(200).json({
    // status:200,
    // message:"success login",
    // token:token,
    // data:user
    // })

    if (handlePassword.checkPassword(user.password,req.body.password)){
      const token =TokenAuth.generateToken({
        phone:user.phone,
      email:user.email,
    picture:user.picture,
  names:user.names,
  role:user.role
})
      return res.status(200).json({message:"logged in successfully",token});
    }
    else{
      return res
      .status(400)
      .json({message:"failed to loggin , password is wrong!"});
    }



  }
  //register user
  static async registerUser(req, res) {
    const newUser = await UserServices.registerUser(req);
    if (!newUser) {
      return res.status(404).json({ message: "failed to register",});
    }
    return res.status(201).json({ message: "sucess", data: newUser });
  }
//get all user
static async getAll(req, res) {
  const newUser = await UserServices.getAll(req);
  if (!newUser) {
    return res.status(404).json({ message: "failed to getall",});
  }
  return res.status(201).json({ message: "sucess", data: newUser });
}
//update user
static async updateUser(req, res) {
  const newUser = await UserServices.updateUser(req);
  if (!newUser) {
    return res.status(404).json({ message: "failed to updateUser",});
  }
  return res.status(200).json({ message: "sucess", data: newUser });
}
//delete user
static async deleteUser(req, res) {
  const newUser = await UserServices.deleteUser(req);
  if (!newUser) {
    return res.status(404).json({ message: "failed to deleteuser",});
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
