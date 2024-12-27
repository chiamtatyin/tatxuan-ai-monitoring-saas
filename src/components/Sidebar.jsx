import React from 'react';
    import { NavLink } from 'react-router-dom';
    import { HomeIcon, MonitorIcon, LayoutDashboard, SettingsIcon } from 'lucide-react';
    
    export function Sidebar() {
      return (
        <aside className="w-64 bg-gray-100 p-4">
          <nav>
            <ul>
              <li className="mb-2">
                <NavLink to="/" className={({ isActive }) => `flex items-center p-2 rounded-md hover:bg-gray-200 ${isActive ? 'bg-gray-200' : ''}`}>
                  <HomeIcon className="mr-2 h-4 w-4" />
                  Home
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="/monitor" className={({ isActive }) => `flex items-center p-2 rounded-md hover:bg-gray-200 ${isActive ? 'bg-gray-200' : ''}`}>
                  <MonitorIcon className="mr-2 h-4 w-4" />
                  Monitor
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="/dashboard" className={({ isActive }) => `flex items-center p-2 rounded-md hover:bg-gray-200 ${isActive ? 'bg-gray-200' : ''}`}>
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  Dashboard
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="/settings" className={({ isActive }) => `flex items-center p-2 rounded-md hover:bg-gray-200 ${isActive ? 'bg-gray-200' : ''}`}>
                  <SettingsIcon className="mr-2 h-4 w-4" />
                  Settings
                </NavLink>
              </li>
            </ul>
          </nav>
        </aside>
      );
    }
