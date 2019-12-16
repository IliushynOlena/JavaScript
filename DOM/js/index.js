// let elem=document.getElementsByTagName("li");
// console.log(elem);
// for(let i=0; i<elem.length;i++)
// {
//     elemp[i].innerHTML = 'Element number ${i}';
// }

// const elem = document.getElementById("root")
// elemp.innerHTML = "<h2>Hello!!!</h2>";

// const elem = document.getElementsByClassName("root")[0];
// elem.innerHTML = "Hell"
const tableelem = document.getElementById("root");
//console.log(tableelem);
let table = document.createElement("table");

let tr = document.createElement("tr");
let tr1 = document.createElement("th");
tr1.innerHTML = "Company";
let tr2 = document.createElement("th");
tr2.innerHTML = "Contact";
let tr3 = document.createElement("th");
tr3.innerHTML = "Country";

tr.appendChild(tr1);
tr.appendChild(tr2);
tr.appendChild(tr3);
table.appendChild(tr);


let trr = document.createElement("tr");
let tr1_1 = document.createElement("th");
tr1_1.innerHTML = " Alfreds Futterkiste ";
let tr2_1 = document.createElement("th");
tr2_1.innerHTML = "	Maria Anders ";
let tr3_1 = document.createElement("th");
tr3_1.innerHTML = " Germany ";

trr.appendChild(tr1_1);
trr.appendChild(tr2_1);
trr.appendChild(tr3_1);
table.appendChild(trr);

let trr1 = document.createElement("tr");
let tr1_2 = document.createElement("th");
tr1_2.innerHTML = " Centro comercial Moctezuma ";
let tr2_2 = document.createElement("th");
tr2_2.innerHTML = "	Francisco Chang ";
let tr3_2 = document.createElement("th");
tr3_2.innerHTML = " Mexico ";

trr1.appendChild(tr1_2);
trr1.appendChild(tr2_2);
trr1.appendChild(tr3_2);
table.appendChild(trr1);

let trr2 = document.createElement("tr");
let tr1_3 = document.createElement("th");
tr1_3.innerHTML = " Ernst Handel ";
let tr2_3 = document.createElement("th");
tr2_3.innerHTML = "	Roland Mendel ";
let tr3_3 = document.createElement("th");
tr3_3.innerHTML = " Austria ";

trr2.appendChild(tr1_3);
trr2.appendChild(tr2_3);
trr2.appendChild(tr3_3);
table.appendChild(trr2);

let trr3 = document.createElement("tr");
let tr1_4 = document.createElement("th");
tr1_4.innerHTML = " Island Trading ";
let tr2_4 = document.createElement("th");
tr2_4.innerHTML = "	Helen Bennett ";
let tr3_4 = document.createElement("th");
tr3_4.innerHTML = " UK ";

trr3.appendChild(tr1_4);
trr3.appendChild(tr2_4);
trr3.appendChild(tr3_4);
table.appendChild(trr3);

let trr4 = document.createElement("tr");
let tr1_5 = document.createElement("th");
tr1_5.innerHTML = " Laughing Bacchus Winecellars ";
let tr2_5 = document.createElement("th");
tr2_5.innerHTML = "	Yoshi Tannamuri ";
let tr3_5 = document.createElement("th");
tr3_5.innerHTML = " Canada ";

trr4.appendChild(tr1_5);
trr4.appendChild(tr2_5);
trr4.appendChild(tr3_5);
table.appendChild(trr4);

let trr5 = document.createElement("tr");
let tr1_6 = document.createElement("th");
tr1_6.innerHTML = " Magazzini Alimentari Riuniti ";
let tr2_6 = document.createElement("th");
tr2_6.innerHTML = "	Giovanni Rovelli ";
let tr3_6 = document.createElement("th");
tr3_6.innerHTML = " Italy ";

trr5.appendChild(tr1_6);
trr5.appendChild(tr2_6);
trr5.appendChild(tr3_6);
table.appendChild(trr5);
tableelem.appendChild(table);