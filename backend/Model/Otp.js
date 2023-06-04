const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const otpSchema=new mongoose.Schema({
    userEmail:{type:String},
    otp:{type: String},
    createdAt:Date,
    expiresAt:Date
    
})
otpSchema.pre('save',async function(next){
    const salt= await bcrypt.genSalt(10)
    this.otp= await bcrypt.hash(this.otp,salt)
    next();
    


})
otpSchema.method({
    authenticate:function(userotp){
        return bcrypt.compareSync(userotp,this.otp)},
})
module.exports=mongoose.model('OtP',otpSchema)