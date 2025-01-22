const User = require('../models/User');

exports.getUpdatePage = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById({_id:id});
        console.log(user);
        
        res.status(200).render('user.ejs', { user });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};
