// List of employees with their current salaries
const employees = [
  { id: 1, name: "Alice", department: "sales", salary: 40000 },
  { id: 2, name: "Bob", department: "engineering", salary: 50000 },
  { id: 3, name: "Charlie", department: "marketing", salary: 45000 },
  { id: 4, name: "David", department: "sales", salary: 35000 },
  { id: 5, name: "Emily", department: "engineering", salary: 55000 },
];

// Function to increase salaries based on the department
function increaseSalaries(employees) {
  // Use the map function to iterate over each employee in the array

  // Use a switch statement to determine the salary increase based on department
  // Remember to use toFixed(1) to round the salary to one decimal place.

  // Return a new employee object with the updated salary

  // Return the new array of employees with updated salaries

  const updatedArray = employees.map(function (employee) {
    let newSalary = employee.salary;

    switch (employee.department) {
      case "sales":
        newSalary= (
          newSalary +
          (newSalary * 10) / 100
        ).toFixed(1);
break;
      case "engineering":
        newSalary = (
          newSalary +
          (newSalary * 15) / 100
        ).toFixed(1);
        break;

      default:
        newSalary = (
          newSalary +
          (newSalary * 5) / 100
        ).toFixed(1);
    }

    return {
        id: employee.id,
      name: employee.name,
      department: employee.department,
        salary: newSalary, 
      };
    });
 
  return updatedArray;
}

// You can call the function and log the result to check if the implementation is correct
console.log(increaseSalaries(employees));
