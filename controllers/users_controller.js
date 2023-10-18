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
module.exports.create = function (req, res) {
    // To Do
}

//sign In to create session for the user
module.exports.createSession = function (req, res) {
    // To Do
}