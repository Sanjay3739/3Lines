import React from 'react';
import Sidebar from '../Sidebar/sidebar';
import { ReactComponent as RightArrow } from '../Settings/right-arrow.svg';
import { ReactComponent as BallIcon } from '../Settings/ball.svg';
import { ReactComponent as RoundLineIcon } from '../Settings/round-line.svg';
import { ReactComponent as MonkeyIcon } from '../Settings/monkey.svg';
import { ReactComponent as AngularIcon } from '../Settings/angular.svg';
import Switch from '@mui/material/Switch';


const Modules: React.FC = () => {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    return (
        <div>
            <div className="create-user-container">
                <div className='text-start'><span className='account-settings'>Modules</span></div>
                <hr className="solid mt-2 line" />
                <div className='module-body'>
                    <Sidebar />
                    <form>
                        <div className='module-box-container1'>
                            <div className="module-box">
                                <div className="module-box-data">
                                    <div className=" module-toggle">
                                        <span> <BallIcon /></span>
                                        <Switch {...label} defaultChecked />
                                    </div>
                                    <div className='module-text mt-2'> Streamline software projects, sprints, and bug tracking.</div>
                                </div>
                                <hr className='hr-line' />
                                <div className="text-icon-box">
                                    <div className="text-arrow-icon">
                                        <span>Setting</span>
                                        <span><RightArrow /></span>
                                    </div>
                                </div>
                            </div>
                            <div className="module-box">
                                <div className="module-box-data">
                                    <div className=" module-toggle">
                                        <span> <RoundLineIcon /></span>
                                        <Switch {...label} defaultChecked />
                                    </div>
                                    <div className='module-text mt-2'> Streamline software projects, sprints, and bug tracking.</div>
                                </div>
                                <hr className='hr-line' />
                                <div className="text-icon-box">
                                    <div className="text-arrow-icon">
                                        <span>Setting</span>
                                        <span><RightArrow /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='module-box-container2'>
                            <div className="module-box">
                                <div className="module-box-data">
                                    <div className=" module-toggle">
                                        <span> <MonkeyIcon /></span>
                                        <Switch {...label} defaultChecked />
                                    </div>
                                    <div className='module-text mt-2'> Streamline software projects, sprints, and bug tracking.</div>
                                </div>
                                <hr className='hr-line' />
                                <div className="text-icon-box">
                                    <div className="text-arrow-icon">
                                        <span>Setting</span>
                                        <span><RightArrow /></span>
                                    </div>
                                </div>
                            </div>
                            <div className="module-box">
                                <div className="module-box-data">
                                    <div className=" module-toggle">
                                        <span> <AngularIcon /></span>
                                        <Switch {...label} defaultChecked />
                                    </div>
                                    <div className='module-text mt-2'> Streamline software projects, sprints, and bug tracking.</div>
                                </div>
                                <hr className='hr-line' />
                                <div className="text-icon-box">
                                    <div className="text-arrow-icon">
                                        <span>Setting</span>
                                        <span><RightArrow /></span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </div >
        </div >
    );
};

export default Modules;
