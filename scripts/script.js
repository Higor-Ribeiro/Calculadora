const botoes = document.querySelectorAll("section div");
const resultado = document.getElementById("resultado");
let valorAtual = "";

botoes.forEach(b => {
  b.addEventListener("click", () => {
    const valorClicado = b.textContent;

    if (valorClicado === "=") {
      try {
        let expressao = valorAtual.replace(/x/g, "*").replace(/,/g, ".");
        valorAtual = eval(expressao);
      } catch {
        valorAtual = "Erro";
      }
    } else if (valorClicado === "C") {
      valorAtual = "";
    } else if (valorClicado === "<") {
    valorAtual = valorAtual.slice(0, -1);
    }

    else {
      if (valorAtual.length < 23) {
        valorAtual += valorClicado;
      }
    }

    resultado.textContent = valorAtual || "0";
  });
});
