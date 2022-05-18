import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import AddTask from '../AddTask/AddTask';
import Todo from '../Home/Todo';

const AllTodo = () => {
    const [user] = useAuthState(auth)
    const { isLoading, data: todos, refetch } = useQuery('repoData', () =>
        fetch(`https://young-plains-75571.herokuapp.com/todo?email=${user?.email}`).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <div className='text-center mt-32 mb-72'><button className="btn loading">loading</button></div>
    }

    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center ">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Add Todo</label>
                    <div className="overflow-x-auto w-3/4">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    todos.map(todo => <Todo refetch={refetch} todos={todos} key={todo._id} todo={todo}></Todo>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <AddTask todos={todos} refetch={refetch} />
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default AllTodo;