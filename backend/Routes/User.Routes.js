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
router.get("/singledeal/:id/:Id",User.SingleDeal);
router.post("/pan/kyc",User.PanKyc)
router.post("/Ac/kyc",User.ACKyc)
router.get("/myorder",User.myOrder)
router.get("/walletdata", User.WalletData)



export default router;

