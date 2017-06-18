// https://ykloveyxk.github.io/2017/03/21/vue-login-%E9%80%9A%E8%BF%87%E4%B8%80%E4%B8%AA%E9%A1%B9%E7%9B%AE%E5%B8%A6%E4%BD%A0%E8%B5%B0%E8%BF%9Bvue%E5%85%A8%E6%A0%88%E5%BC%80%E5%8F%91/
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const favicon = require('serve-favicon')
const logger = require('morgan')
const routes = require('./server/routes/user.js')
const config = require('config-lite')
const compression = require('compression')
const app = express()


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(compression({ threshold: 0 }))
app.use('/api', routes)

app.use(function (req, res, next) {
	var err = new Error('This page not found');
	err.status = 404;
	next(err)
})

app.listen(3000, function () {
	console.log(`Server running in port ${config.port}`)
})
