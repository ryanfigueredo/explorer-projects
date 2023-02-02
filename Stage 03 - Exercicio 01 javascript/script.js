alert("vamos calcular!");

let firstNumber = prompt("Digite o primeiro número.");
let secondTwo = prompt("Digige o segundo número.");

firstNumber = Number(firstNumber);
secondTwo = Number(secondTwo);

const sum = firstNumber + secondTwo;
const sub = firstNumber - secondTwo;
const multi = firstNumber * secondTwo;
const div = firstNumber / secondTwo;
const restDiv = firstNumber % secondTwo;

alert(" A Soma dos dois números é: " + sum);
alert("Oh!, Subtração dos dois números é: " + sub);
alert("A multiplicação dos dois números é: " + multi);
alert("A divisão dos dois números é: " + div.toFixed(2));
alert("O resto da divisão dos dois números é: " + restDiv);

let resultado = (Number(firstNumber) + Number(secondTwo))% 2 == 0 ? 'Par' : 'Impar';


if( (Number(firstNumber) + Number(secondTwo))% 2 == 0 ? ' Par' : ' Impar' ) {
 alert("A soma é: " +  resultado )

 if(firstNumber == secondTwo) {
  alert(" os números são iguais: "  )
} else{
  alert(" os nímeros inseridos são diferentes:  "  )
}


}