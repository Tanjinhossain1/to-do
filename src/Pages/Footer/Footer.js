import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear()
    return (
        <div class=" bg-neutral  ">
            <footer class="footer  mt-12 p-10 text-neutral-content">
                <div>
                    <span class="footer-title">Services</span>
                   <Link to='/allTodo' class="link link-hover">Todo's</Link>
                   <Link to='/' class="link link-hover">Design</Link>
                </div>
                <div>
                    <span class="footer-title">Company</span>
                   <Link to='/' class="link link-hover">About us</Link>
                   <Link to='/' class="link link-hover">Contact</Link>
                </div>
                <div>
                    <span class="footer-title">Legal</span>
                   <Link to='/' class="link link-hover">Terms of use</Link>
                   <Link to='/' class="link link-hover">Privacy policy</Link>
                </div>
            </footer>
                <p className='text-white text-center pb-4'>Copyright <span className='text-xl'>©</span> {year} - All right reserved</p>
        </div>
    );
};

export default Footer;