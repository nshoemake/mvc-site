const express = require('express')
const passport = require('passport')
const router = express.Router()

//@desc auth with google
//@Route GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile']}))

//@desc google auth callback
//@Route GET /auth/google/callback
router.get('/google/callback', 
passport.authenticate('google', {failureRedirect: '/'}), (req,res) => {
    res.redirect('/dashboard')
}
)

//@desc logout user
//@route /auth/logout
//!Change: Passport 0.6 requires logout to be async
router.get('/logout', (req,res,next) => {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
      });
})


module.exports = router