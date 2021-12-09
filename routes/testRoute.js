import { Router } from "express";
import ValidationMW from "./mw/ValidationMW.js";
import {
  testGetAction,
  testPostAction,
} from "../controllers/TestController.js";

const router = Router();

router.route("/").get(testGetAction).post(ValidationMW, testPostAction);

export default router;
