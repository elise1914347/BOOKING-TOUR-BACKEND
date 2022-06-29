import UserServiceS from "../services/userService";


class UserController{


    static testController(req,res){
const test=UserServiceS.testServiceFunction(req);


return res.status(200).json({
    message:"OK! Successfully",
    data:test
})
    }

}

export default UserController;