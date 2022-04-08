const countProps = function (obj) {
  const keys = Object.keys(obj);
  return keys.length;
};
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3
