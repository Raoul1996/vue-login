const mongoose = require('mongoose')
const config = require('config-lite')

// mongodb 连接🔗
let links = 'mongodb://123.207.252.230:12345/test'
mongoose.connect(links)
// 此处防止 node.js - Mongoose: mpromise 错误
mongoose.Promise = global.Promise
let db = mongoose.connection
db.on('error', console.error.bind(console, 'Connect error'))
db.once('open', function () {
  console.log('Mongodb started successfully')
})


let userSchema = mongoose.Schema({
  email: String,
  password: String,
  recheck: String,
  token: String,
  create_time: Date
})

let model = {
  // 在此处扩展 model，例如：
  // Article: mongoose.model('Article', articleSchema),
  User: mongoose.model('User', userSchema)
}

module.exports = model
