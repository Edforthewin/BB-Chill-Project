const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js')
// const { setTokenCookie } = require('../../utils/auth.js');
// const { User } = require('../../db/models');
const { restoreUser } = require('../../utils/auth.js');
// const { requireAuth } = require('../../utils/auth.js');

router.use(restoreUser);

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.post('/test', (req, res) => {
    res.json({ requestBody: req.body });
});



// router.post('/test', function(req, res) {
//     res.json({ requestBody: req.body });
//   });
////////////////////////////////////////////////
// router.get('/set-token-cookie', async (_res, res) => {
//   const user = await User.findOne({
//     where: {
//       username: 'mordo-rig6'
//     }
//   });
//   setTokenCookie(res, user);
//   return res.json({ user: user});
// });
///////////////////////////////////////////////
// router.get(
//   '/restore-user',
//   (req, res) => {
//     return res.json(req.user)
//   }
// );
//////////////////////////////////////////////////////
// router.get(
//   '/require-auth',
//   requireAuth,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );



module.exports = router;
