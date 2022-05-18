import React from 'react';

const NotFound = () => {
    return (
        <div className='w-4/4 lg:w-2/4 mx-auto '>
            <div>
                <h1 className='text-6xl text-blue-900 font-bold'>PAGE NOT <br /> FOUND!!</h1>
                <p className='text-gray-400'>What are you looking for.</p>
            </div>
            <div>
                <img width={500} src="https://i.ibb.co/TmwZd14/404-removebg-preview.png" alt="" />
            </div>
        </div>
    );
};

export default NotFound;