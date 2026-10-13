import axios from "axios";

const REST_API_BASE_URL = "https://beautiful-tenderness-production-a2bf.up.railway.app/api/employees"


const api = axios.create({
    baseURL:REST_API_BASE_URL
})


// api.interceptors.request.use((config)=>
// {
//     const token =  localStorage.getItem("token");


//     if(token)
//     {
//         config.headers.Authorization = `Bearer ${token}`;
//     }

//     return config;
// })

export const listEmployees = () => api.get("/getAll");

export const createEmployees = (employee) => api.post("/save",employee)

export const deleteEmployees = (empployeeId) => api.delete("/deleteById",
    {
        params:
        {
            id:empployeeId
        }
    }
)


export const updateEmployees = (emploId,employees) => api.put("/update",employees,
    {
        params:
        {
            id:emploId
        }
    }
)


export const getSingleEmployee = (empId) => api.get("/getById",
    {
        params:
        {
            id:empId
        }
    }
)
