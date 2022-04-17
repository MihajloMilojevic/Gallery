const Errors = require("../errors");
const StatusCodes = require("http-status-codes");
const Post = require("../models/postModel");
const  path= require("path");

const createPost = async (req, res) => {
	const image = req.files.image;
	const post = await Post.create(req.body);
	const splitImageName = image.name.split(".");
	const imageExtension = splitImageName[splitImageName.length - 1];
	const imageName = post._id + "." + imageExtension;
	const imagePath = path.join(__dirname, "../public/uploads", imageName);
	post.image = imageName;
	await image.mv(imagePath);
	await post.save();
	res.redirect(req.headers.origin);
	// res.status(StatusCodes.CREATED).json({ok: true, post});
}

const getPosts = async (req, res) => {
	const LIMIT = 1;
	const page = req.query.page || 1;
	const skip = (page - 1) * LIMIT
	const posts = await Post.find({})
		.sort({
			createdAt: -1
		})
		.skip(skip)
		.limit(LIMIT)
	const totalPosts = await Post.count({});
	const totalPages = Math.ceil(totalPosts / LIMIT);
	// setTimeout(() => {
	// 	res.json({ok: true, count: posts.length, posts, totalPages, totalPosts});
	// }, 10000);
	res.json({ok: true, count: posts.length, posts, totalPages, totalPosts});
}

module.exports = {
	createPost,
	getPosts
}