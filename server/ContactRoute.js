const router = require("express").Router();
const contact = require("./ContactController");

router.post("/add", contact.createContact);
router.get("/display", contact.displayContact);
router.patch("/update/:id", contact.editContact);
router.delete("/delete/:id", contact.deleteContact);

module.exports = router;
