const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const saltRounds = 10;
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true,
    unique: 1,
  },
  password: {
    type: String,
    minglength: 5,
  },
  firstName: {
    type: String,
    maxlength: 50,
  },
  lastName: {
    type: String,
    maxlength: 50,
  },
  roleCode: {
    type: String,
    default: 50,
  },
  image: {
    type: String,
  },
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
  status: {
    type: Number,
    required: true,
    enum: [0, 1],
    default: 1,
  },
});

userSchema.pre('save', function(next) {
  const user = this;
  if (user.isModified('password')) {
    bcrypt.genSalt(saltRounds, function(err, salt) {
      if (err) return next(err);

      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) return next(err);
        user.password = hash;
        const token = (+new Date() + Math.random() * 100).toString(32);
        user.tokenConf = crypto
          .createHash('md5')
          .update(token)
          .digest('hex');

        next();
      });
    });
  } else {
    next();
  }
});

userSchema.methods.CheckTokenMail = function(tokenfind, cb) {
  const user = this;
  return cb(null, user.token_mail);
};

userSchema.methods.generateToken = function(cb) {
  const user = this;
  const token = jwt.sign(user._id.toHexString(), 'secret');

  user.token = token;
  user.save(function(err, user) {
    if (err) return cb(err);
    cb(null, user);
  });
};

userSchema.statics.findByToken = function(token, cb) {
  const user = this;

  jwt.verify(token, 'secret', function(err, decode) {
    user.findOne({_id: decode, token}, function(err, user) {
      if (err) return cb(err);
      cb(null, user);
    });
  });
};

const User = mongoose.model('User', userSchema);

module.exports = {User};
