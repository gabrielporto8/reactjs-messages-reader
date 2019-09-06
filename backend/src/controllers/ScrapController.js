const Scrap = require('../models/Scrap');

module.exports = {

    async indexAll(req, res) {
        
        const result = await Scrap.find({});

        return res.json(result);
    },

    async store(req, res) {
        const { message } = req.body;

        const scrap = await Scrap.create({
            message
        });

        return res.json(scrap);
    }
}