import { Router } from "express";
const router = Router();
import upload from "../middlewares/multerver.js";

import Admin from "../controller/Admin.controller.js"
import Merchant from "../controller/Merchant.controller.js";


// router.post("/register",Admin.RegisterAdmin);
// router.post("/register/otpverify",Admin.OtpVerfiy);
router.post("/addadmin",Admin.AdminPost);
router.post("/login",Admin.AdminLogin);
// router.post("/login/verfiyotp",Admin.LoginOtpverify);
router.post("/adddeals",upload.single('Image'),Admin.Addproduct);
router.get("/editdeal/:id",Admin.EditDeal);
router.put("/updatedeal/:id",Admin.UpdateDeal);
router.post("/addmerchant",Admin.AddMerchant);


router.get("/alldeals",Admin.AllDeals);
router.get("/allorder",Admin.AllDealsData);
router.post("/cd",Merchant.Dealcreate)

export default router;