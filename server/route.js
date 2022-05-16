const express = require("express");
const router = express.Router();
const user = require("./model");
const { check } = require("express-validator");
const userController = require("./controller");
//User Registration
router.post(
  "/user/registration",
  [
    check("firstName", "FirstName must be provided").not().isEmpty(),
    check("firstName", "FirstName must contain at least 3 characters").isLength(
      {
        min: 3,
      }
    ),
    check("lastName", "LastName must be provided").not().isEmpty(),
    check("lastName", "LastName must contain at least 3 characters").isLength({
      min: 3,
    }),
    check("address", "Address must be provided").not().isEmpty(),
    check("email", "Email must be provided").not().isEmpty(),
    check("email", "Enter a valid email").isEmail(),
    check("email", "Email address already exists!").custom((value) => {
      return user.findOne({ email: value }).then((duplicateEmail) => {
        if (duplicateEmail) {
          return Promise.reject("Email address already exists!");
        }
      });
    }),
    check("password", "Password must be provided").not().isEmpty(),
    check("password", "Password must be of at least eight characters").isLength(
      {
        min: 8,
      }
    ),
    check("verifyPassword", "Password must be provided").not().isEmpty(),
    check("verifyPassword", "Passwords do not match").custom(
      (value, { req }) => value === req.body.password
    ),
  ],
  userController.userRegistration
);

//for logging in the user
router.post(
  "/user/login",

  [
    check("email", "Email must be provided").not().isEmpty(),
    check("email", "Enter a valid email").isEmail(),
    check("password", "Password must be provided").not().isEmpty(),
  ],
  userController.userLogin
);
module.exports = router;
