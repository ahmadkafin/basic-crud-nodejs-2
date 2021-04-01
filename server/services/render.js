const axios = require('axios');

exports.homeRoutes = (req, res) => {
    // make a get req to /api/users
    axios.get('http://localhost:3000/api/users/')
        .then(function(response) {
            res.render('index', {users: response.data});
        })
        .catch(err => {
            res.send(err);
        });
}

exports.addUser = (req, res) => {
    res.render('addUser');
}

exports.updateUser = (req, res) => {
    axios.get('http://localhost:3000/api/users', {params: {id:req.query.id}})
    .then(function(userdata){
        res.render("updateUser", { user:userdata.data})
    })
    .catch(err => {
        res.send(err);
    });
}