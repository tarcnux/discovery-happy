const Database = require('./db')
const salvarOrfanato = require('./salvarOrfanato')

Database.then( async db => {
    //inserir dados na tabela
    
    /*await salvarOrfanato(db, {
        lat: '-27.1156927',
        lng: '-48.9123907',
        name: 'Orfanato Alpha',
        about: 'Presta assitência à crianças Alpha',
        whatsapp: '(47) 99999-8888',
        images: [
            'https://images.unsplash.com/photo-1600711724779-c039d7410ceb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
            'https://images.unsplash.com/photo-1598252976330-b8a1461d47a7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9'
        ].toString(),
        instructions: 'Venha com amor, se sinta à vontade e traga muita esperança para distribuir.',
        visit_time: 'Horário de visitas das 8h às 18h',
        open_on_weekends: '0'
    })*/
    /*
    await salvarOrfanato(db, {
        lat: '-27.116007986004067', 
        lng: '-48.909469842910774',
        name: 'Orfanato Beta',
        about: 'Presta assitência à crianças Beta',
        whatsapp: '(47) 12345-6789',
        images: [
            'https://images.unsplash.com/photo-1600711724779-c039d7410ceb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
            'https://images.unsplash.com/photo-1598252976330-b8a1461d47a7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9'
        ].toString(),
        instructions: 'Venha com amor, se sinta à vontade e traga muita esperança para distribuir.',
        visit_time: 'Horário de visitas das 10h às 15h',
        open_on_weekends: '1'
    })*/
    
    //Consultar dados na tabela

    const orfanatosSelecionados = await db.all('SELECT * FROM orfanatos')
    console.log(orfanatosSelecionados);

    /*const orfanatoSelcionado = await db.all('SELECT * FROM orfanatos WHERE id = 1')
    console.log(orfanatoSelcionado)*/

    //Deltar um registro
    //console.log(await db.run("DELETE FROM orfanatos WHERE id = 1"))
})