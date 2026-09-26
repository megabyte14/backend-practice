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
