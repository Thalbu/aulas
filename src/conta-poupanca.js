'use strict';

/*
Prática 1A: Conta poupança
Uma conta poupança foi aberta com um depósito de R$789,54, 
com rendimentos de 0.56% de juros ao mês. No início do segundo mês,
R$303,20 reais foram depositados nessa conta poupança. No início do terceiro mês, R$58,25 reais foram retirados da conta. 
Implemente um programa que imprima o crédito em conta no início do quarto mês.

Entrada: Seu programa deve inicializar dados em variáveis locais.
Saída: Seu programa deve imprimir um número de ponto flutuante [float].
Gabarito: 1050.91

*/

let T0 = 789.54;

let T1= (T0 + (T0*0.0056))+303.20;

let T2= (T1+(T1*0.0056));

let T3=((T2-58.25)+((T2-58.25)*0.0056));

let  input = T3;
let T4 =  input;
console.log(T4.toFixed(2));
console.log(typeof T4);