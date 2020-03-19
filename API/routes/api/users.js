const router = require('express').Router();
// const auth = require('../auth');
const users = require('../../controllers/users.controller.js');

//POST new user Register route (optional, everyone has access)=>{auth.optional,}
router.post('/register', users.create);
//POST login route (optional, everyone has access)=>{auth.optional,}
router.post('/login',  users.login);
// Update a User with userId => { auth.required,}
router.post('/update/:userId', users.update);
// Delete a User with userId
router.delete('/delete/:userId', users.delete);

module.exports = router;