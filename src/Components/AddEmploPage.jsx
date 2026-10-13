import { useState } from "react"
import { createEmployees } from "../services/EmployeeServices";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AddEmploPage = () => {


  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [email,setEmail] = useState('');


  const[loading,setLoading] = useState(false);


  const [errors,setErrors] = useState({});

  const goNavigate = useNavigate();



  const saveEmployess = (e) =>
  {
    e.preventDefault();

    const getEmployees = {firstName,lastName,email};

    console.log(getEmployees)

    const saveEmplo = async() =>
    {
      setLoading(true);
      try
      { 
        let getResponse = await createEmployees(getEmployees);
        console.log(getResponse.status);
      
         toast.success("Data Created Successfully")
      
        console.log(getResponse);
        goNavigate("/employees")
        setFirstName('');
        setLastName('');
        setEmail('');
      }
      catch(error)
      {
        setErrors(error.response.data)
        console.log(error.response.data)
        toast.error("Unable to create Data")
      }
      finally
      {
        setLoading(false);
      }



    }

    saveEmplo();

    console.log(getEmployees)

  }



  if(loading)
  {
    return <div className="w-full min-h-screen bg-black flex flex-col justify-center items-center">
      <div className="h-16 w-16 rounded-full border-4 border-white border-b-cyan-400 animate-spin">
      </div>
        <h1 className="mt-6 text-xl font-bold font-serif text-white">Adding Employees</h1>
    </div>
  }


  return (
    <div className="flex-1 w-full bg-gray-500 p-6 flex items-center justify-center">

      <div className="w-full max-w-3xl">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-16">
          <h1 className="text-center font-bold font-serif text-2xl">Add Employees</h1>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-4 md:mt-8" onSubmit={saveEmployess}>
            <div>
              <label htmlFor="firstName"className="block font-bold font-serif mb-2">Enter Your First Name:</label>
              <div className={`w-full p-2  border-2 rounded-2xl ${errors.firstName?'border-red-500 border-2':''}`}>
                <input
                  id="firstName"
                  type="text"
                  className="w-full outline-none text-xl border-red-200"
                  value={firstName}
                  onChange={(e)=>{setFirstName(e.target.value); setErrors({})}}
                />
              </div>
                {errors.firstName && (<p className="text-red-600 mt-1">{errors.firstName}</p>)}
            </div>
            <div>
              <label htmlFor="lastName"className="block font-bold font-serif mb-2">Enter Your Last Name</label>
              <div className={`w-full p-2 border-2 rounded-2xl ${errors.lastName?'border-red-500':''}`}>
                <input
                  id="lastName"
                  type="text"
                  className="w-full outline-none text-xl"
                  value={lastName}
                   onChange={(e)=>{setLastName(e.target.value); setErrors({})}}
                />
              </div>
                {errors.lastName && (<p className="text-red-600 mt-1 ">{errors.lastName}</p>)}
            </div>
            <div className="md:col-span-2">
              <label
                htmlFor="email" className="block font-bold font-serif mb-2"> Enter Your Email:</label>
              <div className={`w-full p-2 border-2 rounded-2xl ${errors.email?'border-red-500':errors.dupliEmail?'border-red-500':''}`}>
                <input id="email" type="email" className='w-full  font-bold font-serif text-xl outline-none' value={email}  onChange={(e)=>{setEmail(e.target.value); setErrors({})}}/>
              </div>
              {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
              {errors.dupliEmail && <p className="text-red-500 mt-1">{errors.dupliEmail}</p>}
            </div>
            <button  className='w-full cursor-pointer  p-2 border-2  rounded-2xl text-white bg-blue-700 text-center font-bold font-serif text-xl   md:col-span-2'>Submit</button></form>
        </div>
      </div>
    </div>
  )
}


export default AddEmploPage