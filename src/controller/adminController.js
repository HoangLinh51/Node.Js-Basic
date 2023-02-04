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
let productad = (req, res) => {
    return res.render('admin/productad')
}
let profile = (req, res) => {
    return res.render('admin/profile')
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