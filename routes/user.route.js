const {Router } = require("express");
const { login, signup, logout } = require("../controllers/user.controller");
const { authenticator } = require("../middlewares/auth");

const userRouter = Router();

userRouter.post("/login",login);
userRouter.post("/signup",signup);
userRouter.get("/logout",authenticator,logout);

module.exports = {userRouter};