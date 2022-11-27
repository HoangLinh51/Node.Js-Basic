import express from "express";
import homeController from "../controller/homeController";
import productController from "../controller/productController";
import shopController from "../controller/shopController";
import checkoutController from "../controller/checkoutController";
import cartController from "../controller/cartController";
import signupController from "../controller/signupController";
let router = express.Router();

const initWebRoute = (app) => {
  router.get("/", homeController.getHomepage);
  router.get("/shop", shopController.shop);
  router.get("/checkout", checkoutController.checkout);
  router.get("/product", productController.product);
  router.get("/cart", cartController.cart);
  router.get("/signup", signupController.signup);
  router.get("/detail/user/:id", signupController.getDetailPage);
  router.post("/create-new-user", signupController.createNewUser);

  router.post("/delete-user", signupController.deleteUser);
  router.get("/edit-user/:id", signupController.getEditPage);
  router.post("/update-user", signupController.postUpdateUser);

  return app.use("/", router);
};

export default initWebRoute;
