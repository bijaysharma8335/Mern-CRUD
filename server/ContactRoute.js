const router = require("express").Router();
const contact = require('./ContactController')


router.post("/add", contact.createContact);
// router.get("/");
// router.patch();
// router.delete();

module.exports = router;