const Account = function (login, email) {
  this.login = login;
  this.email = email;
};
Account.prototype.getInfo = function () {
  console.log(`login: ${this.login} email: ${this.email}`);
};
const mango = new Account("Mangozedog", "mango@dog.woof");

const polly = new Account("Poly", "poly@mail.com");

polly.getInfo();
mango.getInfo();
