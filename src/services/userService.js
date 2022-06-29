
class UserServiceS{


static testServiceFunction(req){
    req.body.names=req.body.names.toUpperCase();
const {num1,num2}=req.body;
const sum=num1 + num2 ;
req.body.sum= sum;
    return req.body;
}

}


export default UserServiceS;