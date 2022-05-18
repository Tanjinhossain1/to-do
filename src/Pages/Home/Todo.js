import React from 'react';
import { toast } from 'react-toastify';

const Todo = ({ todo,refetch }) => {
    const { name, description, _id } = todo;
    const deleteTodo = (id) => {
        const confirmDelete = window.confirm('Are You Sure To Delete It?');
        if (confirmDelete) {
        fetch(`http://localhost:5000/todoDelete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast('Task Delete SuccessFully')
                refetch()
            })
        }
    }
    return (
        <tr>
            <th>{name}</th>
            <td>{description}</td>
            <td>
                <button onClick={() => deleteTodo(_id)} class="btn btn-circle btn-error text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </td>
        </tr>
    );
};

export default Todo;