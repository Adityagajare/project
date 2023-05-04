import React from 'react'
// import Navbar from './navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './authentication/Login';
import Register from './authentication/Register';
import Home from './pages/Home';
import About from './authentication/About';
import Gallery from './authentication/Gallery';
import AdminRegister from './Admin/AdminRegister';
import PublicRoute from './routes/PublicRoute';
import ProtectedRoute from './routes/ProtectedRoute';
import AdminDashBoard from './Admin/AdminDashBoard';
import AdminManagerRegister from './Admin/AdminManagerRegister';
import ViewAcademyManager from './Admin/ViewAcademyManager';
import ManagerDetails from './Admin/ManagerDetails';
import AcademyManagerUpdate from './Admin/AcademyManagerUpdate';
import AddAcademy from './Admin/AddAcademy';
import ViewAcademyTable from './Admin/ViewAcademyTable';
import EditAcademy from './Admin/EditAcademy';
import AddBranch from './Admin/AddBranch';

const App = () => {
  return (
   <Router>
    {/* <Navbar/> */}
    <Routes>
      <Route path='/adminregister' element={<AdminRegister/>}/>
      <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
      <Route path='/login' element={<PublicRoute><Login/></PublicRoute>}/>
      <Route path='/register' element={<PublicRoute><Register/></PublicRoute>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/admindashboard' element={<AdminDashBoard/>}>
        <Route path='academymanagerregister' element={<AdminManagerRegister/>}/>
        <Route path='viewacademymanager' element={<ViewAcademyManager/>}/>
      
      <Route path='/admindashboard/managerdetails/:id' element={<ManagerDetails/>}/>
      <Route path='/admindashboard/academymanagerupdate/:id' element={<AcademyManagerUpdate/>}/>
      <Route path='/admindashboard/addacademy/:id' element={<AddAcademy/>}/>
      <Route path='/admindashboard/viewacademytable' element={<ViewAcademyTable/>}/>
      <Route path='/admindashboard/editacademy/:id' element={<EditAcademy/>}/>
      <Route path='/admindashboard/addbranch/:id' element={<AddBranch/>}/>
      </Route>
    </Routes>
   </Router>
  )
}

export default App