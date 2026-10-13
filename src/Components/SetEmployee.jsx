import React, { useEffect, useState } from 'react'

import { useSearchParams } from 'react-router-dom';

import { updateEmployees } from '../services/EmployeeServices';

import { getSingleEmployee } from '../services/EmployeeServices';


import { useNavigate } from 'react-router-dom';

const SetEmployee = () => {

    const [firstName,setFirstName] = useState('');
    const [lastName,setLasttName] = useState('');
    const [email,setEmail] = useState('');

    const naviate = useNavigate();

    const [singleEmployee,setSingleEmployee] = useState(null)

    const [serchId] = useSearchParams();

    const empId = Number(serchId.get("id"));

    console.log(`Employee id is${empId}`)


    const updateEmployeeDetails = async(e) =>
    {
        e.preventDefault();

        const getupdatedEmployees = {
            firstName:firstName.trim() === ''?singleEmployee.firstName:firstName,
            lastName:lastName.trim()===''?singleEmployee.lastName:lastName,
            email:email.trim()===''?singleEmployee.email:email
        };


        try
        {
            const response = await updateEmployees(empId,getupdatedEmployees);
            naviate(-1);
        }
        catch(err)
        {
            console.log(err.response.data);
        }
    }


    useEffect(()=>
    {
        const getSingles = async() =>
        {
            const response = await getSingleEmployee(empId);

            console.log(response.data);
            setSingleEmployee(response.data);
        }
        getSingles();
    },[])

  return (
    <div className=' flex flex-1 p-4 md:p-8  bg-gray-500'>
        <section className='w-full max-w-4xl bg-white shadow-2xl mx-auto rounded-2xl'>
            <div className='p-4 md:p-6 '>
                <h1 className='font-bold font-serif text-2xl text-center'>Update Your Details</h1>
                <div className='border-2 p-4 md:p-8 mt-4 md:mt-8 rounded-2xl'>
                    <form action="" className='grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10'>
                        <div className=' col-span-1 md:col-span-1'>
                            <label className='font-bold font-serif'>Change FirstName</label>
                            <div className='w-full border-2 rounded-2xl  p-2 '>
                                <input type="text" className='w-full outline-none font-bold font-serif' onChange={(e)=>setFirstName(e.target.value)} />
                            </div>
                        </div>
                        <div className=' col-span-1 md:col-span-1'>
                            <label className='font-bold font-serif'>Change LastName</label>
                            <div className='w-full border-2 rounded-2xl  p-2 '>
                                <input type="text" className='w-full outline-none font-bold font-serif'  onChange={(e)=>setLasttName(e.target.value)}/>
                            </div>
                        </div>
                        <div className='col-span-1 md:col-span-2'>
                            <label className='font-bold font-serif'>Change Email</label>
                            <div className='w-full border-2 rounded-2xl  p-2'>
                                <input type="text" className='w-full outline-none font-bold font-serif'  onChange={(e)=>setEmail(e.target.value)} />
                            </div>
                        </div>
                        <div className='col-span-1 md:col-span-2  p-2 rounded-2xl bg-blue-600 text-white border-2 border-black'>
                            <button className='w-full text-lg font-bold font-serif cursor-pointer' onClick={updateEmployeeDetails}>Update Employees</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </div>
  )
}

export default SetEmployee