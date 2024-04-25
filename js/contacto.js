//copiar correo en portapapeles
document.addEventListener("DOMContentLoaded", function() {
    var contactLink = document.getElementById("contactLink");
    var contactIcon = document.getElementById("contactIcon");

    if (contactLink && contactIcon) {
        // Agrega evento de clic al texto
        contactIcon.parentNode.addEventListener("click", function() {
            copyToClipboard(contactLink.href);
        });
    }
});

function copyToClipboard(text) {
    var textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    var successMessage = "Copiado al portapapeles con éxito: " + text;
    alert(successMessage);
}
