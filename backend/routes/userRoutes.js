import express from "express";
import {create, read, remove, update, userById, list} from "../controllers/userCtrl.js";

const UserRouter = express.Router()

UserRouter.post('/register/', create)
UserRouter.get('/listusers/', list)

UserRouter.route('/api/users/user:id')
    .get(read)
    .put(update)
    .delete(remove)

UserRouter.param('userId', userById)

export default UserRouter