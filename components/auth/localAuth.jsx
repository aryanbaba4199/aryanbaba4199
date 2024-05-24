import React, { useState } from 'react';
import axios from 'axios';
import { Dialog } from '@mui/material';

const AuthForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pswd, setPswd] = useState("");
    const [user, setUser] = useState(null);
    const [status, setStatus] = useState("");
    

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/user', { email, pswd });
            if(response.status===200){
                setStatus(response.status);
                setUser(response.data);
            }else if(response.status===300){
                setUser("Already Registered Try to sign in");
                setStatus(response.status);
            }
        } catch (error) {
            setUser(error.message);
            setStatus("500");
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
            <Dialog open = {status=="200"} >
                <div className='px-16 py-4 bg-black text-white'>
                    <div>
                        <p>Authentication Successful</p>
                        <p>{user}</p>
                    </div>
                </div>
            </Dialog>
        </>
    );
};

export default AuthForm;
