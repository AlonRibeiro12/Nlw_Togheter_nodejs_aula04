import { Router } from "express";
import { CreateUserController} from "./controlles/CreateUserController";
import { CreateTagController } from "./controlles/CreateTagController";
import { ensureAdmin} from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controlles/AuthenticateUseController";
import {  CreateComplimentController } from "./controlles/CreateComplimentController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();





router.use(ensureAdmin)
router.post("/users", createUserController.handle);
router.post("/tags",ensureAdmin, createTagController.handle);
router.post("/login",authenticateUserController.handle);
router.post("/compliments",createComplimentController.handle);

export { router };
