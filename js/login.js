//login
document.addEventListener("DOMContentLoaded", function() {
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const btn = document.getElementById('submitBtn');
    const redirectLink = document.getElementById('redirectLink');

    // Evento clic en el botón
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const datos = {
            datauser: username.value,
            dataspw: password.value
        };
        console.log(datos);
        // Simulación de inicio de sesión exitoso
        setTimeout(function() {
            // Muestra la alerta de inicio de sesión
            alert("Se inició sesión correctamente");
            // Redirige a la página anterior después de 3 segundos
            setTimeout(function() {
                redirectLink.click();
            }, 3000);
        }, 1000); // Simula un inicio de sesión exitoso después de 1 segundo
    });
});

