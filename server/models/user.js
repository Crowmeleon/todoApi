const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

// this is where you can use the library for validating an email and or any other information 

var UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true, 
        minlength: 1,
        trim: true,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: "{VALUE} this email is not valid"
        }
    },
    password: {
        type: String, 
        required: true,
        minlength: 6
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]
});

UserSchema.methods.toJSON = function(){
    var user = this;
    var userObject = user.toObject();

    return _.pick(userObject, ['_id','email']);
}

UserSchema.methods.generateAuthToken = function (){
    // document where the method is called on
  var user = this;
  var access = "auth";
  var token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString();

  user.tokens = user.tokens.concat([{access,token}]);
  return user.save().then(() => {
      return token;
  });
};

UserSchema.statics.findByToken = function (token){
    var User = this;
    var decoded;

    try {
     decoded = jwt.verify(token, 'abc123');
    } catch (e) {
        return Promise.reject();
    }

    return User.findOne({
        '_id': decoded._id,
        'tokens.token': token,
        'tokens.access': 'auth'
    });
};

var User = mongoose.model("User", UserSchema);

module.exports = {User}