import { Link } from "react-router-dom";
import { useUser } from "../../context/AuthContext";
import { FirebaseAuth } from "../../firebase";


const ProtectedPage = () => {
  const { user } = useUser();
  return (
    <main>
      <Link className="home-link" to="/">
        ◄ Home
      </Link>
      <h1></h1>
      {user ? (
            <button onClick={() => FirebaseAuth.signOut()}>Sign Out</button>
          ) : (
            <Link to="/auth/sign-in">Sign In</Link>
          )}
      <section className="main-container">
        <h1 className="header-text">This is a Protected Page</h1>
        <p>Current User : {user?.email || "None"}</p>
      </section>
    </main>
  );
};

export default ProtectedPage;
