import MerchantData from "../model/Merchant.model.js"
import crypto from "crypto";
import DealCreate from "../model/MerchantDeal.model.js"
import Product from "../model/Productlist.model.js";
const DealId = () => {
  return crypto.randomInt(100000, 1000000)
}
const option = {
    path: "/",
    // secure: true,       // Ensure the cookie is only sent over HTTPS
    httpOnly: true, 
    // sameSite: "None"
  
  }

const MerchantLogin = async(req,res)=>{
    const {Email,Password} = req.body;
    const authEmail = await MerchantData.findOne({Email})
    if(!authEmail){
        return res.json("User not Exist ! check your email")
    }
    const CheckPassword = (authEmail.Password === Password)
    if(! CheckPassword){
        return res.json("Wrong Password! Check Your Password ")
    }

    res
    .status(200)      
    .cookie("Memail", Email , option)
    .json("Succesfully Login!");
}

const Dealcreate = async(req,res)=>{
    try {
        const Email = req.cookies.Memail;
        const id = req.params.id
        console.log(Email ,id ,"data  from forntend ")
        const Merchant = await MerchantData.findOne({Email:Email})
        if(!Merchant){
            return res.json({msg:"Merchant Not Exist !"})
        }
    
        const {Extra,Quantity,Color} = req.body;
        if(Quantity > 50){
            return res.json({msg:"Qunatity of product should be less then 50"})
        }
        const Deal_Id = DealId()
    
        await DealCreate.create({
            DealId:Deal_Id,
            Quantity:Quantity,
            Extra:Extra,
            ProductId:id,
            MerchanId:Email,
            Color:Color
        })
    
        res.json({msg:"Deal Created succesfully !"})
    } catch (error) {
        console.log(error);
        res.json({msg:"Intrenal server error"})
    }


    
        
}


const DealForMerchant = async(req,res)=>{
    try {
        const Deal = await Product.find({ Status: "Active" });
        if(!Deal){
            return res.json({msg:"0 Deals live"});
    
        }
       res.json({Deal})
    } catch (error) {
      console.log(error);
      res.json({msg:"Intrenal server Error !"})  
    }
}

const DealsUpdate = async(req, res) =>{
    const Email = req.cookies.Memail;
    if(!Email){
        return res.json({msg:"Email not found "})
    }
const data = await DealCreate.find({MerchanId:Email})
if(data.length === 0){
    return res.json({msg:"no deals"})
}
res.json({msg:'success',data})
}

export default {MerchantLogin,Dealcreate , DealForMerchant,DealsUpdate}