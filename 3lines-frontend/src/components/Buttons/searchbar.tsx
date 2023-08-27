import React, { useState } from 'react';
import './status.css';
import { ReactComponent as DownArrowIcon } from '../Buttons/downarrow.svg';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Sidebar from '../Sidebar/sidebar';
import Tables from '../Tables/table';
const StatusDropdown: React.FC = () => {
    const [selectedStatus, setSelectedStatus] = useState('');
    const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedStatus(event.target.value);
    };

    return (
        <div className='m-5'>
            <div className="btn-text-content ms-2 mb-3" style={{ justifyContent: 'space-between' }}>
                <span className='menu-name me-5'>Settings</span>
                <button className='add-btn me-3'>
                    <ControlPointIcon className='add-icon' /> Add User
                </button>
            </div>
            <hr className="solid" />
            <div className='d-flex'>
                <div className="sidebar-contante">
                    <Sidebar />
                </div>
                <div className="table">
                    <div className='top-bar m-3 wrap'>
                        <div className="filters">
                            <div className="filter-icon"><FilterListIcon /></div>
                            <span className="filter-text">Filters</span>
                        </div>

                        <div className="search-bar">
                            <div className="search-icon me-2"><SearchIcon /></div>
                            <input type="text" className="search-input" placeholder="First name" />
                        </div>

                        <div className="search-bar">
                            <div className="search-icon me-2"><SearchIcon /></div>
                            <input type="text" className="search-input" placeholder="Last name" />
                        </div>

                        <div className="dropdown">
                            <select className="dropbtn" value={selectedStatus} onChange={handleStatusChange}> <DownArrowIcon />
                                <option className='dropdown-content' value="">Status</option>
                                <option className='dropdown-content' value="1">Active</option>
                                <option className='dropdown-content' value="0">Inactive</option>
                            </select>
                        </div>
                    </div>
                    <div className="tables"><Tables /></div>
                    <div className="d-flex" style={{ justifyContent: 'space-between' }}>
                        <div className='menu-name'></div>
                        <div className='d-flex save-cancel-btn'>
                            <button className='cancel-btn me-5'> Cancel</button>
                            <button className='save-btn me-3'> Save Changes </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatusDropdown;
