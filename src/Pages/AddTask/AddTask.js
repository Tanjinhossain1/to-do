import React from 'react';

const AddTask = () => {
    return (
        <div>

            <form className='w-1/4 mt-12 mx-auto'>
                <label class="label">
                    <span class="label-text">Task Name</span>
                </label>
                <input type="text" name='name' placeholder="Task Name" class="input input-bordered input-primary w-full max-w-xs" />

                <label class="label mt-4">
                    <span class="label-text">Task Description</span>
                </label>
                <input type="text" name='description' placeholder="Task Description" class="input input-bordered input-primary w-full max-w-xs" />
                <input type="submit" value="Add Task" />
            </form>
        </div>
    );
};

export default AddTask;