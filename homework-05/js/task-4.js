class StringBuilder {
  constructor(str) {
    this._value = str;
  }
  get value() {
    return this._value;
  }
  append(str) {
    this._value = this._value + str;
  }
  prepend(str) {
    this._value = str + this._value;
  }
  pad(str) {
    this._value = str + this._value + str;
  }
}
const stringe = new StringBuilder(".");
stringe.append("^");
console.log(stringe.value);
stringe.prepend("^");
console.log(stringe.value);
stringe.pad("==");
console.log(stringe.value);
