// console.log("Hello world");
// var a = 5;
// let b = 10;
// let c = "Bill";

// console.log("B =>", b);
// console.log("C =>", c);
// document.write("<h2>",b,"</h2");
// c = 100500;
// console.log("C after =>", c, "type =>", typeof(c));

// let exit = false;
// console.log("exit =>", exit, "type =>", typeof(exit));

// let name = prompt("Enter your name:");
// document.write(name, typeof(exit));

// let names = parseInt(prompt("Enter your name:"));
// document.write(name, typeof(exit));

// let a = parseInt(prompt("Enter first digit:"))
// let b = parseInt(prompt("Enter second digit:"))

// if (a>b)
// {
//     document.write(a, ">" ,b);
    
// }
// else if(a<b)
// {
//     document.write(a, "<" ,b);
// }
// else{
//     document.write(a, "=" ,b);
// }

// let c = prompt("Enter first:")
// let d = parseInt(prompt("Enter second :"))

// if (c == d)//porivnue znachennz
// {
//     document.write("true");
    
// }

// else{
//     document.write("False");
// }
// let c = prompt("Enter first:")
// let d = parseInt(prompt("Enter second :"))

// if (c === d)znachenna i type
// {
//     document.write("true");
    
// }

// else{
//     document.write("False");
// }

// let day = prompt("Enter day number");
// switch(day)
// {
//     case '1': document.write("Monday");
//     break;
//     default: document.write("R.T.F.M");
//     break;
// }

// const arr = [1, 4, "Bill", true, [33 ,"?",[33, "Fun"]],
// {
//     name: "Bill",
//     age:40
// }]
// document.write(arr[4][1]);
// let newElem = 111111;
// arr[4].push(newElem);
// document.write(arr);

let choice = prompt("duim enter 1 or cm enter 2");
switch(choice)
{
    case '1': 
    let num = parseInt(prompt("Enter number by duim:"));
    let rez = num*2.54;
    document.write(rez , "cm");
    break;
    case '2':
    let num2 = parseInt(prompt("Enter number by cm:"));
    let rez2 = num2/2.54;
    document.write(rez2 , "duim");
    break;
    default: document.write("R.T.F.M");
    break;
}
 
