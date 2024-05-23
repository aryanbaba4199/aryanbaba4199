import React, { useState } from 'react';

import { useRouter } from 'next/router';
import { supabase } from '@/utils/supabase';
import { Dialog } from '@mui/material';

const AuthForm = ({ setFire }) => {
    const router = useRouter();

    const [formType, setFormType] = useState("Log in");
    const [switcher, setSwitcher] = useState("Create Account");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pswd, setPswd] = useState("");
    const [user, setUser] = useState(null);

    const handleSwitch = () => {
        if (formType === "Log in") {
            setFormType("Sign up");
            setSwitcher("Log in Page");
        } else {
            setFormType("Log in");
            setSwitcher("Create Account");
        }
    };

    const signInHandler = async (credential) => {
        try {
            if (credential === "Email") {
                const { user, error } = await supabase.auth.signInWithPassword({
                    email,
                    password: pswd,
                });

                if (error) {
                    throw error;
                }

                setUser(user);
            }
        } catch (error) {
            console.error("Error during sign-in", error);
            setUser("Credential not found");
        }
    };

    const signupHandler = async (name, email, password) => {
        try {
            const { user, error } = await supabase.auth.signUp({
                email,
                password,
            });

            if (error) {
                throw error;
            }

            await supabase.auth.updateUser({ 
                data: { display_name: name }
            });

            setUser(user);
        } catch (error) {
            setUser("Credential not found")
            console.error("Error during signup", error);
        }
    };

    const handleAuth = async (event) => {
        event.preventDefault();
        if (formType === "Log in") {
            signInHandler("Email");
        } else {
            signupHandler(name, email, pswd);
        }
    };

    return (
        <>
            <div className="main h-[33rem]">
                <input type="checkbox" id="chk" aria-hidden="true" />

                <div className="login px-16">
                    <p className='text-center text-white py-1 font-serif text-lg'>Supabase Authentication</p>
                    <form className="form mt-8" onSubmit={handleAuth}>
                        <label htmlFor="chk" aria-hidden="true">{formType}</label>
                        {switcher === "Log in Page" && (
                            <input
                                className="input"
                                type="text"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Name"
                                required
                            />
                        )}
                        <input
                            className="input"
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            required
                        />
                        <input
                            className="input"
                            type="password"
                            name="pswd"
                            value={pswd}
                            onChange={(e) => setPswd(e.target.value)}
                            placeholder="Password"
                            required
                        />
                        <button type="submit">{formType}</button>
                        <p className='text-center text-white'>Or</p>

                        <div className='flex justify-center gap-16 items-center '>
                            {/* OAuth providers can be added similarly, if supported by Supabase */}
                        </div>
                        <button type="button" onClick={handleSwitch} className=''>{switcher}</button>
                    </form>
                </div>
            </div>
            <Dialog open={user != null} onClose={() => setUser(null)}>
                <div className='px-16'>
                    <div className='bg-slate-950 text-white flex flex-col justify-center items-center px-16 py-5'>
                        <p className='mt-4'>Hi {user?.user_metadata?.name || user?.email}</p>
                        <p className='mt-2'>You are Successfully Logged In...</p>
                        <div onClick={() => setFire(false)}>
                            <button onClick={() => setUser(null)} className='bg-purple-600 px-4 py-1 rounded-md mt-4'>Done</button>
                        </div>
                    </div>
                </div>
            </Dialog>
            <Dialog open={user === "Credential not found"} onClose={() => setUser(null)}>
                <div className=''>
                    <div className='bg-slate-950 text-white flex flex-col justify-center items-center px-16 py-5'>
                        <p className='mt-4'>Sorry {name}</p>
                        <p className='mt-2'>Your Credential Not Found</p>
                        <button onClick={() => setUser(null)} className='bg-purple-600 px-4 py-1 rounded-md mt-4'>Done</button>
                    </div>
                </div>
            </Dialog>
        </>
    );
};

export default AuthForm;
