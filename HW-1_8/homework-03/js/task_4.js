const countTotalSalary = function (employees) {
    const values = Object.values(employees);

    let total = 0;

    for (const value of values) {
        total += value;
    }
    return total;
};