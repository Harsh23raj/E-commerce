import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
//router object
const Router = express.Router();

//routing
//register || method post
Router.post("/register", registerController);

// login

Router.post("/login", loginController);

// forgot password || post
Router.post("/forgot-password", forgotPasswordController);
//test controller

Router.get("/test", requireSignIn, isAdmin, testController);

//protected route auth
Router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
//protected route auth admin
Router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//update profile
Router.put("/profile", requireSignIn, updateProfileController);

//orders
Router.get("/orders", requireSignIn, getOrdersController);

//all orders
Router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
Router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);
export default Router;
