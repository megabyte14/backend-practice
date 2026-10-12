//VENDOR REGISTRATION
const vendorRegister = async (req, res) => {

    const getName = req.body.name
    const getEmail = req.body.email
    const getPassword = req.body.password

    const userExists = await User.findOne({
        email: req.body.email
    })
    if (userExists) {
        res.status(400).json({
            message: "Email already registered!"
        })
    }
    else {
        res.json({
            message: "Email registered! Continue to login lil bro."
        })
    }

    const securePassword = await bcrypt.hash(getPassword, 10)

    const addingUser = await User.create({
        name: getName,
        password: securePassword,
        email: getEmail,
        role: "vendor"
    })

    res.json({
        message: "Vendor in da house!"
    })
}


//SELLER REGISTRATION

const sellerRegsistration = async (req, res) => {
    const getName = req.body.name
    const getEmail = req.body.email
    const getPassword = req.body.password

    const securePassword = await bcrypt.hash(getPassword, 10)


    const checkSeller = await User.findOne({
        email: req.body.email
    })

    if (checkSeller) {
        res.json({
            message: "Seller already exists!"
        })
    }
    else {
        const storeSeller = await User.create({
            name: getName,
            password: securePassword,
            email: getEmail,
            role: "seller"
        })
        res.json({
            message: "Seller is registered!"
        })
    }

}


//VENDOR LOGIN
const vendorLogin = async (req, res) => {
    const getEmail = req.body.email
    const getPassword = req.body.password

    const findUser = await User.findOne({ email: getEmail })

    if (findUser) {
        res.json({
            message: "User exists!"
        })
        return
    }
    else {
        res.json({
            message: "User doesnt exist. Go back to registration."
        })
    }

    const comparePassword = await bcrypt.compare(getPassword, findUser.password)

    if (comparePassword) {
        const token = jwt.sign(
            {
                role: "vendor",
                id: findUser._id,
            }
    process.env.JWT_SECRET,

            { expiresIn: "7d" }

        )
        res.json({
            message: "Authenticated!"
            token=token
        })
    }

}

//SELLER LOGIN
const sellerLogin = async (req, res) => {

    const getEmail = req.body.email
    const getPassword = req.body.password

    const findUser = User.findOne({
        email: "getEmail"
    })

    if (userExists){
        res.
    }
}