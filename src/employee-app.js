import React from "react";

export default function EmployeeApp(props){
    return(
        <>
        <nav>

        <div>
        <h2 className="employeeApp">employee app</h2>
        </div>

        <div>
            <button  onClick={props.darkMode}className="darkMode" id="darkMode"><i class="fa-solid fa-moon fa-flip-horizontal" ></i></button>
        <button onClick={props.darkMode} className="darkMode"><i class="fa-solid fa-moon"></i>  </button>
        </div>

        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}> 
         <input id="searchId" type="text" placeholder="search id "/>
        </div>
        </nav>
  
        {/* add employee start */}
        <div className='addEmployee'>
        <i onClick={props.addEmployee} className="fa-solid fa-plus" style={{color:" #63E6BE"}}> add employee</i>
  
        </div>
        {/* add employee end */}
  
        {/*employeeDataDiv  start */}
        <div className='employeeDataDiv'>
  <div className='left'>
        <input id='addImg' type="file"/>
        <i className="fa-solid fa-image"></i>
  </div>
  <div className='right'>
  <i onClick={props.crossBtn} className="fa-sharp fa-solid fa-delete-left" ></i>
  <input id='addName' placeholder='enter name' type="text"/>
  <input id='addFather' placeholder='enter father name' type="text"/>
  <input id='addWork' placeholder='enter work' type="text"/>
  <input id='addSalary' placeholder='enter salary'  type="text"/>
  <div className='saveData'>
  <button onClick={props.saveData}  id='saveDataBtn'> save data</button>
  </div>
  
  </div>
        </div>
        {/*employeeDataDiv end */}
  
        {/* storeEmployeeData start */}
        <div className='storeEmployeeData'>
   <table>
    <tr>
    <th>id</th>
    <th>img</th>
    <th>name</th>
    <th>father name</th>
    <th>work</th>
    <th>salary</th>
    <th>edit or delete</th>
    {/* <th><i class="fa-solid fa-pen-to-square"></i>  <i class="fa-solid fa-trash-can"></i></th> */}
    </tr>
  <tbody>
  <tr>
    <td>fh</td>
    <td>fh</td>
    <td>fh</td>
    <td>fh</td>
    <td>fh</td>
<td>xd</td>
    <td className="deleteAndEdit"><i class="fa-solid fa-pen-to-square"></i>  <i class="fa-solid fa-trash-can"></i></td>
  </tr>
  <tr>
    <td>fh</td>
    <td>fh</td>
    <td>fh</td>
    <td>fh</td>
    <td>fh</td>
    <td>fh</td>
    <td className="deleteAndEdit"><i class="fa-solid fa-pen-to-square"></i>  <i class="fa-solid fa-trash-can"></i></td>
  </tr>
  </tbody>
   </table>
   
        </div>
        {/* storeEmployeeData end */}
      </>
    )
}