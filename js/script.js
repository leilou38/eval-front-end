fetch('json.js')
    .then(response => response.json())
    .then(data => {
        const location = data.locations;
        const carsLocation = document.getElementById('carsLocation');

        const ul = document.createElement('ul');
        location.forEach(location => {
            const li = document.createElement('li');
            li.textContent = '${location.picture} ${location.modele} - ${location.description} ${location.prix}';
            ul.appendChild(li);
        });

        carsLocation.appendChild(ul);
        })
        .catch(error => console.error('Erreur du chargement du JSON', error));
    