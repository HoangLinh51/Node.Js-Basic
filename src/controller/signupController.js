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

module.exports = {
  signup,
  getDetailPage,
};
