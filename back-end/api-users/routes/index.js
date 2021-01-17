const express = require("express");
const router = express.Router();
const UserController = require("./../controllers/userController");
const UserService = require("./../services/userService");
const UserInstance = new UserController(new UserService());

/* GET home page. */
router.get("/", function (req, res, next) {
  UserInstance.getUsers(req,res);
});

router.post("/add", function (req, res, next) {
  UserInstance.addUser(req, res);
});

router.put("/modify/:id/", function(req,res,next) {
  UserInstance.updateUser(req,res);
});

router.delete("/delete/:id", function (req, res,next){
  UserInstance.deleteUser(req,res);
});
module.exports = router;
