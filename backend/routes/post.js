const express = require('express');

const Post = require('../models/post');
const router = express.Router();

router.post("", (req, res, next) => {
    const post = new Post({
      title: req.body.title,
      content: req.body.content
    });
    console.log('received post:' , post);
    post.save().then(createdPost => {
      res.status(201).json({
        message: "Posts added succesfully",
        postId: createdPost._id
      });
    });
  });
   
  router.delete("/:id", (req, res, next) => {
    Post.deleteOne({ _id: req.params.id }).then(result => {
      console.log(result);
      res.status(200).json({
        message: "Posts deleted succesfully"
      });
    })
  });
  
  router.put("/:id", (req, res, next) => {
    const post = new Post({
      _id: req.body.id,
      title: req.body.title,
      content: req.body.content
    });
    Post.updateOne({ _id: req.params.id }, post).then(result => {
      console.log(result);
      res.status(200).json({
        message: "Posts updated succesfully"
      });
    })
  });
  
  router.use("", (req, res, next) => {
    posts = [];
    Post.find().then(document => {
      res.status(200).json({
        message: "Posts fetched succesfully",
        posts: document
      });
    })
  });



  module.exports = router;