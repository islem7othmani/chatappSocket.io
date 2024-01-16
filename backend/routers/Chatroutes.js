const {
	createChat,
	getChat,
	deleteChat,
	updateChat,
} = require("../controllers/chatControllers");

const router = require("express").Router();

router.post("/", createChat);
router.get("/:chatId", getChat);
router.delete("/:chatId", deleteChat);
router.put("/:chatId", updateChat);
module.exports = router;