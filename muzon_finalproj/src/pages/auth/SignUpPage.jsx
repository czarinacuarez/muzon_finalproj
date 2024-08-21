import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { FirebaseAuth } from "../../firebase";
import { useUser } from "../../context/AuthContext";

const SignUpPage = () => {
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
      await createUserWithEmailAndPassword(
        FirebaseAuth,
        formValues.email,
        formValues.password
      );
    } catch (e) {
      alert(e.message);
    }
  };

  return (


    <main>
  {/* Main Content */}
  <div className="flex flex-col w-full overflow-hidden relative min-h-screen radial-gradient items-center justify-center g-0 px-4">
    <div className="justify-center items-center w-full card lg:flex max-w-md">
      <div className="w-full card-body">
        <a href="../" className="py-4 block">
          <img src="../assets/images/logos/logo-light.svg" alt="" className="mx-auto" />
        </a>
        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm mb-2 text-gray-400">Email</label>
            <input
              name="email"
               onChange={handleInputChange}
               type="email"
              className="py-3 px-4 block w-full border-gray-200 rounded-sm text-sm focus:border-blue-600 focus:ring-0"
              aria-describedby="hs-input-helper-text"
            />
          </div>
         
          {/* Password */}
          <div className="mb-4">
            <label htmlFor="forPassword" className="block text-sm mb-2 text-gray-400">Password</label>
            <input
             name="password"
                    onChange={handleInputChange}
                 type="password"
              className="py-3 px-4 block w-full border-gray-200 rounded-sm text-sm focus:border-blue-600 focus:ring-0"
              aria-describedby="hs-input-helper-text"
            />
          </div>
          <div className="grid my-6">
            <button type="submit" href="../" className="btn py-[10px] text-base text-white font-medium hover:bg-blue-700">Sign Up</button>
          </div>
          <div className="flex justify-center gap-2 items-center">
            <p className="text-base font-semibold text-gray-400">Already have an Account?</p>
            <Link  to="/auth/sign-in" className="text-sm font-semibold text-blue-600 hover:text-blue-700">Sign In</Link>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* End of project */}
</main>


    // <main>
    //   <Link className="home-link" to="/">
    //     ◄ Home
    //   </Link>
    //   <form className="main-container" onSubmit={handleSubmit}>
    //     <h1 className="header-text">Sign Up</h1>
    //     <p
    //       style={{
    //         textAlign: "center",
    //         fontSize: "0.8rem",
    //         color: "#777",
    //       }}
    //     >
    //       Demo app, please don't use your real email or password
    //     </p>
    //     <input
    //       name="email"
    //       onChange={handleInputChange}
    //       type="email"
    //       placeholder="Email"
    //     />
    //     <input
    //       name="password"
    //       onChange={handleInputChange}
    //       type="password"
    //       placeholder="Password"
    //     />
    //     <button type="submit">Create Account</button>
    //     <Link className="auth-link" to="/auth/sign-in">
    //       Already have an account? Sign In
    //     </Link>
    //   </form>
    // </main>
  );
};

export default SignUpPage;
