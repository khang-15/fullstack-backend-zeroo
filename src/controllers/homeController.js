const connection = require('../config/database');
// const { getABC, getHoiDanIt, getHomepage, postCreateUser } = require('../controllers/homeController');

const getHomepage = (req, res) => {
    res.render('home.ejs')
}

const getABC = (req, res) => {
    res.render('Check abc')
}

const getHoiDanIt = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = (req, res) => {
    res.send('Create a new user')
}

module.exports = {
    getABC, getHoiDanIt, getHomepage, postCreateUser
};