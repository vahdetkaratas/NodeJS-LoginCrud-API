const express = require('express');
const router = express.Router();

const {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
} = require('./controller/usersController');

router.post('/add', createUser);
router.get('/', getAllUsers);
router.get('/:id', getSingleUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;