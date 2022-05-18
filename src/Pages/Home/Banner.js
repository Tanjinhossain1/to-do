import React from 'react';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className='md:flex justify-between w-3/4 mx-auto items-center'>
                <div>
                    <h1 className='text-5xl font-bold text-blue-900'>Organized Your Task</h1>
                    <p className='w-4/4 md:w-3/4 xl:4/2 my-4 text-yellow-700 '>Organize all your to-do's lists and projects Color tag them to set priorities and categories.</p>
                    <button onClick={() => navigate('/allTodo')} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">All Todo's</button>
                </div>
                <div>
                    <img src="https://i.ibb.co/RDYKJmv/todo-removebg-preview.png" alt="todoTask" />
                </div>
            </div>
        </div>
    );
};

export default Banner;