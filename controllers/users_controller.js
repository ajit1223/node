module.exports.profile = function (req, res) {
    // res.end("<h1> User's Profile</h1>");
    return res.render('user_profile', {
        title: 'users_profile page'
    });
};