import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddTask = ({ todos, refetch }) => {
    const [user] = useAuthState(auth)
    const handleAddTask = (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const description = event.target.description.value;
        const email = user?.email
        const todoDetail = { name, description, email }

        fetch('https://young-plains-75571.herokuapp.com/addTodo', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(todoDetail)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch();
                toast.success('Task Add SuccessFully')
                event.target.reset()
            })
    }
    return (
        <div className='mt-6 '>
            <h1 className='text-3xl text-center text-green-700 font-semibold'>Add Your Task</h1>
            <form onSubmit={handleAddTask} className='w-full shadow-2xl p-4 rounded-lg  mx-auto'>
                <label className="label">
                    <span className="label-text">Task Name</span>
                </label>
                <input type="text" name='name' placeholder="Task Name" className="input input-bordered input-primary w-full max-w-xs" />

                <label className="label mt-4">
                    <span className="label-text">Task Description</span>
                </label>
                <input type="text" name='description' placeholder="Task Description" className="input input-bordered input-primary w-full max-w-xs" />
                <div className='mx-auto text-center'>
                    <input className='btn btn-wide   mt-4' type="submit" value="Add Task" />
                </div>
            </form>
        </div>
    );
};

export default AddTask;