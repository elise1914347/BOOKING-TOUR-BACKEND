import  Express  from "express";
// import Validator from "../middlewares/validator";
import UserController from "../Controllers/userController";
// import Datachecker from "../middlewares/datachecker"

// const route= Express.Router();
// route.post("/signup",
// Validator.newAccountRules(),
// Validator.validateInput,
// Datachecker.validateEmailDuplication,
// Datachecker.checkAge,
// // UserController.signupUser
// );

// route.get("/all",UserController.getAllusers);
route.get("/:id",Validator.checkId(),Validator.validateInput,UserController);
route.patch("/:id",Validator.checkId(),Validator.validateInput,UserController);
route.delete("/:id",Validator.checkId(),Validator.validateInput,UserController);
export default route;