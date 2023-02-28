import pool from "../../config/connectDB";

let getAllUsers = async (req, res) => {
  const [rows, fields] = await pool.execute("SELECT * FROM users");
  return res.status(200).json({
    message: "ok",
    data: rows,
  });
};

let createNewUser = async (req, res) => {
  let { firstName, lastName, phone, email, password } = req.body;
  if (!firstName || !lastName || !phone || !email || !password) {
    return res.status(200).json({
      message: "missing required params",
    });
  }

  await pool.execute(
    "insert into users(firstName, lastName, phone, email, password) values (?, ?, ?, ?, ?)",
    [firstName, lastName, phone, email, password]
  );
  return res.status(200).json({
    message: "ok",
  });
};

let updateUser = async (req, res) => {
  let { firstName, lastName, phone, email, password, id } = req.body;
  if (!firstName || !lastName || !phone || !email || !password || !id) {
    return res.status(200).json({
      message: "missing required params",
    });
  }

  await pool.execute(
    "update users set firstName= ?, lastName = ? , phone = ? , email= ? , password= ? , where id = ?",
    [firstName, lastName, phone, email, password, id]
  );
  return res.status(200).json({
    message: "ok",
  });
};

let deleteUser = async (req, res) => {
  let userId = req.params.id;
  if (!userId) {
    return res.status(200).json({
      message: "missing required params",
    });
  }
  await pool.execute("delete from users where id = ?", [userId]);
  return res.status(200).json({
    message: "ok",
  });
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
