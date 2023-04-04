var Userdb = require('../model/model');

// create and save new user
exports.create = (req, res) => {
  // validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be emtpy!" });
    return;
  }

  // new user
  const user = new Userdb({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    gender: req.body.gender,
    booking_id: req.body.booking_id,
    location_id: req.body.location_id,
    drone_shot_id: req.body.drone_shot_id,
    created_time: req.body.created_time,
    created_date: req.body.created_date

  })

  // save user in the database
  user
    .save(user)
    .then(data => {
      //res.send(data)
      res.redirect('/add-user');
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating a create operation"
      });
    });
}

// retrieve and return all users/ retrive and return a single user
exports.find = (req, res) => {

}

// Update a new idetified user by user id
exports.update = (req, res) => {

}

// Delete a user with specified user id in the request
exports.delete = (req, res) => {

}