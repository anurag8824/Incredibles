import EmailVerfication from "../middlewares/Emailverfication.js";
import userModel from "../model/user.model.js";
import Product from "../model/Productlist.model.js";
import myproduct from "../model/Myproduct.js";
import crypto from "crypto";
const genrateOtp = () => {
  return crypto.randomInt(1000, 10000)
}
const option = {
  path: "/",
  secure: true,       // Ensure the cookie is only sent over HTTPS
  // httpOnly: true, 
  sameSite: "None"


};
const EmailRegister = async (req, res) => {
  const Email = req.body.Email;

  console.log(Email);
  const user = await userModel.findOne({ Email: Email })
  console.log(user)
  if (user) {
    const otp = genrateOtp();
    console.log(otp)


    const Subject = "Otp Verification";
    const Message = `Otp is ${otp}`
    EmailVerfication(Email, Subject, Message)
    user.Otp = otp;
    await user.save();
    return res
      .status(200)
      .cookie("Email", Email, option)
      .json({ msg: "Email sent sucessfully !", user })

  }
  const otp = genrateOtp();
  console.log(otp)


  const Subject = "Otp Verification";
  const Message = `Otp is ${otp}`
  try {
    EmailVerfication(Email, Subject, Message)

    await userModel.create({
      Email: Email,
      Otp: otp

    })
    res
      .status(200)
      .cookie("Email", Email, option)
      .json({ msg: "Email sent sucessfully !", user })
  } catch (error) {
    console.log(error)
    res.status(202).json({ msg: "Error in sending Email !", user })

  }


}

const OtpVerfiy = async (req, res) => {
  const { Otp } = req.body;
  console.log(Otp)
  const Email = req.cookies.Email;
  console.log(Email, "email from cookies")
  const user = await userModel.findOne({ Email: Email });
  console.log(user);
  if (!user) {
    return res.json({ msg: "Email Doesn't match", user, Email });

  }
  if (user.Otp == Otp) {
    user.verifed = true;
    await user.save();
    res.status(200).json({ msg: "Sucessfully Otp Match" })

  }
  else {
    res.json({ msg: "Otp Doesn't Match" })
  }

}

const UserData = async (req, res) => {
  const Email = req.cookies.Email;
  const { first_Name, last_Name, Phoneno } = req.body
  const user = await userModel.findOne({ Email });
  if (!user) {
    return res.json("Email doesn't exist in db");

  }
  user.first_Name = first_Name;
  user.last_Name = last_Name;
  user.Phoneno = Phoneno;

  await user.save()
  res.status(200).json("sucessfully Registered !");
}

const ResndOtp = async (req, res) => {

}

const UserCheck = async (req, res) => {
  const Email = req.cookies.Email;
  const user = await userModel.findOne({ Email });
  if (!user) {
    return res.json({ msg: "user not exist !" })
  }
  if (user.verifed == false) {
    res.json({ msg: "Email not verifed !" })
  }
  else {
    res.json({ msg: "Email verifed !", user, Email })
  }
}


