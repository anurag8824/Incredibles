import User from "../controller/User.controller.js";
import { Router } from "express";
import upload from "../middlewares/multerver.js";
const router = Router();


router.post("/EmailRegister",User.EmailRegister)
router.post("/Otpverfiy",User.OtpVerfiy)
router.post("/register/finish",User.UserData)
// router.post("resend",User.resendOtp)
router.get("/me",User.UserCheck)
router.get("/Deals",User.Deals);
router.post("/orderclick",User.OrderClick)
router.post("/myproduct",upload.single('image'),User.Myproduct);                                 //upload.single('Invoice')
router.get("/singledeal/:id",User.SingleDeal);
router.post("/kyc",User.Kyc)
router.get("/myorder",User.myOrder)


export default router;

