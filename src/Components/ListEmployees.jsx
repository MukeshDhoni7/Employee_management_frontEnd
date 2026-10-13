import React,{useEffect, useState} from 'react'
import { listEmployees } from '../services/EmployeeServices'
import { useNavigate } from 'react-router-dom';



const ListEmployees = () => {

    const[employees,setEmployees] = useState([]);

    const [loading,setLoading] = useState(true);

    const navigator = useNavigate();

useEffect(()=>
{
    const getEmployees = async()=>
    {
        try
        {

            let response = await listEmployees();
            setEmployees(response.data);
        }catch(err)
        {
            console.error(err);
        }
        finally
        {
            setLoading(false);
        }
    }

    getEmployees();
},[])



const addEmployee = () =>
{
    navigator("/add-employees")
}


const deleteEmployees = () =>
{
    navigator("/delete-employees");
}


const updateEmployees = () =>
{
    navigator("/update-employees")
}

if (loading) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-600">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-white border-t-cyan-500"></div>

            <p className="mt-4 text-xl font-bold text-white">
                Loading Employees...
            </p>
        </div>
    );
}




console.log(employees)



  return (
    <div className='w-full flex flex-1 bg-gray-600 p-2 justify-center items-center '>
        <div className='w-full flex flex-col  justify-center max-h-150   max-w-3xl bg-black/10  mx-auto  rounded-2xl md:p-10 p-2'>
        <div className='bg-white p-2 md:p-4 rounded-2xl'>
            <h1 className='text-center font-bold font-serif text-2xl' >List of Employees</h1>
            <div className='mt-4 max-h-80 overflow-y-auto overflow-x-auto '>
                <table  className='w-full min-w-[600px] border-2 border-collapse'>
                    <thead>
                        <tr>
                        <th className='border-2 border-black md:p-2 py-2 text-center'>S.No</th>
                        <th className='border-2 border-black md:p-2 py-2 text-center'>Email</th>
                        <th className='border-2 border-black md:p-2 py-2 text-center'>FirstName</th>
                        <th className='border-2 border-black md:p-2 py-2 text-center'>LastName</th>
                        <th className='border-2 border-black md:p-2 py-2 text-center'>Emp Id</th>
                        </tr>
                    </thead>
                    <tbody className='font-bold font-serif'>
                        {employees.map((emp,index)=>
                        (
                            <tr key={emp.empId} className='even:bg-white odd:bg-cyan-200' >
                                <td className='border-2 border-black md:p-2 py-2 text-center'>{index+1}</td>
                                <td className='border-2 border-black md:p-2 py-2 text-center'>{emp.email}</td>
                                <td className='border-2 border-black md:p-2 py-2 text-center'>{emp.firstName}</td>
                                <td className='border-2 border-black md:p-2 py-2 text-center'>{emp.lastName}</td>
                                <td className='border-2 border-black md:p-2 py-2 text-center'>{emp.empId}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        <div className='grid gap-4 mt-6 grid-cols-1 md:grid-cols-2'>
        <button className='w-full bg-cyan-500 text-white cursor-pointer rounded-2xl font-bold font-serif  md:col-span-1 p-1' onClick={updateEmployees}>Update Employees</button>
        <button className='w-full bg-cyan-500 text-white cursor-pointer rounded-2xl font-bold font-serif md:col-span-1 p-1' onClick={deleteEmployees}>Delete Employees</button>
        <button className='w-full bg-cyan-500 text-white cursor-pointer rounded-2xl font-bold font-serif md:col-span-2 p-1' onClick={addEmployee}>Add Employees</button>
        </div>
        </div>
    </div>
  )
}

export default ListEmployees