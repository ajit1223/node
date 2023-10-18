module.exports.home = function (req, res) {
    // return res.end('<h1>Express is up for codeial</h2>')
    console.log(req.cookies);
    res.cookie('user', 222);
    res.cookie('user_id', 15)
    return res.render('home', {
        title: 'Home'
    });
};


module.exports.index = function (req, res) {
    res.render("home");
}
// module.exports.action = function (req, res) {
//     return res.end("<i>this is the Itelic tag used here</i> ok");
// };