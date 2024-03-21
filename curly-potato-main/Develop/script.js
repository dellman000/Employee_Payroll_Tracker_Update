// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
 





// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects

  let employeesArray=[];// where we will store our workers as objects
  // the next three varables will be used by the collectEmplyees as a temproary storage to pipe our data into the next employee object
  let firstNamecard
  let LastNameCard;
  let salaryCard;
  

  let next=true;// will be used to determin if we move forward or not

  while(next===true){

    while(!firstNamecard){
      //prompt for first name
      firstNamecard=prompt("Please enter your firstname");
    }
    //prompt for last name
    while(!LastNameCard){
      LastNameCard=prompt("Please enter your lastname");
    }
   
    while(!salaryCard){
       //prompt for salary
      salaryCard= +prompt("Please enter your salary");

    }
  // the new person to get piped
    let newperson={
      firstName:firstNamecard,
      lastName:LastNameCard,
      salary:salaryCard
    }
    //pipe the newperson into the Array
    employeesArray.push(newperson);
    //resetvalues for next person
    firstNamecard=null;
    LastNameCard=null;
    salaryCard=null;
    next= confirm("do you want to add another person");
  }

  
  return employeesArray
}



// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let sum=0;
  let size=employeesArray.length;
  employeesArray.forEach(element => {
    sum+=element.salary;
    //size++;
  });
  console.log("The average Salary between our "+size+" employee(s) is "+(sum/size).toLocaleString("en-US",{
    style:"currency",
    currency:"USD"
  }))
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  let index=Math.floor(Math.random() * employeesArray.length);
  
  console.log("Congrates to "+employeesArray[index].firstName+" "+employeesArray[index].lastName+", our random drawing winner!");
  
  
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
