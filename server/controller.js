const user = require("./model");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

//User Registration
exports.userRegistration = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors.array());
    res.status(201).json(errors.array());
  } else {
    var userData = new user({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      address: req.body.address,
      email: req.body.email,
      password: req.body.password,
    });
    //for encrypting the password
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(userData.password, salt, (err, hash) => {
        if (err) throw err;
        userData.password = hash;
        userData
          .save()
          .then(function () {
            const message = "Sign Up Successfully!!";
            res.status(201).json({ success: true, message: message });
          })
          .catch(function (e) {
            res.status(500).json({ success: false, message: e });
          });
      });
    });
  }
};

//for logging in the user
exports.userLogin = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors.array());
    res.status(201).json(errors.array());
  } else {
    user.findOne({ email: email }).then(function (userData) {
      if (userData === null) {
        //killing the code not giving further access
        return res
          .status(201)
          .json({ success: false, message: "Invalid Credentials" });
      }
      bcrypt.compare(password, userData.password, function (err, result) {
        if (result === false) {
          return res
            .status(201)
            .json({ success: false, message: "Invalid Credentials" });
        }
        //generating token
        const token = jwt.sign({ userId: userData._id }, "secretkey");
        res.status(200).json({
          success: true,
          message: "Logged In Successfully",
          //used in sessioning
          token: token,
        });
      });
    });
  }
};
