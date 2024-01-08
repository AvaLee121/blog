"use client"
import React from 'react';
import styles from './page.module.css';
import {signIn} from 'next-auth/react';


const Login = () => {

  const handleSubmit = async (e) =>{
    e.preventDefault();
    
    const email = e.target[0].value;
    const password = e.target[1].value;

    const result = await signIn("credentials", { email, password });

    if (result.error) {
      console.error("Authentication error:", result.error);
    }
  };


  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type='email' placeholder='email' className={styles.input} required/>
        <input type='password' placeholder='password' className={styles.input} required/>
        <button className={styles.button}>Login</button>
      </form>
      <button onClick={() => signIn("google")}>Login with Google</button>
      <a href="./register">
        <button>Create a new account</button>
      </a>
      
    </div>
  );
};

export default Login
