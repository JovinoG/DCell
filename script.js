document
  .getElementById("form-servico")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    alert(`Obrigado, ${nome}! Sua solicitação foi enviada com sucesso.`);
    this.reset();
  });
