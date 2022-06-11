const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//Register

const register = (req,res,next) => {
    bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
        if(err) {
            res.json({
                message: 'An error occured while registering...'
            })
        }
        let user = new User ({
            name: req.body.name,
            email: req.body.email,
            password: hashedPass,
            phone: req.body.phone,
            archived: false
        });
        user.save()
        .then(response => {
            console.log('Register Successful for ' + user.name);
            res.redirect('/login');
        })
        .catch(err => {
            res.json({
                message: 'An error ocurred while registering : ' + err
            })
        })    
    });
}


//Login

const login = (req,res,next) => {
    var username = req.body.username;
    var password = req.body.password;
    User.findOne({$or:[{email:username}, {phone:username}]})
    .then(user => {
        if(user){
            bcrypt.compare(password, user.password, function(err, result) {
                if(err){
                    res.json({
                        message: 'Error'
                    })
                }
                if(result){
                    let token = jwt.sign({name: user.name}, 'verySecretValue', {expiresIn:'1h'});
                   console.log('Login Successful for ' + username)
                   res.redirect('/home');
                } else {
                    res.redirect('/error')
                }
            })
        }else{
            res.redirect('/error')
        }
    })
    .catch(err => {
        res.json({
            message: 'An error occured while logging in : ' + err
        })
    })
}
module.exports = {register, login};