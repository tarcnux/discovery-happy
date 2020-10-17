const Database = require('./db')

Database.then( async db => {
    //inserir dados na tabela
    
    await db.run(`
        INSERT into orfanatos (
            lat,
            lng,
            name,
            about,
            whatsapp,
            images,
            instructions,
            visite_time,
            open_on_weekends
        ) VALUES (
            '-27.1156927',
            '-48.9123907',
            'Orfanato Alpha',
            'Presta assitência à crianças Alpha',
            '(47) 99999-8888',
            'https://images.unsplash.com/photo-1600711724779-c039d7410ceb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
            'Venha com amor, se sinta à vontade e traga muita esperança para distribuir.',
            'Horário de visitas das 10h às 15h',
            '1'
        )
    `)
    
    //Consultar dados na tabela

    const orfanatosSelecionados = await db.all('SELECT * FROM orfanatos')
    console.log(orfanatosSelecionados);

    const orfanatoSelcionado = await db.all('SELECT * FROM orfanatos WHERE id = 1')
    console.log(orfanatoSelcionado)
})