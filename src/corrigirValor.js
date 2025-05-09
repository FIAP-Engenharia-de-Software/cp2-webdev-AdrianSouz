// ## Corrigir Valor Numérico **(1 ponto)**

// **Enunciado:**

// Crie a função corrigirValor, que recebe um valor e tenta convertê-lo para número. Se não for possível, retorne `"Valor inválido"`.

function corrigirValor(valor) {
  valorNum = parseInt(valor) || "x"
  console.log(typeof(valorNum))
  if(typeof(valorNum) == "number"){
    return valorNum
  }else if(typeof(valorNum) == "string"||valorNum == "x"){
    return "Valor inválido"
  }
}

//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { corrigirValor };