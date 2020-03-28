const express=require('express');
const router=express.Router();
const Post=require('../../models/Post');
//get
router.get('/',(req,res,next)=>{
    Post.find().then((posts)=>{
        res.json(posts)
    }).catch(err=>Console.log(err));
})
//post
router.post('/add',(req,res,next)=>{
const title=req.body.title
const body=req.body.body
newPost=new Post({
    title:title,
    body:body
})
newPost.save().then((posts)=>{
    res.json(posts)
}).catch(err=>Console.log(err));
})
//update
router.put('/update/:id',(req,res,next)=>{
    let id=req.params.id;
    Post.findById(id).then(post=>{
         post.title=req.body.title;
         post.body=req.body.body;
         post.save().then((post)=>{
             res.send({message:"post updated successfully",status:"success",post:post})
         }).catch(err=>Console.log(err));
    }).catch(err=>console.log(err));
})
//delete
router.delete('/:id',(req,res,next)=>{
    let id=req.params.id;
    Post.findById(id).then(post=>{
         post.title=req.body.title;
         post.body=req.body.body;
         post.delete().then((post)=>{
             res.send({message:"post deleted successfully",status:"success",post:post})
         }).catch(err=>Console.log(err));
    }).catch(err=>console.log(err)); 
})
module.exports=router;