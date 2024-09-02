const express = require("express");
const router = express.Router();
const User =require ('../models/user.model');
const {getUserDetails} = require('../controller/user.js');


 router.get('/',getUserDetails);
  
//   router.get('/:id',async (req, res)=>{
//     try {
//       const {id} = req.params;
//       const user = await User.findById(id);
//       res.status(200).json(user);
//     } catch (error) {
//       res.status(500).json({message:error.message});
  
//     }
//   });
  
//   router.put('/:id',async (req, res)=>{
//     try {
//       const {id } = req.params;
//       const user = await User.findByIdAndUpdate(id, req.body);
//       if (!user){
//         res.status(404).json({message:"user not found"});
//       }
//       const updateduserDetails = await User.findById(id);
//       res.status(200).json(updateduserDetails);
//     } catch (error) {
//       res.status(500).json({message:error.message});
      
//     }
//   })
  
//   router.delete('/:id',async(req,res)=>{
//     try {
//       const {id} = req.params;
//       const user = await User.findByIdAndDelete(id);
//       if(!user){
//         res.status(404).json({message:"User not found"});
//       }
//       res.status(200).json({message:"user deleted successfully"});
//     } catch (error) {
//       res.status(500).json({message:error.message});
      
//     }
//   })
  
//   router.post('/', async (req,res) => {
//    try {
//         const user = await User.create(req.body);
//         res.status(200).json(user);
    
//    } catch (error) {
//   res.status(500).json({message:error.message});  
//    }
//   });

module.exports = router;