// src/App.jsx
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SidebarProvider } from './components/Sidebar/SidebarContext';
import Login from './components/Login/Login';
import ForgetPassword from './components/ForgetPassword/ForgetPassword';
import Dashboard from './components/Dashboard/Dashboard';
import Settings from './components/Settings/Settings';
import AddCourse from './components/Courses/AddCourse';
import ListCourse from './components/Courses/ListCourse';
import Students from './components/Students/Students';
import AddStudent from './components/Students/AddStudent';
import ListTeachers from './components/Teachers/Teachers';
import AddTeacher from './components/Teachers/AddTeacher';

function App() {
  return (
    <SidebarProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/add-course" element={<AddCourse />} />
          <Route path="/list-courses" element={<ListCourse />} />
          <Route path="/list-students" element={<Students />} />
          <Route path="/add-student" element={<AddStudent />} />
          <Route path="/list-teachers" element={<ListTeachers />} />
          <Route path="/add-teacher" element={<AddTeacher />} />
        </Routes>
      </Router>
    </SidebarProvider>
  );
}

export default App;
