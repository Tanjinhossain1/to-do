import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Todo = ({ todo, refetch }) => {
    const { name, description, _id } = todo;
    const [compleat, setCompleat] = useState(false);
    // delete one Todo handler
    const deleteTodo = (id) => {
        const confirmDelete = window.confirm('Are You Sure To Delete It?');
        if (confirmDelete) {
            fetch(`https://young-plains-75571.herokuapp.com/todoDelete/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    toast.success('Task Delete SuccessFully')
                    refetch()
                })
        }
    }

    return (
        <tr>
            <th>{compleat ? <strike>{name}</strike> : `${name}`
            }</th>
            <th>{compleat ? <strike>{description}</strike> : `${description}`
            }</th>
            <td><button onClick={() => {
                const confirmCompleat = window.confirm('Can You Compleat The Task');
                if (confirmCompleat) {
                    if (!compleat) {
                        setCompleat(true)
                        toast('Nice You Compleat The Task')
                    } else {
                        toast('Already Compleat The Task')
                    }
                }
            }} className="btn btn-outline rounded-lg modal-button">Compleat</button>
            </td>
            <td>
                <button onClick={() => deleteTodo(_id)} className="btn btn-circle btn-error text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </td>
        </tr>
    );
};

export default Todo;