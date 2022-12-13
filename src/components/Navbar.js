import React from 'react';
import { useState } from 'react';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/solid'
import { XMarkIcon } from '@heroicons/react/24/solid'
// import { a } from 'react-scroll';
import { } from 'react-router-dom';

const Navbar = () => {
    const [action, setAction] = useState(false)
    return (
        <div className='sticky top-0 z-50'>
            <div className="navbar bg-black ">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label onClick={() => setAction(!action)} tabIndex={0} className="btn mt-4 ml-3 btn-ghost text-yellow-300 block sm:hidden">

                            {!action && <AdjustmentsHorizontalIcon className="mt-2 h-6 w-6 text-yellow-300" />}
                            {action && <XMarkIcon className="mt-2 h-6 w-6 text-yellow-300" />}

                        </label>
                        {action && <ul tabIndex={0} className="ml-[33vw] menu menu-compact dropdown-content mt-1 p-2 shadow bg-base-100 rounded-box w-100">
                            <a href='#about' className="btn btn-ghost normal-case text-xl">Home</a>
                            <a href='#about' className="btn btn-ghost normal-case text-xl">About</a>
                            <a href='#project' className="btn btn-ghost normal-case text-xl">Project</a>
                            <a href='#skills' className="btn btn-ghost normal-case text-xl">Skills</a>
                            <a href='#contact' className="btn btn-ghost normal-case text-xl">Contact</a>
                      
                            
                        </ul>}
                    </div>
                </div>
                <div className="navbar-center hidden sm:block">
                    <a href='#about' className="btn btn-ghost normal-case text-xl">Home</a>
                    <a href='#about' className="btn btn-ghost normal-case text-xl">About</a>
                    <a href='#project' className="btn btn-ghost normal-case text-xl">Project</a>
                    <a href='#skills' className="btn btn-ghost normal-case text-xl">Skills</a>
                    <a href='#contact' className="btn btn-ghost normal-case text-xl">Contact</a>
                </div>

                <div className="navbar-end">
                </div>
            </div>
        </div>
    );
};

export default Navbar;