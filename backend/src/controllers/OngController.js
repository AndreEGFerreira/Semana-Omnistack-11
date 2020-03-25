const connection = require('../database/connections');
const crypto = require('crypto');  // para gerar id

module.exports = {
    async index(request, response){
        const ongs = await connection('ongs').select('*');

        return response.json(ongs);
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body; // aqui ele pega os parametros buscados no id

        const id = crypto.randomBytes(4).toString('HEX'); // gera id

        await connection('ongs').insert({
            id, 
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({ id });
    }
};