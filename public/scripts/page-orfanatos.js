// SENAI Brusque -27.1156927,-48.9123907
//                                     lat       long         zoom
const map = L.map('mapid').setView([-27.1156927,-48.9123907], 17);

//Mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
{
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//Marcação no Mapa
L.marker([-27.1156927,-48.9123907]).addTo(map)
    .bindPopup('SENAI de Brusque/SC')
    .openPopup();