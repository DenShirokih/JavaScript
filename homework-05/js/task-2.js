class Account {
  constructor(name, age, followers) {
    this.name = name;
    this.age = age;
    this.followers = followers;
  }
  getInfo() {
    console.log(
      `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
    );
  }
}
const mango = new Account("Mango", 18, 1000);
mango.getInfo();

const limpopo = new Account("Limpopo", 20, 6969);
limpopo.getInfo();
