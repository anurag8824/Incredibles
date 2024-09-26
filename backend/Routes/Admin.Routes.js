import { Router } from "express";
const router = Router();
import upload from "../middlewares/multerver.js";

import Admin from "../controller/Admin.controller.js"


router.post("/register",Admin.RegisterAdmin);
router.post("/register/otpverify",Admin.OtpVerfiy);
router.post("/login",Admin.AdminLogin);
router.post("/login/verfiyotp",Admin.LoginOtpverify);
router.post("/adddeals",upload.single('Image'),Admin.Addproduct)
// router.get("/alldeals",Admin.AllDeals);

export default router;