//PASSOS A SEGUIR 
//https://medium.com/@wbl.pauline/how-to-build-a-calculator-using-javascript-no-more-than-100-lines-of-js-code-b9bd087a14e8
// 01 - Create variables that will help us store targeted DOM elements - OK
// 02 - Create variables that will store our input - OK
// 03 - Add event listeners to all buttons - OK
// 04 - Create a function that will update the display value 
// 05 - Create a function that will perform the mathematical operation for us 
// 06 - Create a function that will clear everything
// 07 - Create a function that will insert decimal points



// VARIABLES 
// Display - selecciona el h1 que conte l'input
const displayValors = document.getElementById("display__numeros");

// Numeros
const btnNumeros = document.getElementsByClassName("btn-numero");

// Operadors i l'igual
const btnOps = document.getElementsByClassName("btn-op");

// Decimal
const decimal = document.getElementById("decimal");

// Esborrar
const esborrar = document.getElementById("esborrar");

// Valors Temporals
var displayValue = 0;
var segonValor;
var valorsPerOperar = [];

// Event Listeners als numeros i operadors
for (let i = 0; i < btnNumeros.length; i++) {
	btnNumeros[i].addEventListener("click", _);
}

for (let i = 0; i < btnOps.length; i++) {
	btnOps[i].addEventListener("click", _);
}

// Create a function to update the display field
// Updating the display field
updateDisplayVal = (e) => {
	var btnText = e.target.innerText;

	if (displayValue === "0") {
		displayValue = "";
	}

	// Append the content of the button we clicked to our displayValue variable and display it
	displayValue += btnText;
	displayValors.innerText = displayValue;
}

//Create a function that performs the mathematical operations
function calculs(){

	if (btnText == "#suma"){
		
	}


}


function calculadora(op, n1, n2) {
	var resposta = "";

	//comprovar que no s'esta divivint per 0
	if ((op == "/") || (op == "divisio") || (op == "divi")) {
		if (n2 == 0) {
			resposta = "No es pot dividir entre zero.";
		} else if (n1 == 0) {
			resposta = "0";
		} else {
			resposta = n1 / n2;
		}
	}
	//si no s'esta dividint per 0, fa les altres ops
	else {
		switch (op) {
			case "suma":
			case "+":
				resposta = n1 + n2;
				break;
			case "resta":
			case "-":
				resposta = n1 - n2;
				break;
			case "multiplicacio":
			case "multi":
			case "*":
				resposta = n1 * n2;
				break;
			default:
				resposta = "Aquesta operacio no està contemplada."
		}

	}

	return resposta;
}

function netejar() {
	document.getElementById("Num1").value = ""; // per posar-ho a 0.
	document.getElementById("Num2").value = ""; // per posar-ho a 0.
	document.getElementById("Operador").value = ""; // per posar-ho en blanc.
	missatge = ""; // posar en blanc la variable.
	document.getElementById("demo").innerHTML = missatge; //Pq on sortien les paraules torni a estar en blanc.
	document.getElementById("Num1").focus(); // posa el focus a l'id indicat.
}