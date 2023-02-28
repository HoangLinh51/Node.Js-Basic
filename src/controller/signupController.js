import pool from "../config/connectDB";
import multer from "multer";
// import session from 'express-session';

let signup = async (req, res) => {
  const [rows, fields] = await pool.execute("SELECT * FROM users");
  return res.render("users/signup", { dataUser: rows, test: "abc string test" });
};

let getDetailPage = async (req, res) => {
  let userId = req.params.id;
  let [user] = await pool.execute(`select * from users where id = ?`, [userId]);
  return res.send(JSON.stringify(user));
};

let createNewUser = async (req, res) => {
  console.log("check req: ", req.body);
  let { firstName, lastName, phone, email} = req.body;
// kiem tra khong duoc de trong 
  if (firstName == ''){
    return res.redirect('/error');
  }
  if (lastName == ''){
    return res.redirect('/error');
  }
//check password 
let passw = req.body.password1;
let passw2 = req.body.password2
  if (passw !== passw2) {
    return res.redirect('/error');
  }
// check email
  let [emailuser] = await pool.execute(`select * from users where email = ? `, [email]);
  if (emailuser.length !== 0) {
    return res.redirect('/error');
  }
// check phone
  let [phoneuser] = await pool.execute(`select * from users where phone = ? `, [phone]);
  if (phoneuser.length !== 0) {
    return res.redirect('/error');
  }
  await pool.execute(
    "insert into users(firstName, lastName, phone, email, password) values (?, ?, ?, ?, ?)",
    [firstName, lastName, phone, email, passw]
  );
  return res.redirect("/");
};

let loginPage = async (req, res, next) => {
    let email = req.body.email;
    let password = req.body.password;
    let [emus] = await pool.execute(`select * from users where email = ? and password = ? `, [email, password]);
    if (emus.length > 0){
      return res.redirect('/');
    }
    return res.redirect('/error');
}

let deleteUser = async (req, res) => {
  let userId = req.body.userId;
  await pool.execute("delete from users where id = ?", [userId]);
  return res.redirect("/");
};

let getEditPage = async (req, res) => {
  let id = req.params.id;
  let [user] = await pool.execute("Select * from users where id = ?", [id]);
  return res.render("users/update.ejs", { dataUser: user[0] }); // x <- y
};

let postUpdateUser = async (req, res) => {
  let { firstName, lastName, phone, email, id } = req.body;
  await pool.execute(
    "update users set firstName= ?, lastName = ? , phone = ? , email = ? where id = ?",
    [firstName, lastName, phone, email, id]
  );
  return res.redirect("/");
};

let getUploadFilePage = async (req, res) => {
  return res.render("uploadFile.ejs");
};

const upload = multer().single("profile_pic");

let handleUploadFile = async (req, res) => {
  upload(req, res, function (err) {
    if (req.fileValidationError) {
      return res.send(req.fileValidationError);
    } else if (!req.file) {
      return res.send("Please select an image to upload");
    } else if (err instanceof multer.MulterError) {
      return res.send(err);
    } else if (err) {
      return res.send(err);
    }
    res.send(
      `You have uploaded this image: <hr/><img src="/image/${req.file.filename}" width="500"><hr /><a href="/upload">Upload another image</a>`
    );
  });
};

module.exports = {
  signup,
  getDetailPage,
  loginPage,
  createNewUser,
  deleteUser,
  getEditPage,
  postUpdateUser,
  getUploadFilePage,
  handleUploadFile,
};
