const mongoose=require("mongoose")

const chatModel = mongoose.Schema(
    {
        sender: {type:String,required:true},
        room:{type:String,required:true},
        content: {type:String,required:true}
    },
    {timestamps:true}
)
const chat = mongoose.model("chat",chatModel)
module.exports=chat