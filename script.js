// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
const employeesArray = [];

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  while(true){
    const firstName = prompt("First Name: ");
   
    const lastName = prompt("Last Name: ");
    
    const salaryInput = prompt("Salary: ");
    const salary = parseInt(salaryInput);

    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary
    };

    employeesArray.push(employee);

    const addMoreEmployees = confirm("Do you want to add more employees?");
    if(!addMoreEmployees) break;

  }
  return employeesArray;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  const totalSalary = employeesArray.reduce((accumulator, employee) => {
    return accumulator + employee.salary;
  }, 0);

  const avergeSalary = totalSalary / employeesArray.length;

  return console.log(`The averge salary between our ${employeesArray.length} employees is ${avergeSalary}`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  const randomNum = Math.floor(Math.random() * employeesArray.length);
  
  const randomEmployee = employeesArray[randomNum];
  const randomName = randomEmployee.firstName;

  return console.log(`Congratulations ${randomName}, you were choosen randomly. Yuppy!`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
