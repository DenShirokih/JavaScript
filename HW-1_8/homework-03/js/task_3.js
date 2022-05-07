const findBestEmployee = function (employees) {
  const entries = Object.entries(employees);
  let maxValue = 0;
  let bestEmployee;
  for (const entry of entries) {
    if (entry[1] > maxValue) {
      maxValue = entry[1];
      bestEmployee = entry[0];
    }
  }
  return bestEmployee;
};
console.log(
  findBestEmployee({
    ann: 321,
    david: 213,
    helen: 133,
    lorence: 990,
  })
);
