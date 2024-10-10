import mongoose from "mongoose";

const MerchantDeal = new mongoose.Schema({
    DealId:{
        type:String,

    },
    MerchanId :{
        type:String,
         default:"lokeshkumariiit@gmail.com"
    },
    Extra:{
        type:String,
         default:"0"
    },
    Quantity:{
        type:String,
         default:"0"
    },

    ProductId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product"

    },
    Fullfiled:{
        type:String,
        default:"0"
    },
    Color:{
        type:String,
        default:"Any Color"
    }

},{timestamps:true})


const DealCreate = mongoose.model("deal",MerchantDeal)

export default DealCreate