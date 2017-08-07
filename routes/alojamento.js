/**
 * Created by Bárbara on 12/07/2017.
 */

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('alojamento', { title: 'FireSQLGame' });
});
module.exports = router;
