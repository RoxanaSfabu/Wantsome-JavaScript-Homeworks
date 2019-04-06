// 1. Scrieti un for care itereaza de la 0 la 20. Pentru fiecare iteratie, verifica daca numarul curent este par sau impar si va
// raporta acest lucru in consola. (exemplu: “2 este numar par”);
// Scrieti functia in doua variante: while si for.


for(var x = 0; x <= 20; x++) {
	if(x % 2 == 0) {
		console.log(x + " este numar par");
	} else {
		console.log(x + " este numar impar");
	}
}

var x = 0;
while(x <= 20) {
	if(x % 2 == 0) {
		console.log(x + " este numar par");
	} else {
		console.log(x + " este numar impar");
	}
	x++;
}




// 2. Scrieti un for care itereaza de la 0 la 10. Pentru fiecare iteratie, se va multiplica numarul curent cu 9 si se va afisa
// rezultatul. (exemplu: “3*9=27”).
//  Scrieti functia in doua variante: while si for.


for(var x = 0; x <= 10; x++) {
	console.log(x + "*9=" + x*9);
}

var x = -1;
while(x < 10) {
	x++;
	console.log(x + "*9=" + x*9);
}


// 3. Pentru fiecare cifra de la 1 la 10, afisati tabla inmultirii.
// (exemplu: 1 * 0 = 0
// Pentru a afisa in consola pe linie noua puteti concatena un string, la final, cu + “\n”.

for(var x = 1; x <= 10; x++) {
	console.log(x+" * "+0+" = "+x*0+"\n"+x+" * "+1+" = "+x*1+"\n"+x+" * "+2+" = "+x*2+"\n"+x+" * "+3+" = "+x*3+"\n"+x+" * "+4+" = "+x*4+"\n"+x+" * "+5+" = "+x*5+"\n"+x+" * "+6+" = "+x*6+"\n"+x+" * "+7+" = "+x*7+"\n"+x+" * "+8+" = "+x*8+"\n"+x+" * "+9+" = "+x*9+"\n"+x+" * "+10+" = "+x*10+"\n");
}




// 4. Pentru functia dezvoltata la cerinta 2 de la tema anterioara, verificati si afisati in consola fiecare calificativ care se
// poate obtine pentru punctajele incepand de 1 la 10. (exemplu: “Pentru 2, obtii calificativul E. \n Pentru 7, obtii
// calificativul B \n ...samd “).

var verifica = function(numar) {
	if(numar >= 1 && numar <= 3) {
		return "E";
	} else if(numar >= 4 && numar <= 6) {
		return "D";
	} else if(numar >= 7 && numar <= 8) {
		return "B";
	} else if(numar == 9) {
		return "A";
	} else if(numar == 10) {
		return "A+";
	}
};

console.log('Pentru 1, obtii calificativul ' + verifica(1) + '\nPentru 2, obtii calificativul ' + verifica(2) + '\nPentru 3, obtii calificativul ' + verifica(3) + '\nPentru 4, obtii calificativul ' + verifica(4) + '\nPentru 5, obtii calificativul ' + verifica(5) + '\nPentru 6, obtii calificativul ' + verifica(6) + '\nPentru 7, obtii calificativul ' + verifica(7) + '\nPentru 8, obtii calificativul ' + verifica(8) + '\nPentru 9, obtii calificativul ' + verifica(9) + '\nPentru 10, obtii calificativul ' + verifica(10));
