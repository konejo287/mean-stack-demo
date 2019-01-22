const express = require('express');
const app = express();

app.use("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "1",
      title: "First server-side post",
      content: "1 content comming from the server"
    },
    {
      id: "2",
      title: "second server-side post",
      content: "2 content comming from the server"
    },
    {
      id: "3",
      title: "second server-side post",
      content: "3 content comming from the server"
    }
  ];
  res.status(200).json({
    message: "Posts fetched succesfully",
    posts: posts
  });
});

module.exports = app;
