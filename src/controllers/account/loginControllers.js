const sanitize = require('mongo-sanitize');
const bcrypt = require('bcrypt');
const {User} = require('../../models/User');

async function userLogin(req, res) {
  const {email, password} = req.body;
  console.log('================');
  User.findOne({email: sanitize(email)}, async (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: 'Auth failed, email not found',
      });
    }
    console.log('===============111');
    console.log('===============');
    console.log('===============');
    console.log('===============', user);
    const isMatch = await bcrypt.compare(password, user.password);
    console.log('isMatch', isMatch);
    if (!isMatch) {
      throw new Error('Unable to login password is not matching');
    }
    user.CheckTokenMail(sanitize(email), (err, tokenfind) => {
      console.log('the mail is confirmed :', tokenfind);
      user.generateToken((err, user) => {
        console.log('useruseruser', user);
        if (err) return res.status(400).send(err);
        res.cookie('w_authExp', user.tokenExp);
        res
          .cookie('w_auth', user.token, {
            maxAge: 2 * 60 * 60 * 1000,
            secure: true,
            sameSite: 'none',
            httpOnly: false,
          })
          .status(200)
          .json({
            loginSuccess: true,
            userId: user._id,
          });
      });
    });
  });
}
module.exports = {
  userLogin,
};
