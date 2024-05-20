// src/components/Dashboard/Dashboard.jsx
import React from 'react';
import useAuth from '../../useAuth';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import { useSidebar } from '../Sidebar/SidebarContext';

const Settings = () => {
  useAuth();
  const { isSidebarOpen } = useSidebar();

  return (
    <div className={`flex ${isSidebarOpen ? 'ml-64' : 'ml-16'} transition-all duration-300`}>
      <Sidebar />
      <div className="flex-1">
        <Topbar />
        <div className="p-4">
          <h3>Settings</h3>
        </div>
      </div>
    </div>
  );
};

export default Settings;