// Exercícios

/*
1.  Escreva uma função que recebe um valor do tipo string
    e com no mínimo 5 caracteres. 
    Insira o valor recebido em um array e retorne o array gerado.
*/
function convertStringToArray(text) {
  if (typeof text !== "string" || text.length < 5) {
    return "O texto precisa ser do tipo string e ter pelo menos 5 caracteres.";
  }

  return [text];
}

console.log("1.", convertStringToArray("Kenzie"));
// resultado: 1. [ 'Kenzie' ]

/*
2.  Escreva uma função que recebe um valor do tipo number. 
    Use o valor recebido para acessar uma posição do seguinte array:
    let arr = ["Hermanoteu", "Olonéia", "Migalatéia", "Godart"]⁠
    Caso a posição exista, retorne o nome que se encontra nela. 
    ⁠Caso não seja acessado nenhuma posição com o valor recebido, 
    ⁠alerte: "Valor não encontrado".
*/

let arr = ["Hermanoteu", "Olonéia", "Migalatéia", "Godart"];

function findElementArray(numberParam) {
  if (typeof numberParam !== "number") {
    return "O argumento precisa ser do tipo 'number";
  }

  let element = arr[numberParam];

  if (element) {
    return element;
  }

  return "Valor não encontrado";
}

console.log("2.", findElementArray(2));
// Resultado: 2. Migalatéia

/*
3.  Crie um array de números, contendo os valores de 1 a 10.
    Crie uma função que recebe um número inteiro.
    Acesse a posição do array de números usando o valor recebido. 
    Teste se o valor contido na posição é par ou ímpar.

    Caso seja par retorne: "O valor encontrado nesta posição é par",
    Caso seja ímpar retorne: "O valor encontrado nesta posição é ímpar".
*/

let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function checkOddOrEven(integerNumber) {
  let element = arr3[integerNumber];

  let checkOdd = element % 2 !== 0;

  if (checkOdd) {
    return "O valor encontrado nesta posição é ímpar";
  }

  return "O valor encontrado nesta posição é par";
}

console.log("3.", checkOddOrEven(2));
// Resultado: 3. O valor encontrado nesta posição é ímpar

/*
4.  Dado o array de nomes:
    ⁠let nomes = ["Pedro", "Rafael", "José"]⁠

    Crie uma função que recebe a lista de nomes como parâmetro. 
    A função deve verificar qual dos nomes da lista tem a maior 
    quantidade de caracteres e retornar o nome.

    Teste cada posição usando estrutura de repetição, 
    a menos que a lista tenha apenas um valor inserido.

    Use este formato: "O nome x é o maior da lista";
*/
let nomes = ["Pedro", "Rafael", "José"];

function findBiggerName(nameList) {
  let lengthNameList = nameList.length;
  let biggerName = nameList[0];

  if (lengthNameList === 0) {
    return "A lista está vazia";
  }

  if (lengthNameList === 1) {
    return `O nome ${biggerName} é o maior da lista, até por que é o unico ;)`;
  }

  for (let i = 1; i < lengthNameList; i++) {
    const currentName = nameList[i];
    if (currentName.length > biggerName.length) {
      biggerName = currentName;
    }
  }

  return `O nome ${biggerName} é o maior da lista`;
}

console.log("4.", findBiggerName(nomes));
// Resultado: 4. O nome Rafael é o maior da lista;

/*
5.  Dado o array de números como exemplo:
    ⁠numeros = [1,4,6,9,11,8]


    Escreva uma função que recebe a lista de números como parâmetro. 
    A função deve realizar a soma dos valores das duas últimas posições da lista
     e armazenar o valor da soma em uma variável.

    Use a variável para testar se o valor da soma é um múltiplo de 2.

    Se sim, retorne: "A soma é um múltiplo de 2".
    Caso contrário: "A soma não é um múltiplo de 2"
*/

let numeros = [1, 4, 6, 9, 11, 8];

function checkMultipleTwo(numberList) {
  let sumResult = 0;
  let result = false;
  let numberListLength = numberList.length;

  if (numberListLength >= 2) {
    const lastNumber = numberList[numberListLength - 1];
    const secondLastNumber = numberList[numberListLength - 2];
    sumResult = lastNumber + secondLastNumber;
    result = sumResult % 2 === 0;
  }

  result = sumResult % 2 === 0;

  if (result) {
    return "A soma é um múltiplo de 2";
  }

  return "A soma não é um múltiplo de 2";
}

console.log("5.", checkMultipleTwo(numeros));
// Resultado: 5. A soma não é um múltiplo de 2

/*
6.  Dado o array de nomes como exemplo:
    ⁠let nomes = ["Pedro", "Rafael", "José", "Carla", "Maria", "Josef", "Raquel"]⁠

    Escreva uma função que recebe como parâmetros a lista de nomes, 
    um nome (string) e um valor inteiro (number) para representar a posição.

    Acesse a lista na posição que corresponde ao valor inteiro recebido 
    e armazene o valor contido na posição em uma variável.

    Teste se o nome recebido pela função como parâmetro 
    é o mesmo que o armazenado na variável.

    Lembre-se de normalizar os dados antes de testar.

    Caso os valores sejam iguais, retorne: "Acertei".
    Caso não sejam, retorne: "Não é quem eu pensava"
*/

let nameList2 = [
  "Pedro",
  "Rafael",
  "José",
  "Carla",
  "Maria",
  "Josef",
  "Raquel",
];

function findNameInList(list, name, index) {
  const nameToFind = name.toLowerCase();
  const nameInList = list[index].toLowerCase();

  if (nameToFind === nameInList) {
    return "Acertei";
  }

  return "Não é quem eu pensava";
}

console.log("6.", findNameInList(nameList2, "Pedro", 1));
// Resultado: 6.: Não é quem eu esperava

/*
7.  Dado dois arrays numéricos como exemplo.
    ⁠let numeros = [1,2,3,4,5,6,10,7]
    ⁠let outrosNumeros = [5,7,9,4,2,3,9]

    Escreva uma função que recebe as duas listas de números como parâmetro. 
    A função deve conseguir identificar qual dos dois arrays é o maior.

    Após identificar o maior array, retorne o último elemento do array.

    Use este formato: "A maior lista é a lista cujo último número é: x"
*/

let numbers = [1, 2, 3, 4, 5, 6, 10, 7];
let otherNumbers = [5, 7, 9, 4, 2, 3, 9];

function biggerList(listA, listB) {
  const sizeOfListA = listA.length;
  const sizeOfListB = listB.length;
  let biggerListSize = null;
  let lastNumberOfBiggestList = null;

  if (sizeOfListA > sizeOfListB) {
    biggerListSize = listA;
  } else {
    biggerListSize = listB;
  }

  lastNumberOfBiggestList = biggerListSize[biggerListSize.length - 1];

  return `A maior lista é a lista cujo último número é: ${lastNumberOfBiggestList}`;
}

console.log("7.", biggerList(numbers, otherNumbers));
// Resultado: 7. A maior lista é a lista cujo último número é: 7;
