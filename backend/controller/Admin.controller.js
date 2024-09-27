import EmailVerfication from "../middlewares/Emailverfication.js"
import crypto from "crypto";
import AdminData from "../model/Admin.model.js";
import Product from "../model/Productlist.model.js";
import MerchantData from "../model/Merchant.model.js"
import myproduct from "../model/Myproduct.js";
const genrateOtp = () => {
    return crypto.randomInt(1000, 10000)
}
const option = {
    path: "/",
    httpOnly: true,
    Credentials: true

}
const RegisterAdmin = async (req, res) => {
    const Email = req.body;
    try {
        const otp = genrateOtp();
        console.log(otp)


        const Subject = "Otp Verification";
        const Message = `Otp is ${otp}`

        EmailVerfication(Email, Subject, Message)
        await AdminData.create({
            Email: Email,
            Otp: otp
        })
        res
            .cookie("Email", Email, option)
            .json("otp sent on yor Email")
    } catch (error) {
        res.json(error)
    }

}

const OtpVerfiy = async (req, res) => {
    const Email = req.cookie
    const Admin = await AdminData.findOne(Email);

    const otp = Admin.Otp;

    if (Otp == req.body) {
        Admin.verified = true;
        await Admin.save();
        res.json("Sucessfully Registered !")
    }
    else {
        res.json("Wrong Otp")
    }

}







const AdminLogin = async (req, res) => {
    const Email = req.body
    const Admin = AdminData.findOne(Email)
    if (!Admin) {
        return res.json("Email Doesn't Exist");
    }
    if (Admin.verified) {
        return res.json("First Verfiy Your Email !")
    }
    try {
        const otp = genrateOtp();
        console.log(otp)


        const Subject = "Otp Verification";
        const Message = `Otp is ${otp}`

        EmailVerfication(Email, Subject, Message)

        Admin.Otp = otp;
        await Admin.save();
        res.json("Otp Send on Your Email !")
    } catch (error) {
        res.json(error)
    }
}

const LoginOtpverify = async (req, res) => {
    const Email = req.cookie
    const Admin = await AdminData.findOne(Email);

    const otp = Admin.Otp;

    if (Otp == req.body) {
        res.json("Sucessfully Login !")
    }
    else {
        res.json("Wrong Otp")
    }


}

const Addproduct = async (req, res) => {
    console.log(req.body)
    if(!req.file){
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
            Status: req.body.Status
        });
        res.json("Product List Sucessfully !")
        
    }
    else{

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
            Status: req.body.Status
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
        if (!Data) {
            return res.json("Error in Fecting Data")
        }
        res.json(Data);
    }
    catch (error) {
        res.json(error)

    }
}

const AddMerchant = async (req, res) => {
    try {
        const { Email, Password } = req.body;
        const Merchant = await MerchantData.findOne(Email);
        if (Merchant) {
            return res.json("Email Alreadt Exist !")
        }
        await MerchantData.create({
            Email: req.body.Email,
            Password: req.body.Password
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

export default {
    AllDealsData, AdminLogin, RegisterAdmin, OtpVerfiy, LoginOtpverify, Addproduct, AllMerchant, AddMerchant, AllDeals, EditDeal
    , UpdateDeal,
}
