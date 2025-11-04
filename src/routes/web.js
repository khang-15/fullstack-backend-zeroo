const express = require('express');
const { getHomepage, getABC, getHoiDanIt, postCreateUser } = require('../controllers/homeController')
const router = express.Router();


// router.method('/router', handle)
router.get('/', getHomepage);
router.get('/abc', getABC);
router.get('/hoidanit', getHoiDanIt);
// router.get('/creater', getCreaterPage);
router.post('/creater-user', postCreateUser);

module.exports = router;