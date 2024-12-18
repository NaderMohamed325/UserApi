const router = require('express').Router();
const userController = require("../controller/userController");

router.route('/')
    .get(userController.getAllUsers)
    .post(userController.createUser)

router.route("/:id")
    .get(userController.getUserByID)
    .patch(userController.updateUser)
    .delete(userController.deleteUser)

module.exports = router;