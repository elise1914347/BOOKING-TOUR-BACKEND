
import { Router } from "express";
import UserController from "../Controllers/userController";

const route =Router();

route.post("/user/test",UserController.testController);

export default route;