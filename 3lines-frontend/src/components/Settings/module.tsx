import React from 'react';
import Sidebar from '../Sidebar/sidebar';
import { ReactComponent as RightArrow } from '../Settings/right-arrow.svg';
import { ReactComponent as BallIcon } from '../Settings/ball.svg';
import { ReactComponent as RoundLineIcon } from '../Settings/round-line.svg';
import { ReactComponent as MonkeyIcon } from '../Settings/monkey.svg';
import { ReactComponent as AngularIcon } from '../Settings/angular.svg';


const Modules: React.FC = () => {

    return (
        <div>
            <div className="create-user-container">
                <div className='text-start'><span className='account-settings'>Modules</span></div>
                <hr className="solid mt-2 line" />
                <div className='d-flex'>
                    <Sidebar />
                    <form>
                        <div className="row">
                            <div className="col-md-6">
                                <div className='module-box'>
                                    <div className="p-4">
                                        <div className="custom-toggle module-toggle form-switch ">
                                            <span> <BallIcon /></span>
                                            <input className="form-check-input" type="checkbox" role="switch" title="Toggle for No/Yes option" />
                                        </div>
                                        <div className='module-text mt-2'> Streamline software projects, sprints, and bug tracking.</div>
                                    </div>
                                    <hr className='m-0' />
                                    <div className="p-4">
                                        <div className="d-flex justify-content-between">
                                            <span>Setting</span>
                                            <span><RightArrow /></span>
                                        </div> </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className='module-box'>
                                    <div className="p-4">
                                        <div className="custom-toggle module-toggle form-switch ">
                                            <span> <RoundLineIcon /></span>
                                            <input className="form-check-input" type="checkbox" role="switch" title="Toggle for No/Yes option" />
                                        </div>
                                        <div className='module-text mt-2'> Streamline software projects, sprints, and bug tracking.</div>
                                    </div>
                                    <hr className='m-0' />
                                    <div className="p-4">
                                        <div className="d-flex justify-content-between">
                                            <span>Setting</span>
                                            <span><RightArrow /></span>
                                        </div> </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                        <div className="col-md-6">
                                <div className='module-box'>
                                    <div className="p-4">
                                        <div className="custom-toggle module-toggle form-switch ">
                                            <span> <MonkeyIcon /></span>
                                            <input className="form-check-input" type="checkbox" role="switch" title="Toggle for No/Yes option" />
                                        </div>
                                        <div className='module-text mt-2'> Streamline software projects, sprints, and bug tracking.</div>
                                    </div>
                                    <hr className='m-0' />
                                    <div className="p-4">
                                        <div className="d-flex justify-content-between">
                                            <span>Setting</span>
                                            <span><RightArrow /></span>
                                        </div> </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className='module-box'>
                                    <div className="p-4">
                                        <div className="custom-toggle module-toggle form-switch ">
                                            <span> <AngularIcon /></span>
                                            <input className="form-check-input" type="checkbox" role="switch" title="Toggle for No/Yes option" />
                                        </div>
                                        <div className='module-text mt-2'> Streamline software projects, sprints, and bug tracking.</div>
                                    </div>
                                    <hr className='m-0' />
                                    <div className="p-4">
                                        <div className="d-flex justify-content-between">
                                            <span>Setting</span>
                                            <span><RightArrow /></span>
                                        </div> </div>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modules;
