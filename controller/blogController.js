
const Blog = require('../modals/blog.modal')

exports.createBlog = async (req, res) => {
  try {
    const {
      blogTitle,
      blogImages,
      authorName,
      firstPara,
      date
    } = req.body;
    // console.log("Body: ", req.body);

    // Check if any field is empty
    if (!blogTitle || !authorName || !firstPara || !blogImages || !date) {
      return res.status(400).json({
        success: false,
        message: "Please fill all the fields",
      });
    }

    // Create a new blog instance
    const newBlog = new Blog({
      blogTitle,
      blogImages,
      authorName,
      firstPara,
      date
    });

    // Save the blog in the database
    await newBlog.save();

    res.status(201).json({
      success: true,
      message: "Blog created successfully",
      data: newBlog,
    });
  } catch (error) {
    console.error("Error creating blog:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
//Update Blogs
exports.updateBlog = async (req, res) => {
  try {
    const blogId = req.params.Blogid; // Corrected parameter name

    // Check if blog exists
    const existingBlog = await Blog.findById(blogId);

    if (!existingBlog) {
      return res.status(404).json({
        success: false,
        msg: "No such blog found",
      });
    }

    // If the blog exists, update its fields
    const {
      blogTitle,
      // blogQuote,
      blogImages,
      authorName,
      // authorImg,
      firstPara,
      // secondPara,
    } = req.body;

    const updatedBlog = await Blog.findByIdAndUpdate(
      blogId,
      {
        blogTitle,
        //   blogQuote,
        blogImages,
        authorName,
        //   authorImg,
        firstPara,
        //   secondPara,
      },
      { new: true } // Return the updated document
    );

    res.status(200).json({
      success: true,
      message: "Blog updated successfully",
      data: updatedBlog,
    });
  } catch (error) {
    console.error("Error updating blog:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};


exports.singleBlog = async (req, res) => {
  try {
    const id = req.params.id
    const SingleBlog = await Blog.findById(id);
    if (SingleBlog === null) {
      res.status(404).json({
        success: false,
        message: "Blog not Found"
      })
    }

    res.status(200).json({
      success: true,
      message: "Blog Founded",
      data: SingleBlog
    })

  } catch (error) {
    console.log(error)
  }
}
//get all blog
exports.allBlogs = async (req, res) => {
  try {
    const allBlog = await Blog.find();

    // if blog lenth is more than zero
    if (allBlog.length > 0) {
      res.status(200).json({
        success: true,
        msg: "Blogs Found",
        data: allBlog,
      });
    } else {
      // Send a response indicating no blogs were found
      res.status(404).json({
        success: false,
        msg: "No blogs found",
      });
    }
  } catch (error) {
    console.error("Error in Finding All blog:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

//serach with keywords

//delete blog
// exports.DeleteBlog = async (req, res) => {
//   try {
//     const DeleteBlogid = req.params.Blogid;

//     const existBlog = await Blog.findById(DeleteBlogid);

//     if (!existBlog) {
//       return res.status(404).json({
//         success: false,
//         msg: "blog not found",
//       });
//     }

//     const deletedBlog = await Blog.deleteOne({ _id: DeleteBlogid });
//     if (deletedBlog) {
//       return res.status(200).json({
//         success: true,
//         msg: "Deleting Successfully",
//       });
//     }
//   } catch (error) {
//     console.error("Error in Finding All blog:", error);
//     res.status(500).json({
//       success: false,
//       message: "Internal server error",
//     });
//   }
// };

exports.DeleteBlog = async (req, res) => {
  try {
    const deleteBlogId = req.params.id;

    const existingBlog = await Blog.findById(deleteBlogId);

    if (!existingBlog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    const deletedBlog = await Blog.deleteOne({ _id: deleteBlogId });

    if (deletedBlog.deletedCount > 0) {
      return res.status(200).json({
        success: true,
        message: "Blog deleted successfully",
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Failed to delete blog",
      });
    }
  } catch (error) {
    console.error("Error deleting blog:", error);
    res.status(500).json({
      success:false,
      message: 'Internal error'
    })
  }
};