const OrderClick = async (req, res) => {
  try {
    const Email = req.cookies.Email;

    // Check if the Email cookie exists
    if (!Email) {
      return res.status(400).json({ error: 'Email cookie not found' });
    }

    console.log(req.cookies);
    console.log("User", Email);

    // Generate a random AppId
    const AppId = "app" + crypto.randomInt(1000000, 10000000);
    console.log("Generated AppId:", AppId);

    // Uncomment and modify this section when database integration is needed
    await myproduct.create({
      Appid: AppId,
      UserId: Email,
      Product_id: req.body.Product_id
    });

    console.log(req.body, AppId);
    res.json({ "msg": AppId, Email });
  } catch (error) {
    console.error("Error in OrderClick:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



const Myproduct = async (req, res) => {
  try {
    const { OrderId, TrackingId, Otp, FourDigit, AppId } = req.body
    console.log(OrderId, TrackingId, Otp, FourDigit, AppId);
    console.log(req.body);
    const Product = await myproduct.findOne({Appid:AppId});
    console.log(Product)
    if (!Product) {
      res.json({ msg: "AppId is Doesn't Exist !" })
    }
    else {

      if(req.file){
        const image = `/images/${req.file.filename}`

      Product.OrderId = OrderId
      // Product.TrackingCompnay = TrackingCompnay
      Product.TrackingId = TrackingId
      Product.Otp = Otp
      Product.FourDigit = FourDigit
      Product.Invoice = image

      await Product.save();
      res.json({ msg: "order sucessfully Placed !" })
      }
      else{
        Product.OrderId = OrderId
        // Product.TrackingCompnay = TrackingCompnay
        Product.TrackingId = TrackingId
        Product.Otp = Otp
        Product.FourDigit = FourDigit
        // Product.Invoice = image
  
        await Product.save();
        res.json({ msg: "order sucessfully Placed !" })
      }

    }
  } catch (error) {
    console.log(error);
    res.json(error);
  }
}
const Deals = async (req, res) => {
  const Deals = await Product.find({ Status: "Active" })
  if (Deals.length > 0) {
    res.json({ Deal: Deals.length, Deals })
  }
  else {
    res.json({ msg: "0 Deals is live !" })
  }
}

const SingleDeal = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const deal = await Product.findById(id);
  if (deal) {
    res.json({ Deal: deal })

  }
  else {
    res.json({ msg: "no deal found" });
  }

}

const Kyc = async (req, res) => {
  const Email = req.cookies.Email;
  const user = await userModel.findOne({ Email });
  if (!user) {
    return res.json("user not exist");

  }
  user.bankName = req.body.bankName,
    user.IfceCode = req.body.IfceCode,
    user.acNumber = req.body.acNumber,
    user.acHolder = req.body.acHolder,
    user.panNumber = req.body.panNumber,
    user.panHolder = req.body.panHolder,
    user.branch = req.body.branch,

    await user.save();
  res.send("sucesfully completed !")

}

// const myOrder = async (req, res) => {
//   const Email = req.cookies.Email;
//   const Products = await myproduct.find({UserId:Email});
//   // console.log(Products);
//   if (Products.length > 0) {
//     const UpdatePrdocts = await Promise.all(
//       Products.map(async (product) => {
//         const ProductDetails = await Product.findById(product.Product_id)
//         return {
//           ...Products,
//           ProductDetails: ProductDetails
//         }
//       })
//     )

//     res.json(UpdatePrdocts)
//   }
//   else {
//     res.json({ msg: "0 Deal Closes !" });
//   }
// }
// const myOrder = async (req, res) => {
//   try {
//     const Email = req.cookies.Email;
//     const Products = await myproduct.find({ UserId: Email });

//     if (Products.length > 0) {
//       // Step 1: Create a cache to store fetched ProductDetails by Product_id
//       const productCache = {};

//       // Step 2: Fetch ProductDetails for each product
//       const UpdateProducts = await Promise.all(
//         Products.map(async (product) => {
//           // If ProductDetails for this Product_id are not cached, fetch them
//           if (!productCache[product.Product_id]) {
//             const ProductDetails = await Product.findById(product.Product_id);
//             productCache[product.Product_id] = ProductDetails;
//           }

//           // Return the individual product with its corresponding ProductDetails
//           return {
//             ...product, // Spread the individual product object
//             ProductDetails: productCache[product.Product_id], // Attach cached/fetched ProductDetails
//           };
//         })
//       );

//       // Step 3: Return the updated products list with product details
//       res.json(UpdateProducts);
//     } else {
//       res.json({ msg: "0 Deal Closes !" });
//     }
//   } catch (error) {
//     // Handle errors
//     res.status(500).json({ error: error.message });
//   }
// };
const myOrder = async (req, res) => {
  try {
    const Email = req.cookies.Email;
    const Products = await myproduct.find({ UserId: Email });

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


export default { EmailRegister, OtpVerfiy, UserData, ResndOtp, OrderClick, Myproduct, Deals, UserCheck, SingleDeal, Kyc ,myOrder }
