import React, { useEffect, useState } from 'react'

import { getSingleEmployee } from '../services/EmployeeServices';
import { useNavigate } from 'react-router-dom';

const UpdateEmployees = () => {


  const [empid,setEmpid] = useState('');

  const [notFound,setNotFound] = useState(false);

  const [employee,setEmployee] = useState(null);



  const goToSetEmployee = useNavigate();




  
    const SingleEmployee = async(e) =>
    {

      e.preventDefault();
      try
      {
        const response = await getSingleEmployee(empid);
        console.log(response.data);
        setEmployee(response.data);
        setNotFound(false);
      }
      catch(err)
      {
        console.log(err.response.data);
        setNotFound(true);
        setEmployee(null);
      }
    }
    
    return (
      <div className='w-full flex-1  flex  justify-center  p-4 md:p-8'>
      <section className='w-full max-w-3xl bg-cyan-600 mx-auto  flex justify-center flex-col rounded-2xl p-4 md:p-8'>
        <div className=' bg-white p-4 rounded-2xl flex flex-col gap-6'>
          <h1 className='text-2xl font-bold font-serif text-center'>Update Employees</h1>
          <div className='w-full border-2 mt-8 rounded-2xl p-4 bg-black/50 flex justify-center'>
            <input type="text" className='outline-none w-full text-center' onChange={(e)=>setEmpid(e.target.value)} placeholder='Enter the Employee Id to get the Employee for Update' />
          </div>
          <div className='w-full border-2 rounded-2xl p-2 bg-cyan-500'>
            <button onClick={SingleEmployee} className='text-2xl font-bold font-serif text-white w-full text-center cursor-pointer'>Get Employee</button>
          </div>
        </div>
          {employee && <div className='w-full max-w-2xl text-sm border-2 mx-auto p-2 bg-white mt-4 rounded-2xl'>
            <table className='w-full border-2'>
              <thead>
                <tr>
                  <th className='border-2  p-2'>Employee FirstName</th>
                  <th className='border-2'>Employee LastName</th>
                  <th className='border-2'>Employee Email</th>
                </tr>
              </thead>
              <tbody className='font-bold font-serif text-center'>
                <tr className='bg-cyan-500'>
                  <td className='border-2 p-2'>{employee.firstName}</td>
                  <td className='border-2 p-2'>{employee.lastName}</td>
                  <td className='border-2 p-2'>{employee.email}</td>
                </tr>
              </tbody>
            </table>
            <div className='w-full  flex justify-center '>
            <button onClick={()=>goToSetEmployee(`setEmployees?id=${employee.empId}`)} className='p-1 text-center font-bold font-serif  px-4 bg-cyan-600 border-2 cursor-pointer border-black mt-4 rounded-2xl text-white'>Update Employee</button>
            </div>
            </div>}
            {notFound && <div className='w-full mt-10 text-center '>
              <h1 className='text-2xl text-red-500 font-bold font-serif'>Employee not found for this Id</h1>
              </div>}
      </section>
    </div>
  )
}

export default UpdateEmployees