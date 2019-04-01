// 1. Scrieti o functie de tip named function care accepta ca argument un CNP si verifica sexul unei persoane. In urma apelului acestei functii, se va returna un text de forma "Persoana verificata este de sexul M/F". 

function verificaSex(CNP) {
	if(CNP.charAt(0) == 1) {
		return "Persoana verificata este de sexul M";
	} else {
		return "Persoana verificata este de sexul F";
	}
}

console.log(verificaSex('1234567890'));



// 2. Scrieti o functie de tip function expression care accepta ca argument o valoare numerica cuprinsa intre 1 si 10 si decide calificativul punctajului. Criteriile sunt urmatoarele:
// Functia va returna un text de forma "Calificatul corespunzator punctajului [punctaj] este [calificativ]".

var verifica = function(numar) {
	if(numar >= 1 && numar <= 3) {
		return "Calificatul corespunzator punctajului " + numar + " este E";
	} else if(numar >= 3 && numar <= 6) {
		return "Calificatul corespunzator punctajului " + numar + " este D";
	} else if(numar >= 7 && numar <= 8) {
		return "Calificatul corespunzator punctajului " + numar + " este B";
	} else if(numar == 9) {
		return "Calificatul corespunzator punctajului " + numar + " este A";
	} else if(numar == 10) {
		return "Calificatul corespunzator punctajului " + numar + " este A+";
	}
}

console.log(verifica(10));

// 3. Scrieti o functie care accepta ca argument numele marcii unei masini si returneaza un text de forma: "Marca [marca] se produce in [tara]". Trebuie sa aveti macar 6 cazuri. In cazul in care functia nu recunoaste marca, va returna "Marca este necunoscuta. " Scrieti codul in 3 variante diferite.


function verificaMasina(marca) {
	if(marca == "dacia") {
		return "Marca " + marca + " se produce in Romania";
	} else if(marca == "mercedes") {
		return "Marca " + marca + " se produce in Germania";
	} else if(marca == "citroen") {
		return "Marca " + marca + " se produce in Franta";
	} else if(marca == "fiat") {
		return "Marca " + marca + " se produce in Italia";
	} else if(marca == "toyota") {
		return "Marca " + marca + " se produce in Japonia";
	} else if(marca == "volvo") {
		return "Marca " + marca + " se produce in Suedia";
	} else {
		return "Marca este necunoscuta.";
	}
};


console.log(verificaMasina('fiat'));


function verificaMasina(marca) {
	switch(marca) {
		case "dacia": 
			return "Marca " + marca + " se produce in Romania";
			break;
		case "mercedes":
			return "Marca " + marca + " se produce in Germania";
			break;
		case "citroen":
			return "Marca " + marca + " se produce in Franta";
			break;
		case "fiat":
			return "Marca " + marca + " se produce in Italia";
			break;
		case "toyota":
			return "Marca " + marca + " se produce in Japonia";
			break;
		case "volvo":
			return "Marca " + marca + " se produce in Suedia";
			break;
		default:
			return "Marca este necunoscuta.";
			break;
	}
};



console.log(verificaMasina('volvo'));



