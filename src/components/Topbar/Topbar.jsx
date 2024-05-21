import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import Logout from '../Logout/Logout';
import { useSidebar } from '../Sidebar/SidebarContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Topbar = () => {
  const { toggleSidebar } = useSidebar();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    window.location.href = '/login';
  };

  return (
    <>
      <div className="bg-white shadow-md py-2 px-6 flex justify-between items-center">
        <button onClick={toggleSidebar} className="focus:outline-none">
          <FiMenu size={24} />
        </button>
        <div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center bg-none text-red-500 hover:text-red-700 px-4 py-2 rounded"
          >
            <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
            Logout
          </button>
        </div>
      </div>
      <Logout
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleLogout}
      />
    </>
  );
};

export default Topbar;
