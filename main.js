let lab1 = [5, 5, 0, 5, 5, 10, 10];
let lab2 = [4, 5, 5, 5, 5, 5, 9];
let lab3 = [5, 10, 10, 15];
let lab4_5 = [10, 5, 3, 5, 5, 5, 10, 10, 10, 10, 5];
let lab6 = [5, 5, 10, 5, 5, 10];
let lab8 = [5, 10, 10, 10, 5];
let quiz1 = 32;



obj = main(lab1, lab2, lab3, lab4_5, lab6, lab8, quiz1)

function get_sum(lab) {  let S=0;
	for ( let i=0; i<lab.length; i++){
		S= S+lab[i]
	}
return S; }

 function main (lab1, lab2, lab3, lab4_5, lab6, lab8, quiz1){
sum1=get_sum (lab1);
sum2=get_sum (lab1);
sum3=get_sum (lab3);
sum4_5=get_sum (lab4_5);
sum6=get_sum (lab6);
sum8=get_sum(lab8);
 const obj = { 
lab1: [5, 5, 0, 5, 5, 10, 10],
lab2: [4, 5, 5, 5, 5, 5, 9],
lab3: [5, 10, 10, 15], 
lab4_5: [10, 5, 3, 5, 5, 5, 10, 10, 10, 10, 5], 
lab6: [5, 5, 10, 5, 5, 10], 
lab8: [5, 10, 10, 10, 5],
quiz1: 32, 
sums: [sum1, sum2, sum3, sum4_5, sum6, sum8], 
total_score: ((sum1 + sum2 + sum3 + sum4_5 + sum6 + sum8)/7) * 0.6  + ( quiz1 * 0.4),
};
return obj
}
console.log(obj)