import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear()
    return (
        <div className=" bg-neutral  ">
            <footer className="footer  mt-12 p-10 text-neutral-content">
                <div>
                    <span className="footer-title">Services</span>
                    <Link to='/allTodo' className="link link-hover">Todo's</Link>
                    <Link to='/' className="link link-hover">Design</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link to='/' className="link link-hover">About us</Link>
                    <Link to='/' className="link link-hover">Contact</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link to='/' className="link link-hover">Terms of use</Link>
                    <Link to='/' className="link link-hover">Privacy policy</Link>
                </div>
            </footer>
            <p className='text-white text-center pb-4'>Copyright <span className='text-xl'>©</span> {year} - All right reserved</p>
        </div>
    );
};

export default Footer;