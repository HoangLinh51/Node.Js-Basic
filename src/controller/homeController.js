import db from '../models/index';

let getHomepage = async (req, res) => {
    try{
        let data = await db.User.findAll();
        return res.render('index', {
            data: JSON.stringify(data)
        });//499
    }catch(e) {
        console.cog(e)
    }
}
module.exports = {
    getHomepage
}
