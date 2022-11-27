import pool from "../config/connectDB";

let signup = async (req, res) => {
  const [rows, fields] = await pool.execute("SELECT * FROM users");
  return res.render("signup", { dataUser: rows, test: "abc string test" });
};

let getDetailPage = async (req, res) => {
  let userId = req.params.id;
  let [user] = await pool.execute(`select * from users where id = ?`, [userId]);
  return res.send(JSON.stringify(user));
};

let createNewUser = async (req, res) => {
  console.log("check req: ", req.body);
  let { firstName, lastName, phone, email } = req.body;
  await pool.execute(
    "insert into users(firstName, lastName, phone, email) values (?, ?, ?, ?)",
    [firstName, lastName, phone, email]
  );
  return res.redirect("/");
};

let deleteUser = async (req, res) => {
  let userId = req.body.userId;
  await pool.execute("delete from users where id = ?", [userId]);
  return res.redirect("/");
};

let getEditPage = async (req, res) => {
  let id = req.params.id;
  let [user] = await pool.execute("Select * from users where id = ?", [id]);
  return res.render("update.ejs", { dataUser: user[0] }); // x <- y
};

let postUpdateUser = async (req, res) => {
  let { firstName, lastName, phone, email, id } = req.body;
  await pool.execute(
    "update users set firstName= ?, lastName = ? , phone = ? , email = ? where id = ?",
    [firstName, lastName, phone, email, id]
  );
  return res.redirect("/");
};

module.exports = {
  signup,
  getDetailPage,
  createNewUser,
  deleteUser,
  getEditPage,
  postUpdateUser,
};
