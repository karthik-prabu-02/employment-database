import React from 'react';


const Employeedetails = ({employee}) => {
  return (
    <>
        <div className='Table1'>
            <h1>Employees Details</h1>
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
                        </tr>
                        )
                        })
                    }
                    </tbody>
                </table>
        </div>
                


    </>
  )
}

export default Employeedetails;