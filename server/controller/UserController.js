var Userdb = require('../model/model');

// create and save new user
exports.create = (req, res) => {
    // validate request
    if(!req.body) {
        res.status(400).send({message: "content cannot be empty"});
        return;
    }

    // new user
    const user = new Userdb ({
        name : req.body.name,
        email : req.body.email,
        mobile: req.body.mobile,
        gender: req.body.gender,
        status: req.body.status,
    });

    //save user into database
    user
        .save(user)
        .then(data => {
            //for api response
            //res.send(data) 
            
            //for web response
            res.redirect('/add-user');
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while creating data"
            });
        });
}

// retrieve and all users / retrieve and a single users
exports.find = (req, res) => {

    if(req.query.id) {
        //single user
        const id = req.query.id;
        Userdb.findById(id)
        .then(data => {
            if(!data) {
                res.status(404).send({
                    message: `Not found with id ${id}`
                })
            } else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({message: "Error retrieving data with" + id})
        });

    } else {
        //all user
        Userdb.find()
        .then(user=> {
            res.send(user)
        })
        .catch(err => {
            res.status(500).send({message: err.message || "Error retrieve data"});
        });
    }

}   

// updata a new identified user by user id
exports.update = (req, res) => {
    if(!req.body) {
        return res
            .status(400)
            .send({message: "Data to update cannot be empty"})
    }
    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body,{useFindAndModify:false})
        .then(data => {
            if(!data) {
                res.status(404).send({message: `Cannot update user with ${id}. Maybe user not found!`});
            } else {
                res.send(data);
            }
        })
        .catch(err =>  {
            res.status(500).send({
                message: err + " error update information"
            }); 
        });
}


// delete user with specified user id
exports.delete = (req, res) => {
    const id = req.params.id;

    Userdb.findByIdAndDelete(id)
        .then(data => {
            if(!data) {
                res.status(404).send({message:`Cannot delete user with ${id}. Maybe user not found!`})
            } else {
                res.send({
                    message: "User deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err + " Cannot delete with id =" + id
            });
        });
}