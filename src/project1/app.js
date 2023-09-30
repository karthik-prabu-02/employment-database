import React, {useState} from 'react'
import './App.css';

import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Employeedetails from './Employeedetails';
import Employeeinput from './Employeeinput';
import UpdateEmpdetails from './updateEmpdetails';

import SharedLayout from './SharedLayout';


const App = () => {
    const [ipdata,updIpdata] = useState({
        name : "",
        eID : "",
        phno : "",
        address : "",
        ws : "",
        dpt : "",
    });

    const [employee,updEmployee] = useState([]);
    
    const RecieveDel = (Deleteddata) => {
      updEmployee(Deleteddata)
    }
    const RecieveUpdate = (DatatoUpdate) => {
      updIpdata(DatatoUpdate);
      const updData = employee.filter(item=>item.eID !== DatatoUpdate.eID)
      updEmployee(updData);
      console.log(updData,"upd");
    }



  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<SharedLayout/>}>
              <Route index element={<Employeeinput ipdata={ipdata} updIpdata={updIpdata} employee={employee} updEmployee={updEmployee} />}/>
              <Route path='details' element={<Employeedetails employee={employee}/>}/>
              <Route path='updates' element={<UpdateEmpdetails employee={employee} updEmployee={updEmployee} RecieveDel={RecieveDel} RecieveUpdate={RecieveUpdate}/>}/>
            </Route>
        </Routes>
        
        
    </BrowserRouter>
  )
  

}

export default App;