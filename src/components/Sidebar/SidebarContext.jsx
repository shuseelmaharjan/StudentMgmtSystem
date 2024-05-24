import React, { createContext, useState, useContext } from 'react';

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isCourseSubmenuOpen, setIsCourseSubmenuOpen] = useState(false);
  const [isStudentSubmenuOpen, setIsStudentSubmenuOpen] = useState(false);
  const [isTeacherSubmenuOpen, setIsTeacherSubmenuOpen] = useState(false);
  const [isClassSubmenuOpen, setIsClassSubmenuOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleCourseSubmenu = () => {
    setIsCourseSubmenuOpen((prev) => !prev);
  };

  const toggleStudentSubmenu = () => {
    setIsStudentSubmenuOpen((prev) => !prev);
  };
   const toggleTeacherSubmenu = () => {
    setIsTeacherSubmenuOpen((prev) => !prev);
   }
   const toggleClassSubMenu = () => {
    setIsClassSubmenuOpen((prev) => !prev);
   }

  return (
    <SidebarContext.Provider value={{ 
      isSidebarOpen, toggleSidebar, 
      isCourseSubmenuOpen, toggleCourseSubmenu, 
      isStudentSubmenuOpen, toggleStudentSubmenu, 
      isTeacherSubmenuOpen, toggleTeacherSubmenu,
      isClassSubmenuOpen, toggleClassSubMenu
      }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarContext);
