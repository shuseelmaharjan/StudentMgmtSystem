import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSidebar } from './SidebarContext';

const Sidebar = () => {
  const { isSidebarOpen, isCourseSubmenuOpen, toggleCourseSubmenu } = useSidebar();

  return (
    <div className={`fixed inset-y-0 left-0 ${isSidebarOpen ? 'w-64' : 'w-16'} bg-gray-800 text-white transition-all duration-300`}>
      <div className="flex items-center justify-center p-4">
        <div className="text-2xl font-bold">
          {isSidebarOpen ? 'Std Mgmt System' : 'SMS'}
        </div>
      </div>
      <ul className="mt-4">
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? 'bg-yellow-500 p-2 block hover:bg-yellow-600' : 'p-2 block hover:bg-gray-700'
            }
            exact
          >
            {isSidebarOpen ? '🏠 Home' : <span className="text-xl">🏠</span>}
          </NavLink>
        </li>
        <li>
          <div
            onClick={toggleCourseSubmenu}
            className="cursor-pointer p-2 block hover:bg-gray-700"
          >
            {isSidebarOpen ? '📚 Courses' : <span className="text-xl">📚</span>}
          </div>
          <div className={`overflow-hidden transition-all duration-300 ${isCourseSubmenuOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
            <ul className="pl-4">
              <li>
                <NavLink
                  to="/add-course"
                  className={({ isActive }) =>
                    isActive ? 'bg-yellow-500 p-2 block hover:bg-yellow-600' : 'p-2 block hover:bg-gray-700'
                  }
                  exact
                >
                  {isSidebarOpen ? '➕ Add Course' : <span className="text-xl">➕</span>}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/list-courses"
                  className={({ isActive }) =>
                    isActive ? 'bg-yellow-500 p-2 block hover:bg-yellow-600' : 'p-2 block hover:bg-gray-700'
                  }
                  exact
                >
                  {isSidebarOpen ? '📋 List Courses' : <span className="text-xl">📋</span>}
                </NavLink>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive ? 'bg-yellow-500 p-2 block hover:bg-yellow-600' : 'p-2 block hover:bg-gray-700'
            }
            exact
          >
            {isSidebarOpen ? '⚙️ Settings' : <span className="text-xl">⚙️</span>}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
