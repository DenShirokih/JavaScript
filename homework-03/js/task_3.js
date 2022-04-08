function findBestEmployee(employees) {
  let max = 0;
  let bestEmployee;

  for (const employee in employees) {
    const numOfTasks = employees[employee];
    if (numOfTasks > max) {
      max = numOfTasks;
      bestEmployee = employee;
    }
  }

  return bestEmployee;
}
console.log(
  findBestEmployee({
    ann: 321,
    david: 213,
    helen: 133,
    lorence: 99,
  })
);
