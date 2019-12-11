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
///////////////////////Exersice 1

// let mark_1 = parseInt(prompt("Enter first mark"));
// let mark_2 = parseInt(prompt("Enter second mark"));
// let mark_3 = parseInt(prompt("Enter third mark"));
// let rez = ((mark_1 + mark_2 + mark_3)/3);
// document.write(rez);
// if (rez < 2.5)
// {
//     document.write(" BAD");
    
// }
// else if( rez < 3.3)
// {
//     document.write(" SO-SO");
// }
// else if(rez < 4.2)
// {
//     document.write(" GOOD");
// }
// else if (rez = 5.0){
//     document.write(" EXELENT");
// }
 
//////////////////////////Exersice 2
let day = prompt("Enter number of planet : Меркурій - 1, Венера - 2, Земля - 3 , Марс - 4, Юпітер - 5, Сатурн - 6, Уран - 7, Нептун - 8, Плутон - 9 .");
switch(day)
{
    case '1': document.write("Меркурій/n");
    document.write("Мерку́рій — найближча до Сонця планета Сонячної системи. Обертається навколо Сонця за 87,969 земних діб."+
                  "Меркурій належить до внутрішніх планет, оскільки його орбіта лежить ближче до Сонця, ніж пояс астероїдів."+
                  "Після позбавлення Плутона статусу планети Меркурій є найменшою планетою Сонячної системи.")
    break;
    case '2': document.write("Венера");
    document.write("Вене́ра — вторая по удалённости от Солнца планета Солнечной системы, наряду с Меркурием, Землёй и Марсом"+
                   "принадлежащая к семейству планет земной группы. Названа в честь древнеримской богини любви Венеры."+
                   "По ряду характеристик — например, по массе и размерам — Венера считается «сестрой» Земли. "+
                   "Венерианский год составляет 224,7 земных суток. ");
    break;
    case '3': document.write("Земля");
    document.write("Земля́ — третья по удалённости от Солнца планета Солнечной системы. Самая плотная, пятая по диаметру"+
                   "и массе среди всех планет и крупнейшая среди планет земной группы, в которую входят также Меркурий, Венера и Марс.");
    break;
    case '4': document.write("Марс");
    document.write("Марс — четвёртая по удалённости от Солнца и седьмая по размерам планета Солнечной системы; масса планеты"+
                   "составляет 10,7 % массы Земли. Названа в честь Марса — древнеримского бога войны, соответствующего"+
                   "древнегреческому Аресу. Иногда Марс называют «красной планетой» из-за красноватого оттенка поверхности,"+
                   "придаваемого ей минералом маггемитом — γ-оксидом железа(III).");
    break;
    case '5': document.write("Юпітер");
    document.write("Юпи́тер — крупнейшая планета Солнечной системы, пятая по удалённости от Солнца. Наряду с Сатурном,"+
                   "Ураном и Нептуном, Юпитер классифицируется как газовый гигант.");
    break;
    case '6': document.write("Сатурн");
    document.write("Сату́рн — шестая планета от Солнца и вторая по размерам планета в Солнечной системе после Юпитера."+
                   "Сатурн, а также Юпитер, Уран и Нептун, классифицируются как газовые гиганты. Сатурн назван в честь "+
                   "римского бога земледелия");
    break;
    case '7': document.write("Уран");
    document.write("Ура́н — планета Солнечной системы, седьмая по удалённости от Солнца, третья по диаметру и четвёртая"+
                   "по массе. Была открыта в 1781 году английским астрономом Уильямом Гершелем и названа в честь греческого"+
                   "бога неба Урана.");
    break;
    case '8': document.write("Нептун");
    document.write("Непту́н — восьмая и самая дальняя от Земли планета Солнечной системы. По диаметру находится на четвёртом"+ 
                  " месте, а по массе — на третьем. Масса Нептуна в 17,2 раза, а диаметр экватора в 3,9 раза больше земных."+
                  "Планета была названа в честь римского бога морей. Её астрономический символ Neptune symbol.svg — стилизованная "+
                  "версия трезубца Нептуна.");
    break;
    case '9': document.write("Плутон");
    document.write("Плуто́н (134340 Pluto) — крупнейшая известная карликовая планета Солнечной системы[11], транснептуновый"+
                   "объект и десятое по массе (без учёта спутников) небесное тело, обращающееся вокруг Солнца — после восьми "+
                   "планет и Эриды[12][13][14]. Первоначально Плутон считали планетой, но сейчас он считается карликовой планетой "+
                   "и крупнейшим объектом пояса Койпера (в частности, крупнее Эриды)[11].");
    break;
    default: document.write("R.T.F.M");
    break;
}
