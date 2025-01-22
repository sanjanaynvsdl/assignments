const {Router } = require('express');
const router = Router()

const {User} = require("../db/index");
const bcrypt = require("bcrypt");
const {z} = require('zod');




router.post("/signup", async(req,res)=> {

    const responseObj = z.object({
        name:z.string().min(3).max(100),
        email:z.string().min(3).max(100).email(),
        password:z.string().min(3).max(100)
    })

    const {success , data, error} = responseObj.safeParse(req.body);

    if(!success) {
        return res.json({
            msg:"Invalid input please provide in correct format "+error
        })
    }

    try {
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;

        const hashedPass = await bcrypt.hash(password, 5);

        await User.create({
            name:name,
            email:email,
            password:hashedPass,
        })

        return res.json({
            msg:"Successfully created the user!"
        })
        
    } catch (error) {
        return res.status(500).json({
            msg:"Internal server issue in signup functionality"+error
        })
    }
});


router.post("/signin", async(req,res)=> {
     const responseObj = z.object({
        name:z.string(),
        email:z.string(),
        password:z.string()
     })

     const {success, data, error} = responseObj.safeParse(req.body);

     if(!success) {
        return res.json({
            msg:"Invalid input",
            error:error
        })
     }

     try {
        const name = req.body.name;
        const email = req.body.email
        const password = req.body.password;
        
        const user = await User.findOne({
            email:email
        })
        
        const decodedPass = await bcrypt.compare(password, user.password);
        console.log(decodedPass);

        if(!decodedPass) {
            return res.json({
                msg:"Password did not match!"
            })
        }
        if(decodedPass) {
            const userId = user._id;
            const secretKey = process.env.JWT_SECRET;
            
            const token = jwt.sign({
                id:userId
            }, secretKey);

            return res.json({
                msg:"Logged in successfully!",
                token:token
            })
        } else {
            return res.json({
                msg:"User does not exist, Please sign up first!"
            })
        }
        
     } catch (error) {
        return res.status(500).json({
            msg:"Internal server error in signin functionality,Error is : "+ error
        })
        
     }
})

module.exports = router