const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
	async index(req, res) {
		const ongs = await connection('ongs').select('*');

		return res.status(200).json(ongs);
	},

	async create(req, res) {
		const { name, email, whatsapp, city, uf } = req.body;

		const id = crypto.randomBytes(4).toString('HEX');

		//console.log(data);
		try {
			await connection('ongs').insert({
				id,
				name,
				email,
				whatsapp,
				city,
				uf,
			});
		} catch (error) {
			console.log(error);
			return res.status(500).json({ serverError: error });
		}

		return res.status(200).json({ id });
	},
};
