var vector = new Array();
var resultado = 0;
calc();

function calc(){
  
  vector = populationVector();

  let exit_loop = false;
  let option;
  
  do{
    option = prompt("Digite uma das opções abaixo:\n 1-Adição\n 2-Subtração\n 3-Multiplicação\n 4-Divisão\n 5-Resto da divisão\n 6-Trabalhar com o Resultado\n 7-Mostrar os Termos\n 8-Digitar novamente os Termos\n 9-Substituir somente um Termo\n 10-Adicionar um Termo\n 0-Sair");
    
    switch(option){
      case "1":
        resultado = sum(vector);
        break;
      case "2":
        resultado = subtraction(vector);
        break;
      case "3":
        resultado = multiplication(vector);
        break;
      case "4":
        resultado = division(vector);
        break;
      case "5":
        restDivision(vector);
        break;
      case "6":
        resultado = calcResult(resultado);
        break;
      case "7":
        printVector(vector);
        break;
      case "8":
        vector = populationVector();
        break;
      case "9":
        vector = jutsuReplacement(vector);
        break;
      case "10":
        vector = addVector(vector);
        break;
      case "0":
        exit_loop = true;
        exit(0);
        break;
      default:
        alert("Opção não encontrada, digite o numero que corresponde a opção que deseja");
    }
  }while(exit_loop == false);
  
}


function sum(vector = new Array()){
  let result = 0;

  for(let i=0; i<vector.length; i++){
    result = result + vector[i];
  }

  alert("O resultado da adição foi: " + result);
  return result;
}

function subtraction(vector = new Array()){
  let result = vector[0];
  for(let i=1; i<vector.length; i++){
    result = result - vector[i];
  }
  alert("O resultado da subtração foi: " + result);
  return result;
}

function division(vector = new Array()){
  let result = vector[0];
  for(let i=1; i<vector.length; i++){
    if(vector[i] == 0){
      alert("Não é possivel dividir um numero por zero, pois isso tende ao infinito");
      exit(0);
    }else{
      result = result / vector[i];
    }
  }
  alert("O resultado da divisão foi: " + result);
  return result;
}

function multiplication(vector = new Array()){
  let result = vector[0];

  for(let i=1; i<vector.length; i++){
    result = result * vector[i];
  }

  alert("O resultado da multiplicação foi: " + result);
  return result;
}

function restDivision(vector = new Array()){
  let result;
  if(vector.length == 2){
    result = (vector[0] % vector[1]);
    alert("O resto do Quociente é: " + result);
  }else{
    alert("Para esse calculo é necessario ter dois termos de cada vez");
  }  
}

function printVector(vector = new Array()){
  alert(vector);
}

function jutsuReplacement(vector = new Array()){
  printVector(vector);
  let exit_loop = false;
  do{
    let numero = prompt("Digite o numero que deseja remover: ");
    
    numero = trocaVirgulaPonto(numero);

    try{
      numero = Number.parseFloat(numero)
    }catch(erro){
      alert("O seguinte erro foi encontrado: " + erro);
    }
    
    if(!Number.isNaN(numero)){
      if(vector.indexOf(numero)){
        vector.splice(vector.indexOf(numero), 1);
        exit_loop = true;
      }else{
        alert("Digite um numero que esteja no vetor");
        exit_loop = false;
      }
    }else{
      alert("Não é permitidos letras nem espaço");
      exit_loop = false;
    }
  }while(exit_loop == false);

  let option = "";
  let temp;
  exit_loop = false;
  
  do{
    option = prompt("Deseja adicionar um numero?\n 's' para sim e 'n' para não adicionar");
    if(option ==="s"){
      let x = prompt("Digite o numero:");
      
      x = trocaVirgulaPonto(x);

      try{
        temp = Number.parseFloat(x);
      }catch(erro){
        alert("Foi encontrado o seguinte erro: " + erro)
      }
      
      if(!Number.isNaN(temp)){
        vector.push(temp);
        exit_loop = true;
      }else{
        exit_loop = false;
        alert("Digite um numero")
      }
    }else if(option ==="n"){
      exit_loop = true;
    }else{
      alert("Opção não é encontrada");
    }
  }while (exit_loop == false) 
  
  return vector;
}

function calcResult(result){
  let temp, x, yesOrNo;
  let exit_loop = false;
  let exit_loop2 = false;
  
  if(!Number.isNaN(result)){
    do{
      let operator = termOperator();
      x = checkNumber();
      switch(operator){
        case "+":
          temp = result + x;
          alert(`resultado de ${result} + ${x} = ${temp}`);
          result = temp;
          break;
        case "-":
          temp = result - x;
          alert(`resultado de ${result} - ${x} = ${temp}`);
          result = temp;
          break;
        case "*":
          temp = result * x;
          alert(`resultado de ${result} x ${x} = ${temp}`);
          result = temp;
          break;
        case "/":
          temp = result / x;
          alert(`resultado de ${result} / ${x} = ${temp}`);
          result = temp;
          break;
        case "%":
          temp = result % x;
          alert(`resultado de ${result} % ${x} = ${temp}`);
          break
        default:
          alert("Operação não encontrada");
      }
      

      do{
        yesOrNo = prompt("Digite 's' para continuar ou 'n' para voltar ao menu principal");
        if(yesOrNo == "s"){
          exit_loop = false;
          exit_loop2 = true;
        }else if(yesOrNo == "n"){
          return temp;
        }else{
          alert("Digite uma das opções validas")
          exit_loop = false;
          exit_loop2 = false;
        }
      }while(exit_loop2 == false)
    }while(exit_loop == false);
  }else{
    alert("A variavel resultado não pode estar vazia");
  }
}

function trocaVirgulaPonto(numero){
  if(numero.includes(",")){
    numero = numero.replace(",", ".");
  }
  return numero;
}

function termOperator(){
  let exit_loop = false;
  
  do{

    let operator = prompt("Digite o operador: + - * / %"); 

    if(operator === "+" || operator === "-" || operator === "/" || operator === "*" || operator === "%"){
      exit_loop = true;
      return operator;
    }else{
      exit_loop = false;
      alert("Digite um dos termos Operadores:\n + para adição\n - para subtração\n / para divisão\n * para multiplicação\n % para divisão");
    }

  }while(exit_loop === false);  
}

function addVector(vector = new Array()){
  let numero = checkNumber();
  vector.push(numero);
  return vector;
}

function checkNumber(){
  let exit_loop = false;
  let numero;
  do{
    numero = prompt("Digite o numero:");
    numero = trocaVirgulaPonto(numero);
    
    try {
      numero = Number.parseFloat(numero);  
    } catch (error) {
      alert("O seguinte erro foi encontrado: " + error);
    }

    if(!Number.isNaN(numero)){
      exit_loop = true;
    }else{
      alert("Por favor digite um numero.");
      exit_loop = false;
    }
  }while(exit_loop == false);
  
  return numero;
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
  
  vector = new Array(n_loop);

  for(let i=0; i < n_loop; i++){
    let temp = prompt(`Digite o valor do ${i+1}° termo:`);
    let x;
    
    temp = trocaVirgulaPonto(temp);

    try{
      x = parseFloat(temp);
    }catch(error){
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


