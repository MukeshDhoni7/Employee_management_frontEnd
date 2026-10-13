import React, { useEffect, useState } from 'react'

import { listEmployees } from '../services/EmployeeServices'

import { deleteEmployees } from '../services/EmployeeServices';
import { useNavigate } from 'react-router-dom';

const DeleteEmployees = () => {


    const [employees,setEmployees] = useState([]);


    const goNavigate = useNavigate();



    const deleteEmplo = async(empId) =>
    {


        const getId = empId;

        try
        {
            let response = await deleteEmployees(getId);
            console.log(response.data)
            goNavigate("/employees")
            setEmployees(employees.filter((ele)=>
            (
                ele.empId!==empId
            )))
        }
        catch(err)
        {
            console.log(err.response.data)
        }
    }

useEffect(()=>
{
    const showEmployees = async() =>
    {
        try
        {
            let response = await listEmployees();
            setEmployees(response.data)
        }
        catch(err)
        {
            console.log(err)
        }
    }

    showEmployees();
},[])


  return (
    <div className='w-full flex flex-1 p-2'>
        <div className='w-full max-w-4xl  rounded-2xl bg-black/20 mx-auto p-4 md:p-8 flex justify-center items-center'>
        <section className='bg-white w-full   p-4 rounded-2xl max-h-100   shadow-2xl overflow-y-auto overflow-x-auto'>
            <h1 className='text-center text-xl font-bold font-serif'>Delete Employees</h1>
            <div className=''>
                <table className='border-2 border-black w-full min-w-[700px]'>
                    <thead>
                        <tr>
                            <th className='border-2 border-black p-2'>Employee Id</th>
                            <th className='border-2 border-black p-2'>Employee Name</th>
                            <th className='border-2 border-black p-2'>Employee Email</th>
                            <th className='border-2 border-black p-2'>Delete</th>
                        </tr>
                    </thead>
                        <tbody className='text-center'>
                            {employees.map((ele)=>(
                                <tr  key={ele.empId} className='odd:bg-cyan-400 even:bg-white'>
                                    <td className='border-2 border-black p-2'>{ele.empId}</td>
                                    <td className='border-2 border-black p-2'>{`${ele.firstName} ${ele.lastName}`}</td>
                                    <td className='border-2 border-black p-2'>{ele.email}</td>
                                    <td className='border-2 bg-white py-2 '>
                                    <button className=' w-full max-w-20  font-bold font-serif bg-cyan-500 shadow-2xl cursor-pointer' onClick={()=>deleteEmplo(ele.empId)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                </table>
            </div>
        </section>
        </div>
    </div>
  )
}

export default DeleteEmployees