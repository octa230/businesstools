import express from "express";
import {create, read, remove, update, userById} from "../controllers/userCtrl";

const UserRouter = express.Router()

UserRouter.route('api/users/')
    .get(list)
    .post(create)

UserRouter.route('/api/users/user:id')
    .get(read)
    .put(update)
    .delete(remove)

UserRouter.param('userId', userById)

export default UserRouter