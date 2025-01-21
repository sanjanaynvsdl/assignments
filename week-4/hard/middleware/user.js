const jwt = require('jsonwebtoken');

function userMiddleware(req, res, next) {
    // Implement user auth logic
    const token = req.headers.token;
    try {
        if(token) {
            jwt.verify(token, process.env.JWT_SECRET,function(err,data) {
                if(err) {
                    return res.json({
                        msg:"Error while verifying the token",
                        error:err
                    })
                } else {
                    req.userId = data.id;
                    next();
                }
            })
        } else {
            return res.json({
                msg:"Not authorized"
            })

        }
    } catch (error) {
        return res.json({
            msg:"Internal server error in auth Middleware functionality "+error
        })
        
    }  
}

module.exports = userMiddleware;