const Database = require('./database/db')
const salvarOrfanato = require('./database/salvarOrfanato')

module.exports = {
    index (req, res) {
        return res.render('index')
    },
    
    async orfanato(req, res){
        const id = req.query.id
        try {
            const db = await Database
            const results = await db.all(`SELECT * FROM ORFANATOS WHERE id = ${id}`)
            const orfanato = results[0]

            orfanato.images = orfanato.images.split(',')
            orfanato.firstImage = orfanato.images[0]

            if(orfanato.open_on_weekends == '0') orfanato.open_on_weekends = false
            else orfanato.open_on_weekends = true

            return res.render('orfanato', {orfanato})
        } catch (error) {
            console.log(error)
            return res.send('Erro no banco de dados: rota orfanato')
        }
    },
    
    async orfanatos(req, res){
        try {
            const db = await Database;
            const orfanatos = await db.all('SELECT * FROM orfanatos')
            return res.render('orfanatos', { orfanatos })
        } catch (error) {
            console.log(error)
            return res.send('Erro no banco de dados: rota orfanatos')
        }
    },

    criarOrfanato(req, res){
        return res.render('criar-orfanato')
    },
}