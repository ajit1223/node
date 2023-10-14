module.exports.home = function (req, res) {
    // return res.end('<h1>Express is up for codeial</h2>')
    return res.render('home', {
        title: 'Home'
    });
};

// module.exports.action = function (req, res) {
//     return res.end("<i>this is the Itelic tag used here</i> ok");
// };