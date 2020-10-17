
function salvarOrfanato(db, orfanato) {
    ({
        lat,
        lng,
        name,
        about,
        whatsapp,
        images,
        instructions,
        visit_time,
        open_on_weekends
    } = orfanato)
    return db.run(`
    INSERT into orfanatos (
        lat,
        lng,
        name,
        about,
        whatsapp,
        images,
        instructions,
        visit_time,
        open_on_weekends
    ) VALUES (
        "${lat}",
        "${lng}",
        "${name}",
        "${about}",
        "${whatsapp}",
        "${images}",
        "${instructions}",
        "${visit_time}",
        "${open_on_weekends}"
    )
`)
}

module.exports = salvarOrfanato