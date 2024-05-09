const { createUser, getUserByUserId, getUsers, updateUser, deleteUsers, login } =require("./user.controller");

const router = require("express").Router();
//midleware for checking the user
const { checkToken } = require("../auth/token_validation");

router.post('/', createUser);
router.get('/', checkToken, getUsers);
router.get('/:id', checkToken, getUserByUserId);
router.patch('/', checkToken, updateUser);
router.delete('/', checkToken, deleteUsers);
//for login
router.post("/login", login);

module.exports = router;