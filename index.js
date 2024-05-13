$(function () {
    $('#output').hide();
    $('form').submit(function () {
        $('#output').show();
        event.preventDefault();
        const API_KEY = 'bc1087b75046410087041810240705';
        
        var cityInput = $('#ciudad').val();
        console.log(cityInput)

        //var city = 'santiago';
        
        const REQ = new XMLHttpRequest();

        REQ.addEventListener('load', (datos) => {
            console.log('Datos Recibidos');
            const DATA = JSON.parse(datos.currentTarget.response);
            const LOCATION = DATA.location;
            const CURRENT = DATA.current;
            console.log(LOCATION)
            console.log(REQ.status);
            console.log(REQ.statusText);
            if(REQ.status == 400){
                $('#output').html(
                    `<p class="fw-bold text-white">No hemos encontrado datos</p>
                    <img src="img/nofound.webp" width="25%">`
                );
            }else{
                $('#output').html(
                    `<p class="fs-1 ">${LOCATION.name}</p>
                    <p class="fs-4">Pais: ${LOCATION.country}</p>
                    <img src="${CURRENT.condition.icon}" width="25%">
                    <p class="fs-4">${CURRENT.temp_c}°C</p>
                    <p class="fs-5">condicion: ${CURRENT.condition.text}</p>
                    <p>actualizado al  ${CURRENT.last_updated}</p> `
                )
            }
        });
        
        REQ.addEventListener('error', (event) => {
            console.log(event);
            console.log("Error en la busqueda");
            $('#output').html(
                `<p class="fw-bold text-black">No hemos encontrado datos</p>
                <img src="img/nofound.png" width="25%">`
            );
        });
    
        REQ.open('GET', `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityInput}`);
        
        REQ.send();
    }) 
})