import React from 'react';
import './user.css';
import UserImage from './user.png';
import Button from '@mui/material/Button';

const AddUser: React.FC = () => {

    return (
        <div>
            <div className='create-user-header'>
                <div className="ms-2 d-flex flex-column align-items-center">
                    <span className='menu-name'>Add User</span>
                </div>
            </div>
            <div className="create-user-container">
                <hr className="solid mt-2 line" />
                <div className='user-box-data'>
                    <nav id="sidebar">
                        <div className="p-4">
                            <span className="static-words">
                                Enter the derails of the user on the right.
                            </span>
                        </div>
                    </nav>
                    <form>
                        <div className='add-user-details-container1'>
                            <div className="user-small-header">
                                <span className='text-box'>Personal Information</span>
                                <hr className="add-solid" />
                                <div className="col-md-6 mb-4">
                                    <div className="image-btn-box">
                                        <div className="image-container">
                                            <img src={UserImage} alt="User" className="img-fluid" />
                                        </div>
                                        <div className="btn-text-box">
                                        <Button variant="contained">Change</Button>
                                            <span className='ms-2 bold-underline'>Remove</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-container">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="firstName" className="form-label">First Name</label>
                                            <input type="text" className="form-control" id="firstName" placeholder="First name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="lastName" className="form-label">Last Name</label>
                                            <input type="text" className="form-control" id="lastName" placeholder="Last name" />
                                        </div>
                                    </div>
                                </div>
                                <div className="input-container">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">Email address</label>
                                            <input type="email" className="form-control" id="email" placeholder="Enter email" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="phone-number" className="form-label">Phone</label>
                                            <input type="number" className="form-control" id="phone-number" placeholder="Enter phone number" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='container-fluid add-user-details-container2'>
                            <div className="m-3">
                                <span className='fs-4 font-weight-bold'>System Information</span>
                                <hr className="add-solid" />
                                <div className="row mt-4">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="role" className="form-label">Role</label>
                                            <select className="form-select" id="role">
                                                <option value="" disabled>Select a role</option>
                                                <option value="admin">Product Designer</option>
                                                <option value="user">User</option>
                                                <option value="manager">Manager</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="timezone" className="form-label">Timezone</label>
                                            <input type="text" className="form-control" id="timezone" placeholder="Pacific Standard Time (PST)  UTC-08:30" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Is user Representative</label>
                                            <div className="d-flex align-items-center ms-3">
                                                <span className="toggle-label me-2">No</span>
                                                <div className="form-check custom-toggle  form-switch mt-1">
                                                    <input className="form-check-input " type="checkbox" role="switch"  id="flexSwitchCheckChecked"   title="Toggle for No/Yes option"/>
                                                </div>
                                                <span className="toggle-label ms-2">Yes</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Is the user account active</label>
                                            <div className="d-flex align-items-center ms-3">
                                                <span className="toggle-label me-2">No</span>
                                                <div className="form-check custom-toggle  form-switch mt-1">
                                                    <input className="form-check-input " type="checkbox" role="switch" id="flexSwitchCheck"   title="Toggle for No/Yes option" />
                                                </div>
                                                <span className="toggle-label ms-2">Yes</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddUser;
