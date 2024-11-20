// Função para lidar com o envio do formulário
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio tradicional do formulário

    // Exibe a mensagem de agradecimento
    document.getElementById("thank-you-message").style.display = "block";

    // Limpa os campos do formulário
    document.getElementById("contact-form").reset();
});
