import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);
    console.log(user?.photoURL)
    const logout = () => {
        signOut(auth);
    };
    const navItems = <>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/allTodo'>Todos</Link></li>

        {user ? <button onClick={() => logout()} className="btn btn-ghost"><span className='mr-4'>LogOut</span> {user?.photoURL &&
            <div className="avatar">
                <div className="w-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img alt='userPhoto' src={user?.photoURL} />
                </div>
            </div>
        }</button> :
            <li><Link to='/login'>Login</Link></li>}
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                            <li tabIndex="0">
                            </li>
                        </ul>
                    </div>
                    <Link to='/home' className="btn btn-ghost normal-case text-xl">TODO</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {navItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;