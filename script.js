
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
  
  let vector = new Array(n_loop);

  for(let i=0; i < n_loop; i++){
    let temp = prompt(`Digite o valor do ${i+1}:`);
    // let x, y;
    
    // try{
    //   x = parseInt(temp);
    //   y = parseFloat(temp);  
    // }catch(erorr){
    //   alert("O seguinte erro foi encontrado: " + error);
    // }

    if(Number.parseInt(temp) === NaN || Number.parseFloat(temp) === NaN 
    || temp.includes(',') === true || temp === undefined || temp === ""){
      i--;
      alert('Por favor digite numeros inteiros ou numros quebrados com o ponto ex: "3.2"');
    }else{
      vector[i] = Number.parseFloat(temp);
    }  
  }
  console.log(vector);
}


function teste(){
  let valor = prompt("Digite um numero:");
  console.log(valor.includes(','));
}