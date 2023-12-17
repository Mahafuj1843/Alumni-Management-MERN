import express from 'express';
import { login, logout, updateProfile,changePassword, forgotPassword, resetPassword, profileDetails, alumniRegister, studentRegister } from '../controllers/authController.js';
import { verifyToken } from '../middlewares/auth.js';
import { uploadPhoto } from '../middlewares/uploadImage.js';

const router = express.Router()

router.post('/alumni/register',uploadPhoto.single('photo'), alumniRegister);
router.post('/register',uploadPhoto.single('photo'), studentRegister);
router.post('/login', login);
router.get('/logout', logout);
router.get('/profile/details',verifyToken, profileDetails);
router.put('/updateProfile', verifyToken, uploadPhoto.single('photo'), updateProfile);
router.put('/change/password', verifyToken, changePassword);
router.post('/forgotPassword', forgotPassword);
router.put('/resetPassword/:resetToken', resetPassword);

export default router