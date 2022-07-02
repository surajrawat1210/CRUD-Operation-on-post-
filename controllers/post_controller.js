const Post = require("../models/post");
// const post=require("../models/post");
const Comment=require("../models/comment");
module.exports.create=function(req,res)
{
    
    Post.create({
        content:req.body.content,
        user:req.user._id
    },function(err,post){
        if(err){
            console.log("error in creating a post");
            return;
        }
        return res.redirect("back");
    });
}
module.exports.destroy=(req,res)=>{
    Post.findById(req.params.id,function(err,post){
        if(post)
        {
            //user.id automatically convert object id into string
             if(post.user==req.user.id)
             {
                post.remove();
                Comment.deleteMany({post:req.params.id},function(err)
                {
                    console.log("deleting successfully");
                    return res.redirect("back");
                });
             }
             else {
                console.log(type(post.id));
                console.log(req.params.id);
                console.log("there is some problem");
                return res.redirect("back");
             }
        }
    });
    
}