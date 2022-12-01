const Post = require('../model/post');
const cloudinary = require("../cloudinary");

exports.getController = (req, res) => {
    Post.find({}, (err, posts) => res.send(posts));
}
exports.postController = async (req, res) => {
    const post = new Post({
        title : await req.body.title,
        coverImage : await req.body.coverImage,
        snippet : await req.body.snippet,
        body : await req.body.body,
        imgArray : await req.body.imgArray
    })
     post.save(() => console.log("Post saved"));
}

exports.deleteController = async (req, res) => {
    try{
        const { _id, imgArray } = await req.body.element;
        imgArray.current.forEach(element => {
             cloudinary.uploader.destroy(element, {type : 'upload', resource_type : 'image'});
        });
        await Post.deleteOne({_id : _id}).then(() => console.log("Post deleted"))
    }
    catch(err){
        console.log("Unable to delete post: " + err);
    }
    
}
