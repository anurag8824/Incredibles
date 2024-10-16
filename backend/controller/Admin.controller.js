import EmailVerfication from "../middlewares/Emailverfication.js"
import crypto from "crypto";
import AdminData from "../model/Admin.model.js";
import Product from "../model/Productlist.model.js";
import MerchantData from "../model/Merchant.model.js"
import myproduct from "../model/Myproduct.js";
import DealCreate from "../model/MerchantDeal.model.js"
import userModel from "../model/user.model.js";
import PAYDATA from "../model/Paymenthistory.model.js"

const genrateOtp = () => {
    return crypto.randomInt(1000, 10000)
}
const option = {
    path: "/",
    httpOnly: true,
    Credentials: true

}


// const OtpVerfiy = async (req, res) => {
//     const Email = req.cookie
//     const Admin = await AdminData.findOne(Email);

//     const otp = Admin.Otp;

//     if (Otp == req.body) {
//         Admin.verified = true;
//         await Admin.save();
//         res.json("Sucessfully Registered !")
//     }
//     else {
//         res.json("Wrong Otp")
//     }

// }







// const AdminLogin = async (req, res) => {
//     const Email = req.body
//     const Admin = AdminData.findOne(Email)
//     if (!Admin) {
//         return res.json("Email Doesn't Exist");
//     }
//     // if (Admin.verified) {
//     //     return res.json("First Verfiy Your Email !")
//     // }
//     try {
//         const otp = genrateOtp();
//         console.log(otp)


//         const Subject = "Otp Verification";
//         const Message = `Otp is ${otp}`

//         EmailVerfication(Email, Subject, Message)

//         Admin.Otp = otp;
//         await Admin.save();
//         res.json("Otp Send on Your Email !")
//     } catch (error) {
//         res.json(error)
//     }
// }

const AdminLogin = async (req, res) => {
    try {
        const Email = req.body.Email
        const Password = req.body.Password;
        const Admin = await AdminData.findOne({ Email });

        // const otp = Admin.Otp;!
        if (!Admin) {
            return res.json({ msg: "Email is not existing" })
        }
        if (Admin.Password != Password) {
            return res.json({ msg: "Password not match" })
        }

        res.json({ msg: "successfully" });
    } catch (error) {
        console.log(error);
        res.json({ msg: "error" })

    }


}

const AdminPost = async (req, res) => {
    await AdminData.create({});
    res.json({ msg: "success" });
}

const Addproduct = async (req, res) => {
    console.log(req.body)
    if (!req.file) {
        await Product.create({
            DealTitle: req.body.DealTitle,
            Price: req.body.Price,
            Offer: req.body.Offer,
            Store: req.body.Store,
            Variant: req.body.Variant,

            Link: req.body.Link,
            OfferAmmount: req.body.OfferAmmount,
            CardType: req.body.CardType,
            DealNumber: req.body.DealNumber,
            offerCash: req.body.offerCash,
            Status: req.body.Status,
            Iprice: req.body.Iprice,
        });
        res.json("Product List Sucessfully !")

    }
    else {

        try {
            const Image = `/images/${req.file.filename}`;

            await Product.create({
                DealTitle: req.body.DealTitle,
                Price: req.body.Price,
                Offer: req.body.Offer,
                Store: req.body.Store,
                Variant: req.body.Variant,
                Image: Image,
                Link: req.body.Link,
                OfferAmmount: req.body.OfferAmmount,
                CardType: req.body.CardType,
                DealNumber: req.body.DealNumber,
                offerCash: req.body.offerCash,
                Status: req.body.Status,
                Iprice: req.body.Iprice,
            })
            res.json("Product List Sucessfully !")

        } catch (error) {
            res.json(error)

        }
    }


}

const AllMerchant = async (req, res) => {
    try {
        const Data = await MerchantData.find()
        if (Data.length == 0) {
            return res.json("0 merchant is aviable")
        }
        res.json(Data);
    }
    catch (error) {
        res.json(error)

    }
}

const AddMerchant = async (req, res) => {
    try {
        const { Email, Password, Name } = req.body;
        const Merchant = await MerchantData.findOne({ Email });
        if (Merchant) {
            return res.json("Email Alreadt Exist !")
        }
        await MerchantData.create({
            Email: req.body.Email,
            Password: req.body.Password,
            Name: req.body.Name,
        })
        res.json("Merchant Created Sucessfully !")
    } catch (error) {
        res.json(error)
    }
}

const AllDeals = async (req, res) => {
    const Products = await Product.find({});
    if (Products.length > 0) {



        res.json(Products)
    }
    else {
        res.json({ msg: "0 Deal Closes !" });
    }
}

const EditDeal = async (req, res) => {
    const id = req.params.id;
    const data = await Product.findById(id);
    if (!data) {
        return res.json({ msg: "no deal here !" })
    }

    res.json({ data })
}

