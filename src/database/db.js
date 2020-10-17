const Database = require('sqlite-async')

function execute(db) {   
    return db.exec(`
        CREATE TABLE IF NOT EXISTS orfanatos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lat TEXT,
            lng TEXT,
            name TEXT,
            about TEXT,
            whatsapp TEXT,
            images TEXT,
            instructions TEXT,
            visit_time TEXT,
            open_on_weekends TEXT
        );
    `)
}

module.exports = Database.open(__dirname + '/database.sqlite').then(execute)