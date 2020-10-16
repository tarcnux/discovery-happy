//Desabilitando opções de Zoom
const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// SENAI Brusque -27.1156927,-48.9123907
const map = L.map('mapid', options).setView([-27.1156927,-48.9123907], 17);

//Mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);

//Criar ícone
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170,2]
})


//Marcação no Mapa
L.marker([-27.1156927,-48.9123907], {icon}).addTo(map);


//Galeria de imagens
function selectImage(event) {
    const button = event.currentTarget;

    //Remover todas as classes .active
    const buttons = document.querySelectorAll('.images button');
    buttons.forEach((button) => {
        button.classList.remove('active');
    })

    //Selecionar a imagem clicada
    const image = button.children[0];
    const imageContainer = document.querySelector('.orfanato-details > img');

    //Atualizar o container de imagem
    imageContainer.src = image.src;

    //Adicionar a classe active no botão clicado
    button.classList.add('active');
}