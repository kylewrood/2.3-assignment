function grades(){
const grades = ["56", "87", "99", "40"];
document.getElementById("q1").innerHTML = grades;}


function addE(){
const grades = ["56", "87", "99", "40"];
grades.push ("68");
document.getElementById("q2").innerHTML = grades;}


function rmvFirst(){
const grades = ["56", "87", "99", "40"];
grades.shift ();
document.getElementById("q3").innerHTML = grades;}

function chgValue(){
const grades = ["56", "87", "99", "40"];
grades.pop ();
grades.push("60");
document.getElementById("q4").innerHTML = grades;
}


function myAvg(){
const grades = [56, 87, 99, 40];
let sum = 0;
for (let i = 0; i < grades.length; i++)
  sum += grades[i];
average = sum / grades.length;
document.getElementById("q5").innerHTML = average;
}




function vehicleSpecs(){
const vehicle = { 
    make: "Jeep",
    model:"Wrangler",
    year: 2023, 
    numberOfWheels: 4,
    isEnvironmentFriendly:Boolean(0)
  };
text = "";
  for (let x in vehicle) {
    text += vehicle[x] + "<br>";
  }

document.getElementById("q6").innerHTML = text;
  }