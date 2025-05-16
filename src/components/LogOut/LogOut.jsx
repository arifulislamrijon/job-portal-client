
import { signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";

const Logout = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out");
    } catch (err) {
      console.error(err.message);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
