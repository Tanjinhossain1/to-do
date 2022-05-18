import React from 'react';
import { toast } from 'react-toastify';

const AddTask = ({ todos, refetch }) => {
    
    const handleAddTask = (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const description = event.target.description.value;
        const todoDetail = { name, description }
      
            fetch('http://localhost:5000/addTodo', {
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
                    toast('Task Add SuccessFully')
                    event.target.reset()
                })
        

    }
    return (
        <div className='mt-6 '>
            <h1 className='text-3xl text-center text-green-700 font-semibold'>Add Your Task</h1>
            <form onSubmit={handleAddTask} className='w-full shadow-2xl p-4 rounded-lg  mx-auto'>
                <label class="label">
                    <span class="label-text">Task Name</span>
                </label>
                <input type="text" name='name' placeholder="Task Name" class="input input-bordered input-primary w-full max-w-xs" />

                <label class="label mt-4">
                    <span class="label-text">Task Description</span>
                </label>
                <input type="text" name='description' placeholder="Task Description" class="input input-bordered input-primary w-full max-w-xs" />
                <div className='mx-auto text-center'>
                    <input className='btn btn-wide   mt-4' type="submit" value="Add Task" />
                </div>
            </form>
        </div>
    );
};

export default AddTask;