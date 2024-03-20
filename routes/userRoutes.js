import { getUser , updateUser , deleteUser , addUser } from "../controllers/usersController.js";
import { Router } from "express";

const router = Router();


router.get('/',  getUser);

router.put('/', updateUser);

router.post('/', addUser);

router.delete('/', deleteUser);

export default router;