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

module.exports = {
  signup,
  getDetailPage,
  createNewUser,
};
