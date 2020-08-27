let varA = 'A';
let varB = 'B';
let varC = 'C';

/* Método tradicional
* let aux;
* aux = varA;
* varA = varB;
* varB = varC;
* varC = aux;
*/
[varA, varB, varC] = [varB, varC, varA]; 
console.log(`${varA} ${varB} ${varC}`);