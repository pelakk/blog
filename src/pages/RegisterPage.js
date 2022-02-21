import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registered, setRegistered] = useState(false);
  const [time, setTime] = useState(10);

  initializeApp(firebaseConfig);
  const auth = getAuth();

  let navigate = useNavigate();

  const register = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setRegistered(true);
        setInterval(() => {
          setTime((prevTime) => prevTime - 1);
        }, 1000);
        setTimeout(() => navigate("/"), 10000);
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
      });
  };

  return (
    <div>
      <div className="aspect-auto bg-red-500 hero" style={{ height: 220 }}>
        <div className="container xl:w-[60%] w-[90%] m-auto">
          <div className="rounded-lg overflow-hidden mb-10">
            <div className="mt-12">
              <Link to="/">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  {"<"} Go back to home page
                </button>
              </Link>
            </div>
            <p className="text-6xl font-semibold text-center mb-12">REGISTER</p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-5">
        <div className="container xl:w-[50%]">
          <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <Link to="/login">
              <p className="p-2">{"<"}</p>
            </Link>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="********"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <button
                className="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded cursor-pointer"
                onClick={register}
              >
                Register
              </button>
            </div>
            <p className="text-green-600 text-bold font-semibold text-2xl text-center">
              {registered
                ? `Registered, you will be redirected to home page in ${time} seconds where you can log in`
                : ""}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
