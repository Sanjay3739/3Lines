import React, { useState } from 'react';
import { ReactComponent as Modules } from '../Sidebar/Svg/modules.svg';
import { ReactComponent as Settings } from '../Sidebar/Svg/settings.svg';
import { ReactComponent as Save } from '../Sidebar/Svg/save.svg';
import { ReactComponent as UsersIcon } from '../Sidebar/Svg/users.svg';
import { ReactComponent as Template } from '../Sidebar/Svg/templates.svg';
import { ReactComponent as Registers } from '../Sidebar/Svg/registers.svg';
import './sidebar.css';

const Sidebar: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(1);
  const handleMenuItemClick = (menuItemNumber: number) => {
    setActiveMenuItem(menuItemNumber);
  };
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`wrapper ${sidebarOpen ? 'active' : ''}`}>
      <nav id="sidebar">
        <div className="p-4">
          <ul className="list-unstyled components">
          <li className={`user-item ${activeMenuItem === 1 ? 'active' : ''}`} onClick={() => handleMenuItemClick(1)}>
              <UsersIcon /> Users
            </li>
            <li className={`user-item ${activeMenuItem === 2 ? 'active' : ''}`} onClick={() => handleMenuItemClick(2)}>
              <Settings /> Account Details
            </li>
            <li className={`user-item ${activeMenuItem === 3 ? 'active' : ''}`} onClick={() => handleMenuItemClick(3)}>
              <Modules /> Modules
            </li>
            <li className={`user-item ${activeMenuItem === 4 ? 'active' : ''}`} onClick={() => handleMenuItemClick(4)}>
              <Registers /> Registers
            </li>
            <li className={`user-item ${activeMenuItem === 5 ? 'active' : ''}`} onClick={() => handleMenuItemClick(5)}>
              <Template /> Templates
            </li>
            <li className={`user-item ${activeMenuItem === 6 ? 'active' : ''}`} onClick={() => handleMenuItemClick(6)}>
              <Save /> Reg Updates
            </li>
          </ul>
        </div>
      </nav>
      <div className="toggle-button" onClick={toggleSidebar}> ☰ </div>
    </div>
  );
};

export default Sidebar;