const UpdateDeal = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        product.DealTitle = req.body.DealTitle || product.DealTitle;
        product.Price = req.body.Price || product.Price;
        product.Offer = req.body.Offer || product.Offer;
        product.Store = req.body.Store || product.Store;
        product.Variant = req.body.Variant || product.Variant;
        product.OfferAmmount = req.body.OfferAmmount || product.OfferAmmount;
        product.CardType = req.body.CardType || product.CardType;
        product.DealNumber = req.body.DealNumber || product.DealNumber;
        product.offerCash = req.body.offerCash || product.offerCash;
        product.Status = req.body.Status || product.Status;

        // Save the updated product
        await product.save();

        res.json({ message: "Product updated successfully!" });
    } catch (error) {
        res.status(500).json({ error: "An error occurred while updating the product" });
    }



}
const AllDealsData = async (req, res) => {
    try {
        //   const Email = req.cookies.Email;
        const Products = await myproduct.find({});

        if (Products.length > 0) {
            // Step 1: Create an array to hold the updated products
            const UpdateProducts = await Promise.all(
                Products.map(async (product) => {
                    // Step 2: Fetch ProductDetails for the current product
                    const ProductDetails = await Product.findById(product.Product_id);

                    // Step 3: Merge the product and ProductDetails into a single object
                    return {
                        ...product.toObject(), // Convert Mongoose document to a plain object
                        ...ProductDetails ? ProductDetails.toObject() : {} // Combine with ProductDetails
                    };
                })
            );

            // Step 4: Return the combined object containing all products
            res.json({ products: UpdateProducts });
        } else {
            res.json({ msg: "0 Deal Closes !" });
        }
    } catch (error) {
        // Handle errors
        res.status(500).json({ error: error.message });
    }
};

const AllOrderdDeals = async (req, res) => {
    const id = req.body.id;
    console.log(id)
    const mdata = await MerchantData.findOne({ _id: id })
    const Email = mdata.Email;
    console.log(Email);
    //  console.log("emial",Email)
    try {
        const MerchantDeal = await DealCreate.find({ MerchanId: Email });
        // console.log("MerchanId",MerchantDeal)

        const DealData = await Promise.all(
            MerchantDeal.map(async (deal) => {
                const myDealData = await myproduct.find({ MerchantDealId: deal.DealId });
                console.log(myDealData, "mydealdatata")

                if (myDealData.length != 0) {
                    await Promise.all(
                        myDealData.map(async (myDeal) => {
                            const product = await Product.findById(myDeal.Product_id);
                            if (product) {
                                Object.assign(deal._doc, myDeal._doc, product._doc); // Merge product data into deal
                            }
                        })
                    );
                }
                else {
                    const data = await Product.findById(deal.ProductId);
                    console.log(data, "secconds")
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


const BlukDealview = async (req, res) => {
    const id = req.body.id;
    console.log(id)
    // const mdata = await MerchantData.findOne({_id:id})
    // const Email = mdata.Email;
    // console.log(Email);
    //  console.log("emial",Email)
    try {
        //   const MerchantDeal = await DealCreate.find({ MerchanId: Email });
        // console.log("MerchanId",MerchantDeal)
        const myDealData = await myproduct.find({ MerchantDealId: id });

        const DealData = await Promise.all(
            myDealData.map(async (deal) => {
                console.log(myDealData, "mydealdatata")


                const product = await Product.findById(deal.Product_id);
                const myDeal = await DealCreate.findOne({ DealId: deal.MerchantDealId })
                if (product) {
                    Object.assign(deal._doc, myDeal._doc, product._doc); // Merge product data into deal
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

const PaymentStatus = async (req, res) => {
    try {
        const data = await myproduct.find({ Receive: true, PaymentSatuts: false });

        if (data.length === 0) {
            return res.json({ msg: "0 Payments remaining" });
        }

        const AlluserData = await Promise.all(
            data.map(async (item) => {
                const user = await userModel.findOne({ Email: item.UserId });

                // Ensure that user exists
                if (!user) {
                    return { ...item._doc, user: null }; // Handle case where user is not found
                }

                return { ...item._doc, ...user._doc };
            })
        );

        res.json({ AlluserData });
    } catch (error) {
        console.log(error);
        res.status(500).json({ Error: error.message });
    }
};


const PayHistory = async (req, res) => {
    try {
        const appId = req.body.appId
        const user = await myproduct.findOne({ Appid: appId })

        console.log(user)
        const Email = user.UserId
        if (!user) {
            return res.json({ msg: "Error in fetching user" })
        }
            await PAYDATA.create({
                UTR: req.body.UTR,
                Email: Email,
                Amount: req.body.Amount,
                APPID: req.body.appId
            })
            res.json({ msg: "success" })
        
    } catch (error) {
        res.json({ msg: error.message })
    }

}


export default {
    AllDealsData, AdminLogin, AdminPost, AllOrderdDeals, Addproduct, AllMerchant, AddMerchant, AllDeals, EditDeal
    , UpdateDeal, BlukDealview, PaymentStatus, PayHistory
}
