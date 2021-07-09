import expres from 'express';
import {
  userInfo,
  addUser,
  getUserById,
  edittUser,
  deleteUser,
} from '../controller/userController.js';

const router = expres.Router();

router.route('/').get(userInfo);
router.route('/add').post(addUser);
router.route('/:id').get(getUserById);
router.route('/:id').put(edittUser);
router.route('/:id').delete(deleteUser);

export default router;
