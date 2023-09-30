import React from 'react';
import { useNavigate } from 'react-router-dom';

const UpdateEmpdetails = ({employee,RecieveDel,RecieveUpdate}) => {
  
  const NavigatetoHome = useNavigate();



  const Delete = (selectedeID) => {
    const Deleteddata = employee.filter((item)=>item.eID!==selectedeID);
    RecieveDel(Deleteddata);
  }
  const Update = (selectedID) => {
    const DatatoUpdate = employee.find((item)=>item.eID === selectedID);
    RecieveUpdate(DatatoUpdate);
    console.log(DatatoUpdate);
    NavigatetoHome('/')
  }
  
  
  
  return (
    <div className='Table1'>
            <h1>Update Employees Details</h1>
            <table>
                    <thead>
                        <tr>
                            <th>SINO</th>
                            <th>EMPLOYEE NAME</th>
                            <th>EMPLOYEE ID</th>
                            <th>PHONE NUMBER</th>
                            <th>WORKING STATUS</th>
                            <th>DEPARTMENT</th>
                            <th>ADDRESS</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        employee.map((item,index)=>{
                        return(
                        <tr key={item.eID}>
                            <td>{index+1}</td>
                            <td>{item.name}</td>
                            <td>{item.eID}</td>
                            <td>{item.phno}</td>
                            <td>{item.ws}{item.ws===true? <p>yes</p>:<p>No</p>}</td>
                            <td>{item.dpt}</td>
                            <td>{item.address}</td>
                            <td id='actions'>
                              <button type='button' id='update' onClick={()=>Update(item.eID)}>Update</button>
                              <button type='button' id='delete' onClick={()=>Delete(item.eID)}>Delete</button>
                            </td>
                        </tr>
                        )
                        })
                    }
                    </tbody>
              </table>
      </div>
  )
}

export default UpdateEmpdetails;