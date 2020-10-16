// SENAI Brusque -27.1156927,-48.9123907
//                                     lat       long         zoom
const map = L.map('mapid').setView([-27.1156927,-48.9123907], 17);

//Mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);

//Criar ícone
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]    
})


//Marcação no Mapa
//L.marker([-27.1156927,-48.9123907], {icon}).addTo(map);
let marker;

//Criar e adicionar marca
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;
    
    //remove icon before add new one
    marker && map.removeLayer(marker);
    
    // add icon at Lat n' Lng
    marker = L.marker([lat, lng], {icon}).addTo(map);
})

//Adicionar o campo de fotos
function addPhotoField(){
    //Pegar o container de fotos #images
    const container = document.querySelector('#images');
    //Pegar o container para ser duplicado .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload');

    //Realizar o clone da última imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);

    //Verificar se o campo está vazio, se sim, não adicionar ao container de imagens
    const input = newFieldContainer.children[0];
    if(input.value == "") return

    //Limpar o valor
    input.value = "";

    //Adicionar o clone ao container de imagens #images
    container.appendChild(newFieldContainer);

}

//Remover o campo de fotos
function deleteField(event) {
    const span = event.currentTarget;
    const fieldsContainer = document.querySelectorAll('.new-upload');

    if(fieldsContainer.length < 2){
        //limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    } 

    //deletar o campo
    span.parentNode.remove();
}