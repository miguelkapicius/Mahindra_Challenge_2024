import { Post } from "../models/postModel.js";

export const getPosts = async (req, res) => {
    const posts = await Post.find().populate("author", "image_url username");
    return res.send(posts);
};

export const createPost = async (req, res) => {
    const post = new Post({
        author: req.body.author,
        content: req.body.content,
    });
    await post.save().then(() => res.send("Post Created"));
};

export const updateLikes = async (req, res) => {
    const userId = req.body.userId; // ID do usuário que está dando o like
    const postId = req.params.id;

    try {
        // Encontra o post
        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).send({ message: "Post not found" });
        }

        // Verifica se o usuário já deu like
        if (post.likedBy.includes(userId)) {
            return res
                .status(400)
                .send({ message: "User already liked this post" });
        }

        // Incrementa o campo 'likes' e adiciona o usuário ao array likedBy
        post.likes += 1;
        post.likedBy.push(userId);
        const updatedPost = await post.save();

        return res.status(200).send(updatedPost);
    } catch (error) {
        return res.status(500).send({ message: "Error updating likes", error });
    }
};

export const deletePost = async (req, res) => {
    await Post.findByIdAndDelete(req.params.id);
    return res.send("Post Deleted!");
};
