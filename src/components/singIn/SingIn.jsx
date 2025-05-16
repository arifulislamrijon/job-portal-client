import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { auth } from "../../../Firebase/Firebase";
import AuthContext from "../../context/AuthContext";


const SignIn = () => {
  const { SignInUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  
  const handleSignin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
      setSuccess("Signed in successfully");
      setEmail("");
      setPassword("");
    } catch (err) {
      setError(err.message);
    }
  };



  return (
    <div className="max-w-md mx-auto mt-10 bg-amber-200 p-6 shadow">
      <h2 className="text-3xl mb-4">Log In</h2>
      {error && <p className="text-red-500 mb-3">{error}</p>}
      {success && <p className="text-green-500 mb-3">{success}</p>}
      <form onSubmit={handleSignin} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            name="email"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            name="password"
          />
        </div>
        <button className="w-full py-2 rounded bg-blue-600 text-white" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignIn;
