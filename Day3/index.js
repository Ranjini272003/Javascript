let students =[{name : "Ranjini", age:21,marks:79},
{name : "Dhivya", age:18,marks:91},
{name : "Rathish", age:19,marks:87},
{name : "John", age:20,marks:95}
];

let highScore=students.filter(students => students.marks > 80)
console.log(highScore);

let sortAge = students.sort((a,b)=> b.age-a.age)
console.log(sortAge);

let printName=students.map(students => students.name)
console.log(printName);