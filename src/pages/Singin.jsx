import Header from "../comp/header";
import Footer from "../comp/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {  signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase/config';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Signin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterro] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Signin</title>
      </Helmet>
      <Header />

      <main>
        <form>
          <input onChange={(eo) => {
            setemail(eo.target.value)
          }} required placeholder=" E-mail : " type="email" />
          <input onChange={(eo) => {
            setpassword(eo.target.value)
          }} required placeholder=" Password : " type="password" />
          <button onClick={(eo) => {
            eo.preventDefault()
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
            
              navigate("/");
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              
            switch (errorCode) {
              case "auth/user-not-found":
                seterro("not found enter emil exist ya pitch")
                break;
            
              default:seterro(errorCode)
                break;
            }
            });
          }}>Sign in</button>
          <p className="account">
            Don't hava an account <Link to="/signup"> Sign-up</Link>
          </p>
          <h2 className="text-danger">{error}</h2>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Signin;
