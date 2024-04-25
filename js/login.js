document.addEventListener("DOMContentLoaded", function() {
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const btn = document.getElementById('submitBtn');

    // Evento clic en el botón
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const datos = {
            datauser: username.value,
            dataspw: password.value
        };
        console.log(datos);
        // Aquí puedes agregar la lógica para enviar el formulario a través de AJAX o cualquier otro método de envío
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const redirectLink = document.getElementById("redirectLink");

    // Evento envío del formulario
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente

        // Aquí puedes agregar la lógica para enviar el formulario a través de AJAX o simplemente proceder con la redirección
        // En este ejemplo, simplemente mostraremos el enlace y redireccionaremos después de un breve retraso
        redirectLink.style.display = "block";

        // Simulando un breve retraso antes de redireccionar (puedes quitar esto en tu código real)
        setTimeout(function() {
            window.location.href = redirectLink.href;
        }, 2000); // Redirige después de 0.7 segundos (700 milisegundos)
    });
});







