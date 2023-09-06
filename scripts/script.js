
//let operator = termOperator();

// let vector = new Array(); 
// vector = populationVector();

teste();

//calc(termOperator, vector);


// Função para descobrir qual operação o usuário quer
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
    let x;
    
    if(temp.includes(',')){
      temp = temp.replace(',', '.');
    }

    try{
      x = parseFloat(temp);
    }catch(erorr){
      alert("O seguinte erro foi encontrado: " + error);
      exit(0);
    }
    
    if(Number.isNaN(x)){
      i--;
      alert('Letras não são permitidas, digite um numero');
    }else{
      vector[i] = Number.parseFloat(temp);
    }  
  }

  return vector
}


function calc(operador, vector = new Array()){
  let result = 0;

  switch(operador){
    case "+":
      for(i=0; i<=vector.length; i++){
        result = result + vector[i];
      }

      alert("O Resultado do somatório é:", result);
    break;
    
    case "*":
      result = 1;
      for(i=0; i<=vector.length; i++){
        result = result * vector[i];
      }
      alert("O resultado da multiplicação é: ", result);
    break;
    
    case "-":
      result = vector[0];
      for(i=1;i<=vector.length;i++){
        result= result - vector[i];
      }
      alert("O resultado da subtração é: ", result);
    break;
    
    case "/":
      result = vector[0];
      for(i=1; i<=vector.length; i++){
        if(vector[i] == 0){
          alert("Não é possivel fazer uma divisão de um numero por zero, pois o seu resultado tende ao infinito");
          exit(0);
        }else{
          result = result / vector[i];
        }
      }
      alert("O resultado da divisão é: ", result);
    
    break;
    
    case "%":
      if(vector.length == 2){
        alert("O resto da divisão é: ", vector[0] % vector[1]);
      }else{
        alert("Só e possivel calcular essa função com 2 termos");
      }
    break;
    
    case 'sair':

    default:
      alert("Opção não encontrada.");
  }
}

//função para testar logicas e ver se esta funcionando 
function teste(){
  let temp = prompt("Digite um numero:");
  if(temp.includes(',')){
    temp = temp.replace(',', '.');
    console.log(temp);
  }else{
    console.log('entrou no else');
  }
}