// Write your solution in this file!

const employee = {
  name: "Joe",
  streetAddress: "1st street"
  
  
};


function updateEmployeeWithKeyAndValue(employee, key, value) {


  const obj = { ...employee };

  
  return {
    ...obj,
    [key]: value,
  }
};



function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value ) {

  employee[ key ] = value;
  



  return employee;
}



function deleteFromEmployeeByKey(employee, key) {

  const obj = { ...employee };

  delete obj.key;



  return {
    ...obj.key
  }

}

function destructivelyDeleteFromEmployeeByKey(employee, key) {

  const obj = { ...employee };
  employee[key] = obj.key;
  delete employee.key;
  

  

  console.log(obj.key);
  console.log(employee.key);

  return employee;
}

