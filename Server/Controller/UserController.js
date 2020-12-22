const express = require("express")
const { User } = require("../../Server/Model/User");
const _ = require("lodash");
const Key = require("../config").secret
const jwt = require ("jsonwebtoken");
const bcrypt = require("bcryptjs")


/////////////////Regiiiister//////////////////

module.exports ={
    register: async (req, res) => {
      try{
        const user = new User(
          _.pick(req.body, [
          "firstname",
          "lastname",
          "email",
          "password"
          ])
        );
                          
        bcrypt.genSalt(10,async(err , salt)=>{
          bcrypt.hash(user.password , salt , async(err , hash)=>{
              if(err) throw err;
             user.password= hash
            console.log(hash);
            
          })
      })
      user.password==bcrypt.hash;
     res.status(200).json(user);
     user.save();
     console.log(user);
     
      }catch(e){
        res.status(400).json({e})
      }

      },
      
      //////////////////Logiiiiiiin////////////////
      
      login : async(req, res) =>{
          //validation mail//
          const user = await User.findOne({email : req.body.email})
          if(!user) return res.status(400).json("email invalid")
           
          if (user.password=req.body.password){
            const payload={
              id : user._id,
              firstname : user.firstname,
              lastname : user.lastname,
              email : user.email,
              password :user.password
          };
  const Token = jwt.sign(payload,Key,{expiresIn:1200000})
  return res.status(200).json({token : Token, payload}) 
          }else{
            return res.status(400).json("password invalid");
            
          }
          
          /*
        //Validation Password//  
          const validPassword=await bcrypt.compare(
              req.body.password,
              user.password
          );

          if (!validPassword){
              return res.status(400).json("invalide password");
          }*/

          
      },
    

}

