const { register,login } = require("../controllers/authcontrollers")
const {getUserByEmail} = require('../controllers/usercontrollers')

const route = require ("express").Router();

route.post("/register",register)
//router.route("/register").post(register)
route.post("/login",login)
route.get("/getuser/:email",getUserByEmail)


module.exports = route;