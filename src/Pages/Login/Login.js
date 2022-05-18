import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [signInWithGoogle, user, googleLoading] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        emailUser,
        loading,
    ] = useSignInWithEmailAndPassword(auth);

    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate()
    if (user || emailUser) {
        navigate(from, { replace: true });
        toast.success('login is done')
    }
    if (googleLoading || loading) {
        return <div className='text-center mt-32 mb-72'><button className="btn loading">loading</button></div>
    }
    const handleLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div>
            <div className=" w-1/4 mx-auto mt-12  ">
                <div className="">
                    <div className="card px-4 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <button href="#" className="label-text-alt link link-hover">Forgot password?</button>
                                </label>
                            </div>
                            <p><small>Don't Have An Account? <Link className='text-blue-600 font-semibold' to='/signUp'>Create New Account</Link></small></p>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className="divider">OR</div>
                        <div className="form-control mb-6 mt-6">
                            <button onClick={() => signInWithGoogle()} className="btn btn-outline">Continue With Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;