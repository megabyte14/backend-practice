const jwt = require("jsonwebtoken")
const User = require("../models/User")

const protect = (req, res, next) => {
    const authHeader = req.params.authorization

    if (authHeader) {

    }

}
