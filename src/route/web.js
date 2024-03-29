import express from "express";
import homeController from "../controller/homeController";
import productController from "../controller/productController";
import shopController from "../controller/shopController";
import checkoutController from "../controller/checkoutController";
import cartController from "../controller/cartController";
import signupController from "../controller/signupController";

import admincontroller from "../controller/admin/adminController";


import multer from "multer";
import path from "path";

var appRoot = require("app-root-path");
let router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, appRoot + "/src/public/image/");
  },

  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const imageFilter = function (req, file, cb) {
  // Accept images only
  if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
    req.fileValidationError = "Only image files are allowed!";
    return cb(new Error("Only image files are allowed!"), false);
  }
  cb(null, true);
};

let upload = multer({ storage: storage, fileFilter: imageFilter });

const initWebRoute = (app) => {
  router.get("/", homeController.getHomepage);
  router.get("/shop", shopController.shop);
  router.get("/checkout", checkoutController.checkout);
  router.get("/product", productController.product);
  router.get("/cart", cartController.cart);
  router.get("/signup", signupController.signup);
  router.post("/login/user", signupController.loginPage)

  router.get("/detail/user/:id", signupController.getDetailPage);
  router.post("/create-new-user", signupController.createNewUser);
  router.post("/delete-user", signupController.deleteUser);
  router.get("/edit-user/:id", signupController.getEditPage);
  router.post("/update-user", signupController.postUpdateUser);

  router.get("/admin/", admincontroller.admin)
  router.get("/admin/brand", admincontroller.brand)
  router.get("/admin/category", admincontroller.category)
  router.get("/admin/order", admincontroller.order)
  router.get("/admin/product", admincontroller.product)
  router.get("/admin/profile", admincontroller.profile)
  router.get("/admin/login", admincontroller.loginadmin)
  // router.get("/detail/admin/:id", admincontroller.getDetailAdmin);

  router.get("/upload", signupController.getUploadFilePage);
  router.post("/upload-profile-pic", upload.single("profile_pic"), signupController.handleUploadFile);

  return app.use("/", router);
};

export default initWebRoute;
