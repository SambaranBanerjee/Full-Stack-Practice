import express, { Router } from 'express';
import posts from '../data.json' with { type : "json"};
const router = express.Router();

router.get("/", (req,res) => {
    const limit = parseInt(req.query.limit);

    if (!isNaN(limit) && limit > 0) {
        res.status(200).send(posts.slice(0, limit));
    }
    else {
        res.status(200).send(posts);
    }
})

router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((d) => d.id === id);
    if (!post) {
        res.status(404).json({
            msg: `Post with the id of ${id} was not found`
        });
    } 
    else {
        res.status(200).send(post);
    }
})

router.post("/", (req,res) => {
    const newPost = {
        id: posts.length + 1,
        name: req.body.name,
        age: req.body.age
    };

    if (!newPost.age || !newPost.name) {
        return res.status(404).json({
            msg: "Name or age is not provided."
        })
    }

    posts.push(newPost);
    res.status(201).send(posts);
})

router.put("/:id", (req,res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post) {
        return res
            .status(404)
            .json({
                msg: `A post with the id ${id} was not found`
            });
    }
    else {
        post.name = req.body.name;
        post.age = req.body.age;
        res.status(200).json(posts);
    }
});

router.delete("/:id", (req,res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post) {
        return res
            .status(404)
            .json({
                msg: `A post with the id ${id} was not found`
            });
    }
    var postDisplay = posts.filter((post) => post.id !== id);
    res.status(200).json(postDisplay);
})

export default router;