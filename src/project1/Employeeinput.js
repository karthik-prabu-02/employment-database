import React, { useState } from 'react';


const Employeeinput = ({employee,updEmployee,ipdata,updIpdata}) => {
    const[errorName,updErrorname]=useState(false);
    const[errorID,updErrorID]=useState(false);
    const[uniqueeID, setUniqueeID] = useState(true);
    const[errorphno,updErrorphno]=useState(false);
    const[errordpt,updErrordpt]=useState(false);
    const[erroraddress,updErroraddress]=useState(false);
    

    const Ipname = (e) => {
        updIpdata({...ipdata,name:e.target.value});
        
    }
    const Ipid = (e) => {
        updIpdata({...ipdata,eID:e.target.value});
        
        
        const Unique = !employee.some((item) => item.eID === e.target.value);
        setUniqueeID(Unique);
        console.log(uniqueeID);
    }
    const Ipphno = (e) => {
        updIpdata({...ipdata,phno:e.target.value});

    }
    const Ipadd = (e) => {
        updIpdata({...ipdata,address:e.target.value});
        
    }
    const Ipws = (e) => {
        
        updIpdata({...ipdata, ws: e.target.checked });
      
    }
    const Ipdpt = (e) => {
        updIpdata({...ipdata,dpt:e.target.value});
    }



    const Errormsg = () => {
        let Error = true;
    
        if (!ipdata.name) {
          updErrorname(true);
          Error = false;
        } else {
          updErrorname(false);
        }
    
        if (!ipdata.phno || ipdata.phno.length !== 10) {
          updErrorphno(true);
          Error = false;
        } else {
          updErrorphno(false);
        }

        if (!ipdata.eID || ipdata.eID.length < 6 ) {
            updErrorID(true);
            Error = false;
          } else {
            updErrorID(false);
          }
        if (!ipdata.address) {
            updErroraddress(true);
            Error = false;
          } else {
            updErroraddress(false);
        }
        if (!ipdata.dpt) {
            updErrordpt(true);
            Error = false;
          } else {
            updErrordpt(false);
        }
        return Error;
      };




    const Addemp = () => {

            if (!Errormsg()) {
               
                return;
            }

            
            const UniqueeID = employee.find((item) => item.eID === ipdata.eID);

            if (UniqueeID) {
                
                return;
            }
            else{

                const updatedEmployee = [...employee, ipdata];
                updEmployee(updatedEmployee);
                
                
                updIpdata({
                    
                    name : "",
                    eID : "",
                    phno : "",
                    address : "",
                    ws : "",
                    dpt : "",
                });

            }
        
        
        console.log(employee);
    }
  
  
  
    return (
    <>
        <div className='form_body'>
            <form className='form'>
                <label htmlFor='name'>Employee Name</label>
                <input
                    type="text" 
                    id="name"  
                    value={ipdata.name}
                    onChange={Ipname}
                    required
                />
                 {errorName && <p style={{ color: 'red' }}>Please enter the Name</p>}
            </form>
            <form className='form'>
                <label htmlFor='eID'>Employee ID</label>
                <input 
                    type="number" 
                    id="eID" 
                    value={ipdata.eID}
                    onChange={Ipid}
                    required
                />
                {errorID  && <p style={{ color: 'red' }}>Please enter the Valid ID</p>}
                {!uniqueeID && <p style={{ color: 'red' }}>Employee Id already exist</p>}
            </form>

            <form className='form'>
                <label htmlFor='phno'>Phone Number</label>
                <input
                    type="number"
                    style={{ scrollPaddingInline: 'none' }} 
                    id="phno" 
                    maxLength={10}
                    value={ipdata.phno}
                    onChange={Ipphno}
                    required
                />
                {errorphno && (
                    <p style={{ color: 'red' }}>Please enter the valid phone number</p>
                )}
            </form>
              
            <form className='form'>
                <label htmlFor='address'>Address</label><br/>
                <textarea
                    type="text" 
                    id="address" 
                    rows={5}
                    value={ipdata.address}
                    onChange={Ipadd}
                    required
                /><br/>
                {erroraddress && <p style={{ color: 'red' }}>Please enter the Address</p>}
            </form>
            <form className='form'>
                <label htmlFor='ws' id='label_ws'><span>Working Status</span>
                    <input
                        type="checkbox" 
                        id="ws"
                        checked={ipdata.ws}
                        onChange={Ipws}
                        required
                    />
                </label><br/>
            </form>
            <form className='form'>    
                <label htmlFor='dpt'>Department</label>
                <input
                    type="text" 
                    id="dpt" 
                    value={ipdata.dpt}
                    onChange={Ipdpt}
                    required
                />
                {errordpt && <p style={{ color: 'red' }}>Please enter the Department</p>}

            </form>
            <button type='button' className='form_btn' onClick={Addemp}>ADD EMPLOYEE</button>

        </div>
    </>
  )
}

export default Employeeinput;