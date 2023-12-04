const express = require('express');
const router = express.Router()
const blogController = require('../controllers/blogController');

router.get('/', blogController.home_get)

router.get('/create', blogController.create_get)

//  This first paramenter here should be same as value
//  of action attribute of form in HTML file
router.post('/create', blogController.create_post)

router.get('/:id', blogController.detail_get)

router.delete('/:id', blogController.blog_delete)

module.exports = router;