import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const SignUp = () => {
    const [error, setError] = useState('')
    const [signInWithGoogle, googleUser, googleLoading] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
    ] = useCreateUserWithEmailAndPassword(auth);;
    console.log(user)
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate()
    if (user || googleUser) {
        navigate(from, { replace: true });
        toast.success('login is done')
    }
    if (googleLoading || loading) {
        return <div className='text-center mt-32 mb-72'><button className="btn loading">loading</button></div>
    }
    const handleSignUp = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        if (password === confirmPassword) {
            createUserWithEmailAndPassword(email, password)
        }
        else {
            setError("Password Don't Matched ")
        }
    }
    return (
        <div>
            <div className=" w-1/4 mx-auto mt-12  ">
                <div className="">
                    <div className="card px-4 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignUp} className="card-body">
                            <p className='text-center text-blue-800 text-xl font-bold'>Sign Up</p>
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
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="text" name='confirmPassword' placeholder="confirm Password" className="input input-bordered" />
                            </div>
                            <p><small>Already Have An Account? <Link className='text-blue-600 font-semibold' to='/login'>Login</Link></small></p>
                            <p className='text-red-600'>{error}</p>
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

export default SignUp;