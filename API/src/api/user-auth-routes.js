const express = require("express");

const router = express.Router();

const UserAuthService = require("../services/user-auth-service");


// sending login information to database, so post method is used 
router.post("/login", (req, res) => {
  UserAuthService.prototype
    .login(req.body)
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      res.send(err);
    });
});

// sending register information to database, so post method is used
router.post("/register", (req, res) => {
  console.log("nfddfd")
    UserAuthService.prototype
    .register(req.body)
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      res.send(err);
    });
});


module.exports = router;
