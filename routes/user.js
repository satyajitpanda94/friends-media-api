import { Router } from "express";
import { cancleFriendRequest, getAllUser, getUserById, makeFriend, sendFriendRequest, updateUser } from "../controllers/userController.js";

const router = Router()

router.get('/all', getAllUser)
router.get('/:id', getUserById)
router.put('/:id/add-friend-request', sendFriendRequest)
router.put('/:id/cancle-friend-request', cancleFriendRequest)
router.put('/:id/make-friend', makeFriend)
router.put('/:id', updateUser)

export default router