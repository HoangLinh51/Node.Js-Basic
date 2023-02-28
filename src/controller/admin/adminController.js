import pool from "../../config/connectDB";

let admin = (req, res) => {
    return res.render('admin/admin')
}
let brand = (req, res) => {
    return res.render('admin/brand')
}
let category = (req, res) => {
    return res.render('admin/category')
}
let order = (req, res) => {
    return res.render('admin/order')
}
let product = (req, res) => {
    return res.render('admin/product')
}
let profile = (req, res) => {
    return res.render('admin/profile')
}
let loginadmin = async (req, res) => {
  const [rows, fields] = await pool.execute("SELECT * FROM admin");
  return res.render('admin/loginadmin', { dataAdmin: rows, test: "abc string test" })
}

// let getDetailadmin = async (req, res) => {
//   let adminId = req.params.id;
//   let [admin] = await pool.execute(`select * from admin where id = ?`, [adminId]);
//   return res.send(JSON.stringify(admin));
// };
  let getDetailAdmin = async (req, res) => {


    return res.render('index.ejs', { dataAdmin: data, test: 'abc string test' })

    let [admin] = await pool.execute(`SELECT * FROM admin`);
    console.log("check asmin:", admin)
  };
  

// let createNewAdmin = async (req, res) => {
//     console.log("check req: ", req.body);
//     let { fullname, email, password, } = req.body;
//     console.log("admin:", req.body)
//   // kiem tra khong duoc de trong 
//     if (fullname == ''){
//       return res.redirect('/error');
//     }
//     if (email == ''){
//       return res.redirect('/error');
//     }
//   //check password 
//   let pass = req.body.password1;
//   let confpass = req.body.password2
//     if (pass !== confpass) {
//       return res.redirect('/error');
//     }
//   // check email
//     let [emailad] = await pool.execute(`select * from admin where email = ? `, [emailad]);
//     if (emailad.length !== 0) {
//       return res.redirect('/error');
//     }
    
//     await pool.execute(
//       "insert into admin(fullname, email, password) values (?, ?, ?)",
//       [fullname, email, password]
//     );
//     return res.redirect("/");
//   };

module.exports = {
  admin,
  brand,
  category,
  order,
  product,
  profile,

  getDetailAdmin,
  loginadmin,
};

