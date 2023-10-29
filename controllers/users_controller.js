const User = require('../models/user');

module.exports.profile = function (req, res) {
    // res.end("<h1> User's Profile</h1>");
    return res.render('user_profile', {
        title: 'users_profile page'
    });
};

// render the sign In page
module.exports.signUp = function (req, res) {
    return res.render('user_sign_Up', {
        title: 'Codial | Sign Up'
    })
}


// render the sign In page
module.exports.signIn = function (req, res) {
    return res.render('user_sign_In', {
        title: 'Codial | Sign Ip'
    })
}

// get the sign up data

module.exports.create = async function (req, res) {
    try {
        if (req.body.password !== req.body.confirm_password) {
            return res.redirect('back');
        }

        const user = await User.findOne({ email: req.body.email }).exec();

        if (!user) {
            const newUser = new User(req.body);
            await newUser.save();
            return res.redirect('/users/sign-In');
        } else {
            return res.redirect('back');
        }
    } catch (err) {
        console.log('Error:', err);
        return res.status(500).send('An error occurred');
    }
}


//sign In to create session for the user
module.exports.createSession = function (req, res) {
    // To Do
}