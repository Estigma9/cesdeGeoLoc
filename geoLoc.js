
function showUserPosition(map, marker){
    let userLocation = window.navigator.geolocation;

    if (userLocation) {
        userLocation.getCurrentPosition(({coords: {latitude, longitude}})=>{
            const coords = {
                lat: latitude,
                lng: longitude
            };

            map.setCenter(coords);
            map.setZoom(8);
            marker.setPosition(coords);
        }, ()=>{
            alert('Tu navegador está bien, pero ocurrio un error');
        });
    
    } else {
        alert('Tu navegador no tiene GEOLOCALIZACIÓN. Actualiza tu navegador, carcater U');   
    };
};


function initMap(){
    const argCoords = {lat: 45.58, lng: 11.71};
    const map = new google.maps.Map(mapDiv, {
        center: argCoords,
        zoom: 6        
    });

    const marker = new google.maps.Marker({
        position: argCoords,
        map: map
    });

    button.addEventListener('click', ()=>{
        showUserPosition(map, marker)
    });
};

