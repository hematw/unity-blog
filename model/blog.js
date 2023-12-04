const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        body: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;

const mongoURI = 'mongodb://localhost:27017/test'

// async function newBlog() {
//     try {
//         // await mongoose.init(mongoURI);
//         mongoose.connect(mongoURI)
//             .then((result) => {
//                 console.log('Database connected ');
//             }).catch((err) => {
//                 console.log(err.message + "🤷‍♂️");
//             });

//         const blog = new Blog({
//             title: "Introduction to MongoDB",
//             body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia?",
//             author: "Sayed Yaqub"
//         });

//         // After saving the document, the 'createdAt' and 'updatedAt' fields will be automatically populated
//         await blog.save()
//             .then((savedBlog) => {
//                 console.log('blog saved');
//             })
//             .catch((err) => {
//                 console.log(err)
//             })
//     } catch (error) {
//         console.log("Error: " + error);
//     } finally {
//         await mongoose.disconnect();
//         console.log('Database Disconnected!');
//     }
// }

// newBlog()
