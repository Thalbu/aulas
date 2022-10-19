'use strict';

/*
Prática 1B: Índice de massa corporal
Brutus e Olívia foram ao médico, que disse a eles que ambos estão fora do peso ideal. 
Ambos discordaram veementemente da armação do médico. Para provar que estava certo, o médico mostrou o Índice de Massa Corporal (IMC) 
de ambos, considerando que Brutus tem 1,84m e pesa 122kg e Olívia tem 1,76m e pesa 45kg.
Implemente um programa para mostrar o IMC de Brutus e Olívia e qual é a quantidade mínima de quilos Brutus deve perder 
e a que Olívia deve ganhar para atingirem um peso saudável segundo a classificação do IMC. A tabela de classificação do IMC está abaixo:

IMC | Classificação
 < 16 | Magreza grave 
16 a 17 | Magreza moderada 
17 a 18.5 | Magreza leve 
18.5 a 25 | Saudável 
25 a 30 | Sobrepeso 
30 a 35 | Obesidade grau 1 
35 a 40 | Obesidade grau 2 
(severa) ≥ 40 | Obesidade grau 3 (mórbida) 
Para calcular o IMC, utilize a seguinte fórmula:

IMC = peso ÷ altura2

Entrada: Seu programa deve inicializar os dados em variáveis locais.
Saída: Seu programa deve imprimir uma única linha com quatro números de ponto flutuante [float] separados por espaço. Os números impressos devem ser, nesta ordem: IMC do Brutus, IMC da Olivia, quantidade de quilos que o Brutus deve perder e quantidade de quilos que a Olivia deve ganhar. Cada número deve ser impresso com duas casas decimais. 
Gabarito: 36.03 14.53 37.36 12.31

*/
let pesoBrutus= 122;
let alturaBrutus= 1.84;
let imc = 122/(1.84*1.84);
console.log(imc.toFixed(2));
let pesoOlivia= 45;
let alturaOlivia= 1.76;
let imc2= 45/(1.76*1.76);
console.log(imc2.toFixed(2));
let perdapesoBrutus = ((25*alturaBrutus*alturaBrutus)-pesoBrutus)*-1;
console.log(perdapesoBrutus )
let perdapesoOlivia = ((18.5*alturaOlivia*alturaOlivia)-pesoOlivia);
console.log(perdapesoOlivia.toFixed(2))