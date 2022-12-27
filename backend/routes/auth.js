import express from 'express';
import { SignIn, signout } from '../controllers/authCtrl.js';


const Authroute = express.Router();

Authroute.post('auth/signin', SignIn);
Authroute.get('auth/signout', signout);

