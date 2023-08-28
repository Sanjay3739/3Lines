// AccountSetting.tsx

import React from 'react';
import Sidebar from '../Sidebar/sidebar';
import { ReactComponent as Uploads } from './upload.svg';

const AccountSetting: React.FC = () => {

    return (
        <div>
            <div className="create-user-container">
                <div className='text-start'><span className='account-settings'>Account Settings</span></div>
                <hr className="solid mt-2 line" />
                <div className='d-flex'>
                    <Sidebar />
                    <form>
                        <div className='container-fluid add-user-details-container1'>
                            <div className="m-3 ">
                                <span className='fs-4 font-weight-bold'>Account Details</span>
                                <hr className="add-solid" />
                                <div className="row mt-4">
                                    <div className="col-md-6 mt-3">
                                        <div className="mb-3">
                                            <label htmlFor="accountName" className="form-label">Account Name</label>
                                            <input type="text" className="form-control" id="accountName" placeholder="Account Name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 mt-3">
                                        <div className="mb-3">
                                            <label htmlFor="accountPrefix" className="form-label">Account Prefix</label>
                                            <input type="text" className="form-control" id="accountPrefix" placeholder="Account Prefix" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mt-3">
                                        <div className="mb-3">
                                            <label htmlFor="primaryColour" className="form-label">Primary Colour</label>
                                            <input type="text" className="form-control" id="primaryColour" placeholder="Primary Colour" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 mt-3">
                                    <label htmlFor="logoUpload" className="form-label text-bold">Logo upload</label>
                                    <label className="file-label">
                                        <input type="file" className="file-input" />
                                        <span className="file-icon"><Uploads /></span>
                                        <div className='upload-text'>
                                            <p className="file-text"><span> Click to upload</span> or drag and drop </p>
                                            <p className="file-text mt-0">logo has to be 200px by 60px PNG file</p>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex" style={{ justifyContent: 'space-between' }}>
                            <div className='menu-name'></div>
                            <div className='d-flex save-cancel-btn'>
                                <button className='cancel-btn me-5'> Cancel</button>
                                <button className='save-btn me-3'> Save Changes </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AccountSetting;
