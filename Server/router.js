const userctrl = require ("./Controller/UserController")
const express = require ("express")
const router = express.Router()

router.post("/register", userctrl.register)

router.post("/login", userctrl.login)

module.exports = router;