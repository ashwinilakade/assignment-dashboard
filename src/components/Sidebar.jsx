import React from 'react';
import {
  BsCart3,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from 'react-icons/bs';
import {AiOutlineHome} from 'react-icons/ai';
import {FaTasks} from 'react-icons/fa';
import {IoMdHelp} from 'react-icons/io';

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? 'sidebar-responsive' : ''}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsCart3 className="icon_header" />
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="">
            <AiOutlineHome className="icon" /> Home
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsFillArchiveFill className="icon" /> Intergrations
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <FaTasks className="icon" /> Tasks
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsPeopleFill className="icon" /> Generate Reports
          </a>
        </li>

        <li className="sidebar-list-item">
          <a href="">
            <BsFillGearFill className="icon" /> Setting
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <IoMdHelp className="icon" /> Help
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
