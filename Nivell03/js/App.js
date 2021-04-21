//////////////// VARIABLES 

//Els botons clicats primer seran strings per mostrar-los per pantalla, i després els convertirem a floats.
var v1 = "";
var v2 = "";
var op = "";

//Això és per saber si s'ha clicat un botó operador.
var canviValor = false;

//El resultat de la operació.
var resultat;

//Els strings inicials convertits en floats.
var n1;
var n2;

//Al principi de cada operació aquesta var serà true per escriure o sobreescriure els valors clicats.
var primerNumero = true;

//////////////// FUNCIONS

//Mostrar numeros per pantalla.
function mostrar(n) {

	//Quan ja hem fet una operació, i es clica un nou número, o si és la 1a operació.
	if (primerNumero) {
		v1 = n.toString();
		document.getElementById("display__numeros").innerHTML = v1;
		primerNumero = false;
	} else {
		//Si és el primer cop que es crea un valor.
		if (canviValor == false) {
			v1 += n;

			document.getElementById("display__numeros").innerHTML = v1;
		} else {
			v2 += n;

			document.getElementById("display__numeros").innerHTML = v1 + op + v2;
		}
	}
}

//Assignar operador, un cop hem clicat un botó d'operació, ho registrem (canviValor = true), i declarem que ja no estarem clicant el primerNumero.
function asignOperador(operador) {

	if (canviValor == false) {

		canviValor = true;

		op = operador;

		document.getElementById("display__numeros").innerHTML = v1 + op;

		primerNumero = false;
	}
}

//Fer la operació.
function ferOperacio() {

	//Convertir els valors en xifres per poder operar amb elles.
	n1 = parseFloat(v1);
	n2 = parseFloat(v2);
	console.log("n1: " + n1 + ". n2: " + n2);

	//Si s'ha clicat un botó d'operació farà el calcul, sinó no.
	if (canviValor) {

		//Comprovar que no s'està divivint per 0.
		if (op == "÷") {
			if (n2 == 0) {
				resultat = "No es pot dividir entre zero.";
			} else if (n1 == 0) {
				resultat = "0";
			} else {
				resultat = n1 / n2;
			}
		}
		//Si no s'està dividint per 0, fa les altres ops.
		else {

			switch (op) {
				case "+":
					resultat = n1 + n2;
					break;
				case "-":
					resultat = n1 - n2;
					break;
				case "x":
					resultat = n1 * n2;
					break;
				default:
					resultat = "Alguna cosa ha anat malament."
			}
		}

		document.getElementById("display__numeros").innerHTML = resultat;

		//Ja hem resolt una operació almenys 1 cop.
		primerNumero = true;

		//Per seguir fent operacions clicant 1 num en comptes de l'AC.
		seguirOperant();
	}
}

//Quan es cliqui un número i seguir calculant, diem que l'últim número clicat sigui el nou v1 en forma de string.
function seguirOperant() {
	v1 = resultat.toString();
	n1 = resultat;
	v2 = "";
	n2 = 0;
	op = "";
	canviValor = false;
}

//Botó AC, per posar tots els valors a 0.
function reset() {
	v1 = "";
	n1 = 0;
	v2 = "";
	n2 = 0;
	op = "";
	canviValor = false;
	primerNumero = false;

	document.getElementById("display__numeros").innerHTML = 0;
}