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

router.get("/:id", (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((d) => d.id === id);
    if (!post) {
        const error = new Error(`A post with the id ${id} was not found`);
        error.status = 404;
        return next(error);
    } 
    else {
        res.status(200).send(post);
    }
})

router.post("/", (req, res, next) => {
    const newPost = {
        id: posts.length + 1,
        name: req.body.name,
        age: req.body.age
    };

    if (!newPost.age || !newPost.name) {
        const error = new Error(`Name or age was not provided.`);
        return next(error);
    }

    posts.push(newPost);
    res.status(201).send(posts);
})

router.put("/:id", (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post) {
        const error = new Error(`A post with the id ${id} was not found`);
        return next(error);
    }
    else {
        post.name = req.body.name;
        post.age = req.body.age;
        res.status(200).json(posts);
    }
});

router.delete("/:id", (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post) {
        const error = new Error(`A post with the id ${id} was not found`);
        return next(error);
    }
    var postDisplay = posts.filter((post) => post.id !== id);
    res.status(200).json(postDisplay);
})

export default router;