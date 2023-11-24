function loadJSON (){
    let locations = document.getElementById('locations-container');
fetch('locations.json')
    .then(response => response.json())
    .then(data => {
        let htmlContent = '<main></main>';

        data.locations.forEach(locations => {
            htmlContent += '<div class="location-item">' + 
                    '<img src="' + locations.image_url +'" alt="' + location.name + '">' +
                    '<p>' + locations.model + '</p>' + 
                    '<p>' + locations.description + '</p>' + 
                    '<p>' + locations.price + '</p>' +
                    '<p>' + locations.agence + '</p>' +
                    '<button onclick="reserverEtPayer()">Réserver et Payer</button>'+
                    '</div>' +
                    
                    '</div>';
        });
        locations.innerHTML = htmlContent;
})
.catch(error => {
    console.error('Erreur de chargement JSON', error);
});

}
function reserverEtPayer(){
    console.log('Fonction de réservation et paiement appelée');
}
window.onload = loadJSON;