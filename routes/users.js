const router = require('express').Router();

const {
  getUser,
  updateUser,
} = require('../controllers/users');
const { validationUpdateUser } = require('../middlewares/validations');

router.get('/me', getUser);
router.patch('/me', updateUser, validationUpdateUser);

module.exports = router;
