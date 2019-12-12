let numberAcccount;
let startmoney;
let currency;
let choice = parseInt(prompt("If you want create account enter 1, withdraw money 2,  exit 3"));
document.write(choice);

 
// function Account(numberAcccount, startmoney, currency) {
//   this.numberAcccount = numberAcccount;
//   this.startmoney = startmoney;
//   this.currency = currency;
//   this.ShowUser = function() {
//     console.log("Number Acccount =>", this.numberAcccount, "\nCurrency:", this.currency);
//   };
// }

// let user1 = new User("Bob", 33);
// user1.ShowUser();

// let user2 = new User("Tom", 42);
// user2.ShowUser();
switch (choice) {
    case 1:
        document.write("Create account\n");
        numberAcccount = parseInt(prompt("Enter number Acccount"));
        startmoney = parseInt(prompt("Enter sum of money on start"));
        currency = parseInt(prompt("Enter currency of money: R, G, E, $ "));
      break;
    case 2:
        document.write("Withdraw money!!!");
      break;
    case 3:
        document.write("The END!!!");
      break;
   
    default:
      document.write("R.T.F.M");
      break;
  }