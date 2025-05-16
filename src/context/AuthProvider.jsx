import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase';

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const SignInUser = async (email, password) => {
        try {
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          setUser(userCredential.user);
          return userCredential.user;
        } catch (err) {
          console.error("Sign in error:", err.message);
          throw err;
        }
      };
    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
        setLoading(false)
        return ()=>{
            unsubscribe()
        }
       })
    },[])
    const authInfo={
        user,
        loading,
        createUser,
        SignInUser

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;