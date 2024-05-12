$(function () {
    $('#button').click(function () {
        event.preventDefault();
        var nombre = ($('#nombre').val()).toLowerCase();
        var edad = $('#edad').val();
        var annio = 2024 - parseInt(edad);
        console.log(`Hola ${nombre}, tienes ${edad} años!!! `);
        console.log(`Naciste el ${annio}`);
        $('#resultado').html(`<p>Hola ${nombre}, tienes ${edad} años!!!</p>
                        <p>Naciste el ${annio}</p>`);
    }) 
})