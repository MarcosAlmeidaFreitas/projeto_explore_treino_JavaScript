var vector = new Array();
var result = 0;
calc();

function calc(){
  
  vector = populationVector();

  let exit_loop = false;
  let option;
  
  do{
    option = prompt("Digite uma das opções abaixo:\n 1-Adição\n 2-Subtração\n 3-Multiplicação\n 4-Divisão\n 5-Resto da divisão\n 6-Mostrar os termos\n 7-Digitar os Termos Novamente\n 8-Substituir um Termo\n 9-Sair");
    
    switch(option){
      case "1":
        result = sum(vector);
        break;
      case "2":
        result = subtraction(vector);
        break;
      case "3":
        result = multiplication(vector);
        break;
      case "4":
        result = division(vector);
        break;
      case "5":
        result = restDivision(vector);
        break;
      case "6":
        result = calcResult(result);
        alert("O resultado ")
        break;
      case "7":
        printVector(vector);
        break;
      case "9":
        populationVector();
        break;
      case "9":
        jutsuReplacement(vector);
        break;
      case "0":
        exit_loop = true;
        break;
      default:
        alert("Opção não encontrada, digite o numero que corresponde a opção que deseja");
    }
  }while(exit_loop == false);
}


function sum(vector = new Array()){
  let result = 0;
  alert(vector);

  for(let i=0; i<vector.length; i++){
    result = result + vector[i];
  }
  alert("O resultado da adição foi: " + result);
  return result;
}

function subtraction(vector = new Array()){
  let result = vector[0];
  for(let i=1; i<=vector.length; i++){
    result = result - vector[i];
  }
  alert("O resultado da subtração foi: " + result);
  return result;
}

function division(vector = new Array()){
  result = vector[0];
  for(let i=1; i<=length; i++){
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
  let result = 1;
  for(let i=0; i<=length; i++){
    result = result * vector[i];
  }
  alert("O resultado da multiplicação foi: " + result);
  return result;
}

function restDivision(vector = new Array()){
  if(vector.length <= 1){
    return (vector[0] % vector[1]);
  }else{
    alert("Para esse calculo é necessario ter dois termos de cada vez");
    exit(0);
  }

  alert("O resto do Quociente é: " + result);
  return result;
}

function printVector(vector = new Array()){
  alert(vector);
}

function jutsuReplacement(vector = new Array()){
  printVector(vector);
  let exit_loop = false;
  do{
    let position = prompt("Digite o numero que deseja remover: ");
    if(!Number.NaN(position)){
      if(vector.indexOf(position)){
        vector.splice(vector.indexOf(position), 1);
        exit_loop = true;
      }else{
        alert("Digite um numero que esteja no vetor");
      }
    }else{
      alert("Digite um numero do vetor");
    }
  }while(exit_loop == false);

  let option = "";
  let temp;
  exit_loop = false;
  
  do{
    option = prompt("Deseja adicionar um numero?\n 's' para sim e 'n' para não adicionar");
    if(option ==="s"){
      let x = prompt("Digite o numero:");
      if(x.includes(',')){
        x = x.replace(',', '.');
      }

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
  
}

function calcResult(result){

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


