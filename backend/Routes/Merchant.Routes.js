import { Router } from "express";
import Merchant from "../controller/Merchant.controller.js"
const router = Router();



router.get("/deals",Merchant.DealForMerchant);
router.post("/deals/create/:id",Merchant.Dealcreate);
router.post("/login",Merchant.MerchantLogin)
router.get("/update/deals",Merchant.DealsUpdate);
router.get("/alldeals",Merchant.AlldealsforMerchant)


export default router;