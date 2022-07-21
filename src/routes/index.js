import { Router } from "express";
import TourController from "../Controllers/tourContoller";
import UserController from "../Controllers/userController";
import BookingController from "../Controllers/bookingContoller";

import Validator from "../middlewares/validator";
import Datachecker from "../middlewares/datachecker";

import verifyToken from "../middlewares/verifyToken";
import verifyAccess from "../middlewares/verifyAccess";

const route = Router();

route.post("/user/login", UserController.loginUserController);
route.post("/user/test", UserController.testController);
route.post(
  "/user",
  Validator.newAccountRules(),
  Datachecker.validateEmailDuplication,
  Validator.validateInput,
  UserController.registerUser
);
// route.post("/user",UserController.registerUser);
route.get("/user", UserController.getAll);
route.delete("/user/:id", UserController.deleteUser);
route.put("/user/:id", UserController.updateUser);

route.post("/tour/create",  verifyToken,
verifyAccess("admin"),TourController.registerTour);
route.get("/tour", TourController.getAllTours);
route.put("/tour/:id", TourController.updateTour);
route.get("/tour/:id", TourController.getOneTour);

route.post("/booking", BookingController.BokingTour);
route.get("/booking", BookingController.getAllBooking);
route.patch("/booking/:id", BookingController.updateBooking);



export default route;
