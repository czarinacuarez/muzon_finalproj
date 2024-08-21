import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { FirebaseAuth } from "../../firebase";
import { useUser } from "../../context/AuthContext";

const SignInPage = () => {
  // If user is already logged in, redirect to home
  const { user } = useUser();
  if (user) return <Navigate to="/" />;

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(
        FirebaseAuth,
        formValues.email,
        formValues.password
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    
    <main>
        <div className="flex flex-col w-full overflow-hidden relative min-h-screen radial-gradient items-center justify-center g-0 px-4">
        <div className="justify-center items-center w-full card lg:flex max-w-md">
            <div className="w-full card-body">
            <a href="../" className="py-4 block">
                <img src="../assets/images/logos/logo-light.svg" alt="" className="mx-auto" />
            </a>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                <label className="block text-sm mb-2 text-gray-400">Email</label>
                <input
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    className="py-3 px-4 block w-full border-gray-200 rounded-sm text-sm focus:border-blue-600 focus:ring-0"
                    aria-describedby="hs-input-helper-text"
                />
                </div>
                <div className="mb-6">
                <label className="block text-sm mb-2 text-gray-400">Password</label>
                <input
                    type="password"
                    name="password"
                    onChange={handleInputChange}
                    className="py-3 px-4 block w-full border-gray-200 rounded-sm text-sm focus:border-blue-600 focus:ring-0"
                    aria-describedby="hs-input-helper-text"
                />
                </div>
                <div className="flex justify-between">
                
                {/* <a href="../" className="text-sm font-semibold text-blue-600 hover:text-blue-700">Forgot Password?</a> */}
                </div>
                <div className="grid my-6">
                <button type="submit" className="btn py-[10px] text-base text-white font-medium hover:bg-blue-700">Sign In</button>
                </div>
                <div className="flex justify-center gap-2 items-center">
                <p className="text-base font-semibold text-gray-400">New user?</p>
                <Link  to="/auth/sign-up"  className="text-sm font-semibold text-blue-600 hover:text-blue-700">Create an account</Link>
                </div>
            </form>
            </div>
        </div>
        </div>

        
      {

      /* <Link className="home-link" to="/">
        ◄ Home
      </Link>
      <form className="main-container" onSubmit={handleSubmit}>
        <h1 className="header-text">Sign In</h1>
        <input
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        <input
          name="password"
          onChange={handleInputChange}
          type="password"
          placeholder="Password"
        />
        <button type="submit">Login</button>
        <Link className="auth-link" to="/auth/sign-up">
          Don't have an account? Sign Up
        </Link>
      </form> */}
    </main>
  );
};

export default SignInPage;
