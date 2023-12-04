const Blog = require('../model/blog')

async function home_get(req, res) {
    const blogs = await Blog.find().sort({ createdAt: -1 })

    res.render('blogs', { title: "Home", blogs })
}

function create_get(req, res) {
    res.render('create', { title: "Create New Blog" })
}

function create_post(req, res) {
    console.log(req.body);
    const blog = new Blog(req.body)
    blog.save()
        .then((result) => {
            res.redirect('/blogs')
            console.log(result)
        })
        .catch((err) => console.log(err))
}

function detail_get(req, res) {
    const id = req.params.id;
    console.log(id);
    Blog.findById(id)
        .then((result) => {
            console.log(result)
            res.render('details', { blog: result, title: "Blog details" })
        })
        .catch((err) => console.log(err))
}

function blog_delete(req, res) {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then((result) => {
            res.json({ redirect: '/blogs' })
        })
        .catch((err) => console.log(err))
}

module.exports = {
    home_get,
    create_get,
    create_post,
    detail_get,
    blog_delete
}