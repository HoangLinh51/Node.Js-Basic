// import pool from "../config/connectDB";
// import multer from "multer";

let admin = (req, res) => {
    return res.render('admin')
}
let brand = (req, res) => {
    return res.render('brand')
}
let category = (req, res) => {
    return res.render('category')
}
let order = (req, res) => {
    return res.render('order')
}
let productad = (req, res) => {
    return res.render('productad')
}
let profile = (req, res) => {
    return res.render('profile')
}
// let getDetailPage = async (req, res) => {
//     let userId = req.params.id;
//     let [user] = await pool.execute(`select * from users where id = ?`, [userId]);
//     return res.send(JSON.stringify(user));
//   };



module.exports = {
    admin,
    brand,
    category,
    order,
    productad,
    profile,
    // getDetailPage
}