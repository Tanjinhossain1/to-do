import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import AddTask from '../AddTask/AddTask';
import Todo from './Todo';

const Home = () => {
    const { isLoading, error, data: todos,refetch } = useQuery('repoData', () =>
        fetch('http://localhost:5000/todo').then(res =>
            res.json()
        )
    )
    if(isLoading){
        return <div className='text-center mt-12'><button class="btn loading">loading</button></div>
    }

    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-center ">
                    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Add Todo</label>
                    <div class="overflow-x-auto w-3/4">
                        <table class="table w-full">
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
                                    todos.map(todo => <Todo refetch={refetch} todos={todos}  key={todo._id} todo={todo}></Todo>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <AddTask todos={todos} refetch={refetch}  />
                    </ul>

                </div>
            </div>


        </div>
    );
};

export default Home;