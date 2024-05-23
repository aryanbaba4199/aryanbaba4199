import React, { useState } from 'react';
import { auth, googleProvider, fbProvider } from "@/utils/firebase";
import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from '@firebase/auth';
import { useRouter } from 'next/router';
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
            if (credential === "Google") {
                await signInWithPopup(auth, googleProvider);
            } else if (credential === "facebook") {
                await signInWithPopup(auth, fbProvider);
            } else if (credential === "Email") {
                await signInWithEmailAndPassword(auth, email, pswd);
            }
            if (auth.currentUser) {
                const currentUser = auth.currentUser;
                console.log(currentUser);
                setUser(currentUser);

            } else {
                setUser("Credential not found")
            }


        } catch (error) {
            console.error("Error during sign-in", error);
            setUser("Credential not found")

        }
    };

    const signupHandler = async (name, email, password) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await updateProfile(user, { displayName: name });

            console.log(user);

            setUser(user);

        } catch (error) {
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
                    <p className='text-center text-white py-1 font-serif text-lg'>Firebase Authentication</p>
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
                            <img
                                onClick={() => signInHandler("Google")}
                                src='https://cdn-icons-png.flaticon.com/256/300/300221.png'
                                className='w-8 mt-2  mb-4 hover:cursor-pointer hover:animate-spin'
                                alt="Google Sign-In"
                            />
                            <img
                                onClick={() => signInHandler("facebook")}
                                src='https://cdn-icons-png.flaticon.com/256/5968/5968764.png'
                                className='w-8 mt-2 mb-4 hover:cursor-pointer hover:animate-spin'
                                alt="Facebook Sign-In"
                            />
                        </div>
                        <button type="button" onClick={handleSwitch} className=''>{switcher} </button>
                    </form>
                </div>
            </div>
            <Dialog open={user != null} onClose={() => setUser(null)}>

                <div className='px-16'>
                    <div className='bg-slate-950 text-white flex flex-col justify-center items-center px-16 py-5'>
                        <img
                            src={user?.photoURL} alt='No Image Found'
                            className='w-12 mt-4'
                        />
                        <p className='mt-4'>Hi {user?.displayName}</p>
                        <p className='mt-2'>You are Successfully Logged In... </p>
                        <div onClick={() => setFire(false)}>
                            <button onClick={() => setUser(null)} className='bg-purple-600 px-4 py-1 rounded-md mt-4'>Done</button>
                        </div>
                    </div>
                </div>
            </Dialog>
            <Dialog open={user == "Credential not found"} onClose={() => setUser(null)}>

                <div className=''>
                    <div className='bg-slate-950 text-white flex flex-col justify-center items-center px-16 py-5'>

                        <p className='mt-4'>Sorry  {name}</p>
                        <p className='mt-2'>Your Credential Not Found </p>

                        <button onClick={() => setUser(null)} className='bg-purple-600 px-4 py-1 rounded-md mt-4'>Done</button>

                    </div>
                </div>
            </Dialog>
        </>
    );
};

export default AuthForm;
