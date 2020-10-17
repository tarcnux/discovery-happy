const Database = require('./database/db')
const salvarOrfanato = require('./database/salvarOrfanato')

module.exports = {
    index (req, res) {
        return res.render('index')
    },
    
    orfanato(req, res){
        return res.render('orfanato')
    },
    
    async orfanatos(req, res){
        try {
            const db = await Database;
            const orfanatos = await db.all('SELECT * FROM orfanatos')
            return res.render('orfanatos', { orfanatos })
        } catch (error) {
            console.log(error)
            return res.send('Erro no banco de dados')
        }
    },

    criarOrfanato(req, res){
        return res.render('criar-orfanato')
    },
}