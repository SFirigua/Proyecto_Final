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

