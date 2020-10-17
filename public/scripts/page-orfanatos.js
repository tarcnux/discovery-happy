// SENAI Brusque -27.1156927,-48.9123907
//                                     lat       long         zoom
const map = L.map('mapid').setView([-27.1156927,-48.9123907], 17);

//Mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);

//Criar ícone
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170,2]
})

function addMarker({id, name, lat, lng}) {

    //Criar popup overley
    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240
    }).setContent(`${name}<a href="/orfanato/?id=${id}"> \
    <img src="/images/arrow-white.svg"></a>`)

    //Marcação no Mapa
    L.marker([lat,lng], {icon}).addTo(map)
        .bindPopup(popup);
}

const orfanatosSpan = document.querySelectorAll('.orfanatosSpan span')
orfanatosSpan.forEach(span => {
    const orfanato = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }
    addMarker(orfanato)
})