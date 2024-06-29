const cloudinary = require("../cloudinary");

exports.postController = async (req, res) => {
  try {
    console.log(req.body.image)
    const result = await cloudinary.uploader.upload(req.body.image);
    res.json({
      publicId: result.public_id,
      url: result.secure_url
    })
  }
  catch (err) {
    console.log("Not able to upload image" + err);
  }
}
