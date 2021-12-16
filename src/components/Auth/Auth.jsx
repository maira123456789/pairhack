import React from 'react';
import { useAuth } from '../../context/authContext';
import Home from '../Home/Home';
import Login from './Login';

const Auth = () => {
    const {user} = useAuth()

    return (
        <div>
           {user ? <Home /> : <Login />}
        </div>
        // если user есть переходит на Home, если нет то на Login
    );
};

export default Auth;