const mongoose = require("mongoose")

var userSchema = new mongoose.Schema({
firstname:{
  type: String,
},
lastname:{
  type: String
},
email:{
  type:String
},
password:{
  type:String
}
})

var User = mongoose.model("User",userSchema)
exports.User = User;