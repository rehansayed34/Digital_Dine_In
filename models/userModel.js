// keep in client>src>models
const mongoose=require ("mongoose");

const userSchema=mongoose.Scheme({
    name:{type :String,require},
    email:{type :String,require},
    password:{type :String,require},
    isadmin:{type :Boolean,require,default:false},
} , {
    timestamps:true,
})
module.exports=mongoose.model('user',userSchema)