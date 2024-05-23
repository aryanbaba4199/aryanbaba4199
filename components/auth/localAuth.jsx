import React, { useState } from 'react';
import axios from 'axios';
import mongoose from 'mongoose';

const AuthForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pswd, setPswd] = useState("");
    const [user, setUser] = useState(null);
    const [message, SetMessage] = us

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/user', { email, pswd });
            if(response.status===200){
                setUser(response.data);
            }else if(response.status===300){
                setUser("Already Registered Try to sign in");
            }
        } catch (error) {
            setUser(error.message);
        }
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/user', { name, email, pswd });
            if(response.status === 200){
                setUser(response.data);
            }
        } catch (error) {
            setUser(error.message);
        }
    };

    return (
        <>
            <div className="main h-[25rem] mt-2">
                <input type="checkbox" id="chk" aria-hidden="true" />
                <p className='text-white text-center'>Local Authentication (DBMS)</p>
                <div className="login  px-16 mt-8">
                    <form className="form -translate-y-4" onSubmit={handleSignIn}>
                        <label htmlFor="chk" aria-hidden="true">Log in</label>
                        <input className="input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" placeholder="Email" required />
                        <input className="input" type="password" value={pswd} onChange={(e) => setPswd(e.target.value)} name="pswd" placeholder="Password" required />
                        <button type="submit">Log in</button>
                    </form>
                </div>

                <div className="register">
                    <form className="form" onSubmit={handleSignUp}>
                        <label htmlFor="chk" aria-hidden="true">Register</label>
                        <input className="input" type="text" name="txt" value={name} onChange={(e) => setName(e.target.value)} placeholder="Username" required />
                        <input className="input" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                        <input className="input" type="password" name="pswd" value={pswd} onChange={(e) => setPswd(e.target.value)} placeholder="Password" required />
                        <button type="submit">Register</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AuthForm;
