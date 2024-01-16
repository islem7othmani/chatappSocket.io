const chat = require("../models/chatmodel");

const createChat = async (req, res) => {
	const newChat = new chat({
		sender: req.body.sender,
		room: req.body.room,
		content: req.body.content,
	});
	try {
		const savedChat = await newChat.save();
		return res.status(201).json(savedChat);
	} catch (err) {
		return res.status(500).json(err);
	}
};

/*const getProducts = async (req, res) => {
	try {
		const products = await chat.find().populate("category");
		return res.status(200).json(products);
	} catch (err) {
		return res.status(500).json(err);
	}
};
const getProductsByCategory = async (req, res) => {
	const category = req.params.categoryId;
	try {
		const products = await chat
			.find({ category: category })
			.populate("category");
		return res.status(200).json(products);
	} catch (err) {
		return res.status(500).json(err);
	}
};*/
const getChat = async (req, res) => {
	const id = req.params.chatId;
	try {
		const chatt = await chat.findById(id);
		return res.status(200).json(chatt);
	} catch (err) {
		return res.status(500).json(err);
	}
};

const deleteChat = async (req, res) => {
	const id = req.params.chatId;
	try {
		const chatt = await chat.findByIdAndDelete(id);
		return res.status(200).json(chatt);
	} catch (err) {
		return res.status(500).json(err);
	}
};
const updateChat = async (req, res) => {
	const id = req.params.chatId;
	try {
		const chatt = await chat.findByIdAndUpdate(id, req.body, {
			new: true,
		});
		return res.status(200).json(chatt);
	} catch (err) {
		return res.status(500).json(err);
	}
};
module.exports.getChat = getChat;
module.exports.createChat = createChat;
module.exports.deleteChat = deleteChat;
module.exports.updateChat = updateChat;

