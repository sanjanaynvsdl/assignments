const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const bcrypt = require('bcrypt');
const {User, Todo} = require('../database/index');
const jwt = require('jsonwebtoken');


//Add input-validation 

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const name = req.body.name;
    const email = req.body.email;
    const pass = req.body.password;
    console.log("This are the credentials of the user "+name+email+pass);

    try {

        const currUser = await User.findOne({
            email:email,
        })

        if(currUser) {
            return res.json({
                msg:"User with this email already exist!"
            })
        }

        const hashedPass = await bcrypt.hash(pass,5);
        console.log("This is the hashed password "+ hashedPass);
        await User.create({
            name:name,
            email:email,
            password:hashedPass
        });

        return res.json({
            msg:"User created successfully!"
        })

    } catch (error) {
        return res.status(500).json({
            msg:"Internal server error in sign-up"+error
        })
    }
});

router.post('/login', async(req, res) => {
     // Implement user login logic
     const email = req.body.email;
     const password = req.body.password;

     try {
        const currUser = await User.findOne({
            email:email,
        })

        const passMatch = await bcrypt.compare(password, currUser.password);
        console.log(currUser);
        console.log(passMatch);

        if(!passMatch) {
            return res.status(403).json({
                msg:"Incorrect password, Please provide correct password!"
            })
        }

        if(passMatch) {
            const secretKey = process.env.JWT_SECRET;
            console.log("This  is the jwt secret key "+ secretKey);
            const token = jwt.sign({
                id:currUser._id
            },secretKey);

            return res.send(token);
        } else {
            return res.status(401).json({
                msg:"User with this credentials does not exist, Please try creating a new account!"
            })
        }
     } catch (error) {
        return res.json({
            error:error,
            msg:"Internal server error in login functionality!"
        })
     }
});

router.get('/todos', userMiddleware, async(req, res) => {
    // Implement logic for getting todos for a user
    const userId = req.userId;

    try {
        const userTodos = await Todo.find({
            userId:userId
        });

        console.log(userTodos);

        if(userTodos) {
            return res.json({
                userTodos:userTodos,
                msg:"Fetched all the user todo's"
            })
        } else {
            return res.json({
                msg:"Unable to fetch the user todo's"
            })
        }


    } catch (error) {
        return res.status(500).json({
            msg:"There was a error in get-User-TOdo's functionality "+error
        })
    }

    
});


//TODO : Need to fix this, on logout
//for this we blacklist the quiriess
router.post('/logout', userMiddleware, (req, res) => {
    // Implement logout logic
    try {
        const token = req.headers.token;
        jwt.destroy(token);
        return res.json({
            msg:"Logged out successfully!"
        })
        
    } catch (error) {
        return res.json({
            msg:"Error in the logount functionality "+error
        })
        
    }
});

module.exports = router