import MerchantData from "../model/Merchant.model.js"
import crypto from "crypto";
import DealCreate from "../model/MerchantDeal.model.js"
import Product from "../model/Productlist.model.js";
import myproduct from "../model/Myproduct.js";
import UTRDATA from "../model/UTR.model.js";
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


// const AlldealsforMerchant = async (req, res) => {
//     try {
//       const Email = req.cookies.Memail;
  
//       // Find all deals related to the merchant's email
//       const MerchantDeal = await DealCreate.find({ MerchanId: Email });
  
//       // Loop over each deal and fetch related product data
//       const DealData = await Promise.all(
//         MerchantDeal.map(async (item) => {
//           // Find product data related to the current deal
//           const mydealdata = await myproduct.find({ MerchantDealId: item.DealId });
//           console.log()
  
//           // Fetch product details for each product in the deal
//           const ProductData = await Promise.all(
//             mydealdata.map(async (myitem) => {
//               const product = await Product.findById(myitem.Product_id);
//               return product._doc; // Return product document
//             })
//           );
  
//           // Merge the deal and its associated product data
//           return {
//             ...item,  // Deal data
//             ...ProductData // Associated products
//           };
//         })
//       );
  
//       // Send the combined data as a response
//       console.log(DealData);
//       res.status(200).json({ Deals: DealData });
//     } catch (error) {
//       console.error('Error fetching deals for merchant:', error);
//       res.status(500).json({ msg: 'Internal Server Error' });
//     }
//   };

const AlldealsforMerchant = async (req, res) => {
    const Email = req.cookies.Memail;
    //  console.log("emial",Email)
    try {
      const MerchantDeal = await DealCreate.find({ MerchanId: Email });
      // console.log("MerchanId",MerchantDeal)
  
      const DealData = await Promise.all(
        MerchantDeal.map(async (deal) => {
          const myDealData = await myproduct.find({ MerchantDealId: deal.DealId });
          console.log(myDealData,"mydealdatata")
          
          if(myDealData.length != 0){
          await Promise.all(
            myDealData.map(async (myDeal) => {
              const product = await Product.findById(myDeal.Product_id);
              if (product) {
                Object.assign(deal._doc, myDeal._doc, product._doc); // Merge product data into deal
              }
            })
          );
        }
        else{
          const data = await Product.findById(deal.ProductId);
          console.log(data,"secconds")
          if (data) {

          console.log(data);
          Object.assign(deal._doc, data._doc); // Merge product data into deal
          }

        }
  
          return deal._doc;
        })
      );
  
      // Return all merged data in a single object
      // console.log(DealData,"hhhhhhhh");
      res.json({ DealData });
      // res.json({msg:"hello world"})
    } catch (error) { 
      console.log(error)
      res.status(500).json({ msg: "Error fetching deals", error });
    }
  };

  const AllOrderdDeals = async (req, res) => {
    const Email = req.cookies.Memail;
    //  console.log("emial",Email)
    try {
      const MerchantDeal = await DealCreate.find({ MerchanId: Email });
      // console.log("MerchanId",MerchantDeal)
  
      const DealData = await Promise.all(
        MerchantDeal.map(async (deal) => {
          const myDealData = await myproduct.find({ MerchantDealId: deal.DealId });
          console.log(myDealData,"mydealdatata")
          if(myDealData.length !=0){
          await Promise.all(
            myDealData.map(async (myDeal) => {
              const product = await Product.findById(myDeal.Product_id);
              if (product) {
                Object.assign(deal._doc, myDeal._doc, product._doc); // Merge product data into deal
              }
            })
          );
    
       

        
  
          return deal._doc;
        }
        // else{
        // return 
        // }
        })
      );
  
      // Return all merged data in a single object
      // console.log(DealData,"hhhhhhhh");
      res.json({ DealData });
      // res.json({msg:"hello world"})
    } catch (error) {
      console.log(error)
      res.status(500).json({ msg: "Error fetching deals", error });
    }
  };


  const UTR = async (req, res) => {
   try {
     const Email = req.cookies.Memail;
     if(!Email){
       return res.json({msg:"Email not found "})
   }
     const Merchant= await MerchantData.find({Email:Email})
     if(!Merchant){
       return res.json({msg:"Merchant not found "});
 
     }
     
     await UTRDATA.create({
       MerchantId:Email,
       Merchant:req.body.Merchant,
       UTR:req.body.UTR,
       Amount:req.body.Amount,
      
       
     })
 
    res.json({msg:"successfully created !"})
   } catch (error) {
    res.json({msg:"error creating"});
   }
    
  };
  
  
  
  


  
export default {MerchantLogin,Dealcreate , DealForMerchant,DealsUpdate,AlldealsforMerchant,UTR,AllOrderdDeals}