import React from "react"
import ListEmployees from "./ListEmployees"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import AddEmploPage from "./AddEmploPage"
import DeleteEmployees from "./DeleteEmployees"
import UpdateEmployees from "./UpdateEmployees"
import SetEmployee from "./SetEmployee"
import { Toaster } from "react-hot-toast"

function App() {

  return (
    <>
    <Toaster position="top-right"></Toaster>
    <BrowserRouter>
    <div className="min-h-screen flex flex-col">

      <Header/>

      <Routes>
        <Route path="/" element={<ListEmployees/>}></Route>
        <Route path="/employees" element={<ListEmployees/>}></Route>
        <Route path="/add-employees" element={<AddEmploPage/>}/>
        <Route path="/delete-employees" element={<DeleteEmployees/>}></Route>
        <Route path="/update-employees">
          <Route index element={<UpdateEmployees/>}></Route>
          <Route path="setEmployees" element={<SetEmployee/>}></Route>
        </Route>
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
    </>
  )
}

export default App
