// ### Calculadora Simples (2 pontos)

// **Enunciado:**

// Crie uma função chamada Calcular, que recebe dois números e uma operação matemática (`+`, `-`, `*`, `/`). A função deve:

// - Retornar `"Erro: parâmetros inválidos"` se `a` ou `b` não forem números.
// - Retornar `"Erro: divisão por zero"` se tentar dividir por zero;
// - Retornar `"Erro: operação inválida"` se for passado um operador desconhecido;
// - Executar a operação correta e retornar o resultado;

function calcular(num1, num2, operador) {
  console.log(typeof(num1))
  if(typeof(num1)=== "string"||typeof(num2)=== "string"){
    return "Erro: parâmetros inválidos"
  }
   if(typeof(num1) != "number" && typeof(num2) != "number"){
    return "Erro: parâmetros inválidos"
   }
   if(num1 == 0 || num2 == 0 ){
    return "Erro: divisão por zero"
   }
   
    if((operador ==="+")){
      return num1 + num2
    }else if(operador ==="-"){
      return num1 - num2
    }else if(operador ==="*"){
      return num1 * num2
    }else if(operador ==="/"){
      return num1/num2
    }else{return "Erro: operação inválida"}
   
}


//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcular };