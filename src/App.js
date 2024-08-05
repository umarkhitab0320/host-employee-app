import React  from 'react';
// import React, { useState } from 'react';
import './App.css';
import './JavascriptCss.css';
import './Responsive.css'
import EmployeeApp from './employee-app';


// click on add employee 
let addEmployee= ()=>{
  let employeeDataDiv=document.querySelector('.employeeDataDiv')
    employeeDataDiv.classList.toggle('showAddEmployee')
}

let crossBtn=()=>{
  let employeeDataDiv=document.querySelector('.employeeDataDiv')
  employeeDataDiv.classList.toggle('showAddEmployee')

// employeeDataDiv.style.display='none'
}


// dark mode
let darkMode=()=>{
  let body=document.querySelector('body')
  body.style.backgroundColor='black'
}

// save data
let saveDataBtn=()=>{
  // let storeData=[] 

// let addName=document.querySelector('.addName')
// let addFather=document.querySelector('.addfather')
// let addWork=document.querySelector('.addWork')
// let addSalary=document.querySelector('.addSalary')
// let tbody=document.querySelector('tbody')
// tbody.innerHTML=''

// tbody.innerHTML=`
// <tr>
// <td>
// ${addName.value}
// </td>
// </tr>
// `
// for(let i=0; i<storeData.length;i++){
// tbody +=
// <tr>
// <td>${addName.value}</td>

// </tr>


//   }
}

function App() {
  return (
<>
<EmployeeApp addEmployee={addEmployee} crossBtn={crossBtn} darkMode={darkMode} saveData={saveDataBtn}/>

</>
  );
}

export default App;
