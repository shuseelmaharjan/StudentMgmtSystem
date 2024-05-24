import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSidebar } from './SidebarContext';
import { FaHome } from "react-icons/fa";
import { PiGearSixBold } from "react-icons/pi";
import { PiStudent } from "react-icons/pi";
import { FaPlus } from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi";
import { PiChalkboardTeacherFill } from "react-icons/pi";
import { IoBookSharp } from "react-icons/io5";
import { MdLibraryBooks } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";

const Sidebar = () => {
  const { isSidebarOpen, 
    isCourseSubmenuOpen, isStudentSubmenuOpen, 
    toggleCourseSubmenu, toggleStudentSubmenu, 
    toggleTeacherSubmenu, isTeacherSubmenuOpen, 
    toggleClassSubMenu, isClassSubmenuOpen
   } = useSidebar();

  return (
    <div className={`fixed inset-y-0 left-0 ${isSidebarOpen ? 'w-64' : 'w-16'} bg-slate-900 text-white transition-all duration-300`}>
      <div className="flex items-center justify-center p-4 select-none">
        <div className="text-2xl font-bold">
          {isSidebarOpen ? 'SMS' : 'SMS'}
        </div>
      </div>
      <ul className="mt-4">
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? 'bg-yellow-500 p-2 block hover:bg-yellow-600 text-black' : 'p-2 block hover:bg-gray-700'
            }
            exact
          >
            {isSidebarOpen ? <FaHome className="inline-block mr-2 text-xl" /> : <FaHome className="text-xl" />}
            {isSidebarOpen && ' Home'}
          </NavLink>
        </li>
        <li className="select-none">
          <div onClick={toggleCourseSubmenu} className="cursor-pointer p-2 block hover:bg-gray-700">
            {isSidebarOpen ? <IoBookSharp className="inline-block mr-2 text-xl" /> : <span className="text-xl"><IoBookSharp FaHome className="text-xl" /></span>}
            {isSidebarOpen && ' Courses'}
          </div>
          <div className={`overflow-hidden transition-all duration-300 ${isCourseSubmenuOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
            <ul className="pl-4">
              <li>
                <NavLink to="/list-courses" className={({ isActive }) => isActive ? 'bg-yellow-500 p-2 block hover:bg-yellow-600' : 'p-2 block hover:bg-gray-700'} exact>
                  {isSidebarOpen ? <MdLibraryBooks className="inline-block mr-2 text-xl" /> : <MdLibraryBooks className="text-xl" />}
                  {isSidebarOpen && ' Courses List'}
                </NavLink>
              </li>
              <li>
                <NavLink to="/add-course" className={({ isActive }) => isActive ? 'bg-yellow-500 p-2 block hover:bg-yellow-600' : 'p-2 block hover:bg-gray-700'}
                  exact>
                  {isSidebarOpen ? <FaPlus className="inline-block mr-2 text-xl" /> : <FaPlus className='text-xl' />}
                  {isSidebarOpen && <span>Add Course</span>}
                </NavLink>
              </li>
            </ul>
          </div>
        </li>
        <li className="select-none">
          <div onClick={toggleStudentSubmenu} className="cursor-pointer p-2 block hover:bg-gray-700">
            {isSidebarOpen ? <PiStudent className="inline-block mr-2 text-xl" /> : <span className='text-xl'><PiStudent /></span>}
            {isSidebarOpen && ' Students'}
          </div>
          <div className={`overflow-hidden transition-all duration-300 ${isStudentSubmenuOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
            <ul className="pl-4">
              <li>
                <NavLink to="/list-students" className={({ isActive }) => isActive ? 'bg-yellow-500 p-2 block hover:bg-yellow-600' : 'p-2 block hover:bg-gray-700'} exact>
                  {isSidebarOpen ? <PiStudent className="inline-block mr-2 text-xl" /> : <PiStudent className='text-xl' />}
                  {isSidebarOpen && <span>Student List</span>}
                </NavLink>
              </li>
              <li>
                <NavLink to="/add-student" className={({ isActive }) => isActive ? 'bg-yellow-500 p-2 block hover:bg-yellow-600' : 'p-2 block hover:bg-gray-700'} exact>
                  {isSidebarOpen ? <FaPlus className="inline-block mr-2 text-xl" /> : <FaPlus className='text-xl' />}
                  {isSidebarOpen && <span>Add Student</span>}
                </NavLink>
              </li>
            </ul>
          </div>
        </li>
        <li className="select-none">
          <div onClick={toggleTeacherSubmenu} className='cursor-pointer p-2 block hover:bg-gray-700'>
            {isSidebarOpen ? <GiTeacher className="inline-block mr-2 text-xl" /> : <GiTeacher className='text-xl' />}
            {isSidebarOpen && ' Teachers'}
          </div>
          <div className={`overflow-hidden transition-all duration-300 ${isTeacherSubmenuOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
            <ul className="pl-4">
              <li>
                <NavLink to="/list-teachers" className={({ isActive }) => isActive ? 'bg-yellow-500 p-2 block hover:bg-yellow-600' : 'p-2 block hover:bg-gray-700'} exact>
                  {isSidebarOpen ? <PiChalkboardTeacherFill className="inline-block mr-2 text-xl" /> : <PiChalkboardTeacherFill className='text-xl' />}
                  {isSidebarOpen && <span>List Teachers</span>}
                </NavLink>
              </li>
              <li>
                <NavLink to="/add-teacher" className={({ isActive }) => isActive ? 'bg-yellow-500 p-2 block hover:bg-yellow-600' : 'p-2 block hover:bg-gray-700'} exact>
                  {isSidebarOpen ? <FaPlus className="inline-block mr-2 text-xl" /> : <FaPlus className='text-xl' />}
                  {isSidebarOpen && <span>Add Teacher</span>}
                </NavLink>
              </li>
            </ul>
          </div>
        </li>
        <li className="select-none">
          <div onClick={toggleClassSubMenu} className='cursor-pointer p-2 block hover:bg-gray-700'>
            {isSidebarOpen ? <SiGoogleclassroom  className="inline-block mr-2 text-xl" /> : <SiGoogleclassroom  className='text-xl' />}
            {isSidebarOpen && ' Classes'}
          </div>
          <div className={`overflow-hidden transition-all duration-300 ${isClassSubmenuOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
            <ul className="pl-4">
              <li>
                <NavLink to="/list-classes" className={({ isActive }) => isActive ? 'bg-yellow-500 p-2 block hover:bg-yellow-600' : 'p-2 block hover:bg-gray-700'} exact>
                  {isSidebarOpen ? <SiGoogleclassroom className="inline-block mr-2 text-xl" /> : <SiGoogleclassroom className='text-xl' />}
                  {isSidebarOpen && <span>List Classroom</span>}
                </NavLink>
              </li>
              <li>
                <NavLink to="/add-class" className={({ isActive }) => isActive ? 'bg-yellow-500 p-2 block hover:bg-yellow-600' : 'p-2 block hover:bg-gray-700'} exact>
                  {isSidebarOpen ? <FaPlus className="inline-block mr-2 text-xl" /> : <FaPlus className='text-xl' />}
                  {isSidebarOpen && <span>Add Class</span>}
                </NavLink>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive ? 'bg-yellow-500 p-2 block hover:bg-yellow-600 text-black' : 'p-2 block hover:bg-gray-700'
            }
            exact
          >
            {isSidebarOpen ? <PiGearSixBold className="inline-block mr-2 text-xl" /> : <PiGearSixBold className="text-xl" />}
            {isSidebarOpen && ' Settings'}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
