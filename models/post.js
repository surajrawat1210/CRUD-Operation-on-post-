
const mongoose=require("mongoose");
const postSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    //include the array o fids of all comments in the post Schema itself
    comments:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Comment"
        }
    ]
    }
,{
    Timestamps:true
});
const Post =mongoose.model("Posts",postSchema);
module.exports=Post;