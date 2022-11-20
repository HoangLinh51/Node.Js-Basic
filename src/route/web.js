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

  return app.use("/", router);
};

export default initWebRoute;
