// Antes de ES6, se debía establecer una variable y utilizar el operador OR ( ||) con el valor por defecto necesario. El caracter guion bajo ( _) lo utilizo para diferenciar el parámetro de la función de la variable declarada.

function sumar(number1, number2){
    var _number1 = number1 || 0
    var _number2 = number2 || 0
    
    return _number1 + _number2
  }
  
  sumar(3,4) // 7
  sumar(3)   // 3
  sumar()    // 0



// Cómo utilizar los parámetros por defecto
// Con los parámetros por defectos añadidos en ES6, eliminamos las declaraciones para mejorar la legibilidad y el mantenimiento del código de la siguiente manera:

function sumar(number1 = 0, number2 = 0){
    return number1 + number2
  }
  
  console.log(sumar(3,4)) // 7
  console.log(sumar(3))   // 3
  console.log(sumar())    // 0

  
//   Combina objetos JSON con el Spread Operator
  
  function solution(
    json1 = {
      name: "Mr. Michi",
      food: "Pescado",
    },
    json2 = {
      age: 12,
      color: "Blanco",
    }
  ) {
    return {
      ...json1,
      ...json2,
    };
  }
  
  const resultado = solution();
  console.log(resultado);
  