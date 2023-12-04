const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes')


const app = express();

// app.get('/',(req, res)=> {
//     res.send('Hello, Unity Boys')
// })

// app.get('/',(req, res)=> {
//     res.sendFile('./pages/index.html', {'root': __dirname}, ()=> {
//         console.log('File sent');
//     })
// })

// app.get('/winter',(req, res)=> {
//     res.sendFile('./pages/winter.html', {'root': __dirname}, ()=> {
//         console.log('File sent');
//     })
// })

// app.get('/summer',(req, res)=> {
//     res.sendFile('./pages/summer.html', {'root': __dirname}, ()=> {
//         console.log('File sent');
//     })
// })

// app.get('/contact',(req, res)=> {
//     res.sendFile('./pages/contact.html', {'root': __dirname}, ()=> {
//         console.log('File sent');
//     })
// })

// app.get('/contact-us',(req, res)=> {
//     res.redirect('/contact')
// })

// app.use((req, res)=> {
//     res.sendFile('./pages/notfound.html', {'root': __dirname})
// })


// Register View Engine
app.set('view engine', 'ejs');


// Listen on Port 8080
// app.listen(8080);

// Connect to MangoDB
// const mongoURI = 'mongodb+srv://test:test1234@unity.bexrwac.mongodb.net/?retryWrites=true&w=majority'
const mongoURI = 'mongodb://localhost:27017'


// Connect to MangoDB with mongoose module
mongoose.connect(mongoURI)
    .then((result) => {
        console.log('Database connected 🤝');
        app.listen(3000);
        console.log('Server is running 🏃');
    }).catch((err) => {
        console.log(err.message + "🤷‍♂️");
    });


// app.use((req, res, next)=> {
//     console.log('Method: '+ req.method);
//     console.log('Path: '+ req.path);
//     console.log('Hostname: '+ req.hostname);
//     console.log('Url: '+ req.url);
//     next();
// })

// Instead of this whole code use Morgan middleware
// app.use(morgan('tiny'))


// For Changing default path to [yourFolderName] Folder
// app.set('views', 'pages');


//  Make static files public to browser
app.use(express.static(__dirname + '/node_modules/bootstrap/'));
app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('index', { title: "Home" })
})

app.use('/blogs', blogRoutes)

app.get('/about', (req, res) => {
    res.render('about', { title: "About Us" })
})

app.use((req, res, next) => {
    console.log('------------ Unity Hackers -------------');
    next()
})

app.get('/contact', (req, res) => {
    res.render('contact', { title: "Contact" })
})

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: "404" })
})