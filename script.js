
// let operator = termOperator();
// alert("O operador escolhido foi: " + operator);
populationVector();

function termOperator(){
  let exit_loop = false;
  do{

    let operator = prompt("Digite o operador:"); 

    if(operator === "+" || operator === "-" || operator === "/" || operator === "*" || operator === "%"){
      exit_loop = true;
      return operator;
    }else{
      exit_loop = false;
      alert("Digite um dos termos Operadores:\n + para adição\n - para subtração\n / para divisão\n * para multiplicação\n % para divisão");
    }

  }while(exit_loop === false);  
}

function populationVector(){
  let exit_loop = false;
  let n_loop;
  do{
    try {
      n_loop = prompt("Digite a quantidade de operações a serem calculadas: ");
      n_loop = Number(n_loop);
      
      if(Number.isInteger(n_loop)){
        exit_loop = true;
      }else{
        alert("Por favor digite um numero inteiro: ");
        exit_loop = false;
      }  
    } catch (error) {
      alert("O seguinte erro foi encontrado: " + error);
    }
  }while(exit_loop === false);
  
  for(i=0; i < n_loop; i++){
    
  }
}