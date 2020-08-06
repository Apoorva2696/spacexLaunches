const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../../models/users');
const { JsonWebTokenError } = require('jsonwebtoken');

// @route  POST api/users
// @desc   Test route
// @access Public
router.post('/', [
    
], async(req,res) => {

    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()}); //bad request
    }

    const { name, email, password } = req.body;

    try{

        let user = await User.findOne({email})
        
        //check if the user exists then send bad request
        if(user){
            res.status(400).json({errors: [{msg: 'User already exists'}]});
        }

        // get users gravatar
        const avatar = gravatar.url( email, {
            s: '200',
            r: 'pg',
            d: 'mm'
        });

        // create a new user
        user = new User({ name, email, avatar, password });

        //encrypt the password
        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        //save user data in db
        await user.save();

        // return jwt
        const payload = {
            user: {
                id: user.id
            }
        };

        //sign the token
        jwt.sign(
            payload,
            config.get('jwtSecret'),
            { expiresIn: 360000 },
            ( err, token ) => {
                if( err ) throw err;
                res.json({token});
            }
        );

        // res.send('User registered');

    } catch(err) {
        console.log( err.message );
        res.status(500).send('Server error');
    }
    
} );

module.exports = router;