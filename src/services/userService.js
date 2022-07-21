
import UserModel from "../models/user";
import handlePassword from "../utils/handlepassword";


class UserServiceS{
    //login
    static async loginUser(req){
        const user= await UserModel.findOne({email:req.body.email})
        return user;
    }


//registering user
    static async registerUser(req){
        req.body.password = handlePassword.encryptPassword(req.body.password)
const user=UserModel.create(req.body);
return user;
    }
    //static getall
    static async getAll(req){
        const user=UserModel.find();
        return user;
            }
            //static deleteUser
            static async deleteUser(req){
                const user=UserModel.deleteOne({_id: req.params.id});
                return user;
                    }
                    //static updateUser
                    static async updateUser(req){
                        await UserModel.findOneAndUpdate({_id:req.params.id},req.body);
                        const user=UserModel.findOne({_id: req.params.id});
                        return user;
                            }

static testServiceFunction(req){
    req.body.names=req.body.names.toUpperCase();
    req.body.Home=req.body.Home.toUpperCase();
const {num1,num2}=req.body;
const sum=num1 + num2 ;
req.body.sum= sum;
    return req.body;
}



}


export default UserServiceS;