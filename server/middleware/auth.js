import jwt from "jsonwebtoken"
import 'dotenv/config'

const authToken = (req, res, next) => {
    const token = req.cookies.token

    if(!token) {
        return res.status(401).json({message: 'Unauthorized'})
    }

    jwt.verify(token, process.env.TOKEN_KEY , (err, user)=>{
        if(err){
            return res.status(403).json({message: 'Forbidden'})
        }
        req.user = user;
        next();
    });
};

const isAdmin = (req, res, next) =>{
    if(req.user && req.user.userRole==='admin'){
        next();
    }
    else{
        return res.status(403).json({message: 'Forbidden'})
    }
};

export {authToken, isAdmin};
