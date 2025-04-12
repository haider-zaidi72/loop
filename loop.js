// for (Intiate,  condition, increament);

for (let i = 0; i < 2; i++) {
    console.log (i);
};


let i=1;
for (console.log("haider"); i<5; console.log("price incrase"),  ++i){
    console.log(i);
    
};

for (let i = 1 ; i < 10; i++){
    console.log(i);
}

// for (let i = 10 ; i >= 1; i--){
//     console.log(i);
//     break;
// }

for (let i = 0; i < 10 ; i++){
   if(i===6 || i=== 3){
    continue;
   }
    console.log(i)
}

// adds element in last and return new array length. add push again will add another value and return.
const arr2 = ["january", "February", "March", "April", "May" ];
arr2.push("june");
arr2.push("July");
console.log(arr2);

//add element in start and return new array length. again unshift will add another value and return
const arr4 = ["january", "February", "March", "April", "May" ];
arr4.unshift("june");
arr4.unshift("October");
console.log(arr4);

// remove first element from array and shift again will delet 2nd name and return values
const arr5 = ["january", "February", "March", "April", "May" ];
arr5.shift();
arr5.shift();
console.log(arr5);

//remove last value and pop again delete an other last value and return
const arr3 = ["january", "February", "March", "April", "May" ];
arr3.pop();
arr3.pop();
console.log(arr3);

//print last value and return
const arr1 = ["january", "February", "March", "April", "May" ];
const n = arr1.length-1
console.log(arr1 [n]);

//print 2nd last value and return
const arr6 = ["january", "February", "March", "April", "May" ];
const a = arr6.length-2
console.log(arr6 [a]);


// delete value after 1 count 3 or which number is given in splice will be delted.
const arr7 = ["january", "February", "March", "April", "May" ];
arr7.splice(1,3);
console.log(arr7);

//blank an array
const arr8 = ["january", "February", "March", "April", "May" ];
arr8.length = [0];
console.log(arr8);

// check the value postion
const arr9 = ["january", "February", "March", "April", "May" ];
let  position =  arr9.indexOf ("March");
console.log(position);

// Split text / words and convert into the array
let text = "Pakistan is a multi langual country";
let wordarray = text.split (' ');
console.log(wordarray);

//join text and convert into the text /
const arr10 = ["january", "February", "March", "April", "May" ];
let textarray = arr10.join(' ');
console.log(textarray);

//join 2 array in one
const arr11 = ["january", "February", "March", "April", "May" ];
let arr12 = [ "june" , "July" ];
let newarr = arr11.concat (arr12);
console.log(newarr);

//join if array more than 2
const arr13 = ["january", "February", "March", "April", "May" ];
let arr14 = [ "june" , "July" ];
let arr15 = [ "Aug", "Sep"];
let newarray = arr13.concat (arr14, arr15);
console.log(newarray);

//Multi dimensional array (array inside the array)
// array No 0, No 1, No 2, in array No 0, January is 0 and 31 days is 1
const arr16 = [
    ["january","31 days" ],
    ["February", "28 days"],
    ["March", "30 days"]
];

// sum  assignments

const arr17 = [3, 4, 5, 8, 1, 0, 16];

// console.log(arr17[1 + 2] + arr17[1]);

let sum = 0; // 3,7,12,20
for (let i = 0; i < arr17.length; i++) {
  sum = sum + arr17[i];
}
console.log("sum", sum);
//.......................................................... //
// Find the sum of all elements in an array
// Input: [1, 2, 3, 4]
// Output: 10

const arr18= [1, 2, 3, 4];

let sum1 = 0;
for (let i = 0; i < arr18.length; i++)[
    sum1=sum1+arr18[i]
]
console.log("sum", sum1);
//..........................................................//

// 2. Find the maximum and minimum value in an array

// Input: [4, 9, 2, 7]
// Output: Max = 9, Min = 2

const arr19 = [4, 9, 2, 7];

const min = Math.min  (4, 9, 2, 7);
const max = Math.max  (4, 9, 2, 7);

console.log("Min", min);
console.log("Min", max);
//...............................................................
// 3. Count the number of even and odd numbers

// Input: [1, 2, 3, 4, 5]
// Output: Even: 2, Odd: 3
const arr20 = [1, 2, 3, 4, 5];
const evenNumbers=[];
const oddNumbers = [];

for (let i=0; i < arr20.length; i++){
    if (arr20 [i] % 2 === 0 ){
        evenNumbers.push(arr20[i]);
    }
    else{
    oddNumbers.push(arr20[i]);
    }
}

    console.log("Even Number", evenNumbers);
    console.log("Odd Number", oddNumbers);
//................................................................ 
// 4. Reverse an array manually (without using reverse() method)

// Input: [1, 2, 3]
// Output: [3, 2, 1]

const numbers = [1, 2, 3, 4, 5];
const reversed = [];

for (let i = numbers.length - 1; i >= 0; i--) {
  reversed.push(numbers[i]);
}

console.log("Reversed:", reversed);
//...............................................................
// 5. Check if an element exists in an array or not

// Input: [5, 7, 9], Element: 7
// Output: true

const numbers2 = [5, 7, 9];
const element = 7;

const exists = numbers2.includes(element);

console.log(exists); 

//------------------------------------------------------------- 




