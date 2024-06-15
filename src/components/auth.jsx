import React, { useState } from 'react'
import { auth, provider } from '../config/firebase.js';
import { signInWithPopup } from 'firebase/auth';
import { FcGoogle } from "react-icons/fc";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

function Auth() {
    const [isAuth, setIsAuth] = useState(false);
    const [user, setUser] = useState([]);

    //Sign In Method
    const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth, provider);
        cookies.set('auth-token', result.user.refreshToken);
        setUser(result.user);
        setIsAuth(true);
    };

    return (
        <div className='flex justify-center self-center'>
          {isAuth ? (
            <span className='my-5 text-lg text-black'>Welcome, {user.displayName}</span>
          ) : (
            <button className='px-3 py-2 mx-2 flex border border-black rounded-lg' onClick={signInWithGoogle}>Sign In with Google<FcGoogle className='text-2xl mx-2 self-center' /></button>
          )}
        </div>
    )
}

export default Auth
