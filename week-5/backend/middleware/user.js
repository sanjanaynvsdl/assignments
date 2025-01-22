//  start writing from here

const jwt = require("jsonwebtoken");

const secretKey = process.env.JWT_SECRET;

function authMiddleware(req,res,next) {
    const token = req.headers.token;

    if(!token) {
        return res.json({
            msg:"Not authorized!"
        })
    }

    try {
    
        jwt.verify(token, secretKey, (err, data)=> {
                if(err) {
                    return res.json({
                        msg:"Error while verifying token "+err
                    })
                } else {
                    req.userId = data.id;
                    next()
                }
            })
        
    } catch (error) {
        return req.json({
            msg:"Internal server error in authMiddleware functionality :"+error
        })
        
    }
}

module.exports = authMiddleware;

