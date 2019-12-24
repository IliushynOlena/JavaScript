// Написати функцію конструктор "Банківський рахунок" (Account), який містить:
// Номер рахунку
// Розмір коштів на рахунку
// Назва валюти рахунку (рублі, гривні, евро тощо), для позначення якої можна скористатись одним символом: R, G, E, $ тощо
// Забезпечити можливість:
// Відкривати рахунок та первинно вносити гроші на рахунок
// Знімати гроші з рахунку
// Докладати гроші на рахунок
let AccountNum;
let choice = parseInt(
  prompt(
    "Cтворити новий рахунок: 1 \nЗняти гроші: 2 \nПереказати на інший рахунок: 3 \nВихід: 4"
  )
);
switch (choice) {
  case 1:
    document.write("\nВи створили новий рахунок.\n");
    numberAcccount = parseInt(prompt("Введіть номер рахунку"));
    startmoney = parseInt(prompt("Введіть суму грошей на рахунку"));
    currency = prompt("Введь валюту: R, G, E, $");

    AccountNum = new BankAccount(numberAcccount, startmoney, currency);
    AccountNum.ShowAccount();
    break;
  case 2:
    document.write("Зняття готівки!!!");
    let withdraw_money = parseInt(prompt("Введіть суму, яку хочете зняти:"));
    AccountNum.WithdrawMoney(withdraw_money);
      break;
  case 3:
    document.write("Переказати на інший рахунок!");
    break;
  case 4:
    document.write("Вихід!!!");
    break;

  default:
    document.write("R.T.F.M");
    break;
}
function BankAccount(numberAccount, startmoney, currency) {
  this.numberAccount = numberAccount;
  this.startmoney = startmoney;
  this.currency = currency;

  this.ShowAccount = function() {
    console.log("Номер рахунку - ", this.numberAccount);
    console.log("Сума коштів на рахунку - ", this.startmoney);
    console.log("Валюта - ", this.currency);
  };
  this.WithdrawMoney = function(sum) {
    while (true) {
      if (sum < this.startmoney) {
        this.startmoney -= sum;
        this.ShowAccount();
        break;
      } else {
        console.log("Недостатньо коштів на рахунку");
        sum = parseInt(prompt("Введіть суму, яку ви хочете зняти з рахунку"));
      }
    }
  };
  this.AddMoney = function(sum) {
    while (true) {
      if (sum > 0) {
        this.startmoney += sum;
        this.ShowAccount();
        break;
      } else {
        write.document(" Виникла помилка");
        sum = parseInt(
          prompt("Введіть суму, яку ви хочете покласти на рахунок")
        );
      }
    }
  };
}