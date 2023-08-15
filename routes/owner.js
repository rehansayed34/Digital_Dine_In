const router = require("express").Router();
const { Owner, validate } = require("../models/owners");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const owner = await Owner.findOne({ email: req.body.email });
		if (owner)
			return res
				.status(409)
				.send({ message: "Owner with given email already Exist!" });

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		await new Owner({ ...req.body, password: hashPassword }).save();
		res.status(201).send({ message: "Owner created successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

module.exports = router;