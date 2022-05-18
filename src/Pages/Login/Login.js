import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [signInWithGoogle, user, googleLoading] = useSignInWithGoogle(auth);
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate()
    if(user){
        navigate(from, { replace: true });
        toast.success('login is done')
    }
    if (googleLoading) {
        return <div className='text-center mt-32 mb-72'><button class="btn loading">loading</button></div>
    }
    return (
        <div>
            <div class=" w-1/4 mx-auto mt-12  ">
                <div class="">
                    <div class="card px-4 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" class="input input-bordered" />
                                <label class="label">
                                    <button href="#" class="label-text-alt link link-hover">Forgot password?</button>
                                </label>
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Login</button>
                            </div>
                        </form>
                    <div class="divider">OR</div>
                    <div class="form-control mb-6 mt-6">
                        <button onClick={()=>signInWithGoogle()} class="btn btn-outline">Continue With Google</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;