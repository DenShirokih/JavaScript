const countTotalSalary = function (employees) {
    let total = 0;
    for (const employee in employees) {
        total += employees[employee]
    }
    return total;
};
console.log(
    countTotalSalary({
        mango: 100,
        poly: 150,
        alfred: 80,
    }),
);