const connection = require('../database/connection');

module.exports = {
    async index(req, res){
        const {page = 1, size = 5} = req.query;

        const [count] = await connection('contatos').count();
        const contatos = await connection('contatos')
            .limit(size)
            .offset((page -1) * size)
            .select('*');
        res.header('X-Total-Count', count['count(*)']);
        return res.json(contatos);
    },
    async create(req, res){
        const {nome, canal, valor, obs} = req.body;
        const [id] = await connection('contatos').insert({
            nome,
            canal,
            valor,
            obs
        });

        return res.json(id);
    },
    async getContato(req, res){
        const {id} = req.params;
        const contato = await connection('contatos')
            .where('id', id)
            .select('*');

        return res.json(contato);
    },
    async alterContato(req, res){
        const {id} = req.params;
        const {nome, canal, valor, obs} = req.body;
        const alterado = await connection('contatos')
            .where('id', id)
            .update({
                nome,
                canal,
                valor,
                obs
            });

        return res.json(alterado);
    },
    async deleteContato(req, res){
        const {id} = req.params;
        const contato = await connection('contatos')
            .where('id', id)
            .delete();
        return res.status(204).send();
    },

}