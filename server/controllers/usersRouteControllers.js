const User = require('../models/User');

exports.getUser = async (req, res) => {
    try {
        const users = await User.find({}).populate('orvosok');
        console.log(users[0].orvosok);
        
        res.status(200).render('userList.ejs', { users });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};
exports.updatedUser = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        
        
        const updateUser = await User.findByIdAndUpdate({_id:id}, req.body);
        res.status(200).json({ msg: "ASd", updateUser });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}