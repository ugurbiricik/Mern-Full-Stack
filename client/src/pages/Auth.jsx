import React, { useState } from "react";
import { loginAction, registerAction } from "../redux/actions/auth";
import { useDispatch } from "react-redux";

const Auth = () => {
  const initialState = {
    username: "",
    email: "",
    password: "",
  };
  const [signUp, setSignUp] = useState(true);
  const [authData, setAuthData] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };

  const authFunc = () => {
    if (signUp) {
      dispatch(registerAction(authData));
    } else {
      dispatch(loginAction(authData));
      window.location = "/";
    }
  };

  return (
    <div className="w-full h-screen bg-gray-100 flex items-center justify-center fixed top-0 right-0 bottom-0 left-0 z-50">
      <div className="w-1/3 bg-white p-3">
        <h1 className="text-2xl text-indigo-700 font-bold">
          {signUp ? "REGISTER" : "LOGIN"}
        </h1>
        <div className="flex flex-col space-y-3 my-5">
          {signUp && (
            <input
              type="text"
              placeholder="Username"
              className="input-style"
              onChange={handleChange}
              value={authData.username}
              name="username"
            />
          )}
          <input
            type="text"
            placeholder="Email"
            className="input-style"
            onChange={handleChange}
            value={authData.email}
            name="email"
          />
          <input
            type="text"
            placeholder="Password"
            className="input-style"
            onChange={handleChange}
            value={authData.password}
            name="password"
          />
        </div>
        <div className="text-red-500 text-xsm cursor-pointer mb-4">
          {signUp ? (
            <span onClick={() => setSignUp(false)}>
              Daha önce kayit yaptiniz mi?
            </span>
          ) : (
            <span onClick={() => setSignUp(true)}>
              Kayit olmak icin tiklayiniz
            </span>
          )}
        </div>
        <div
          onClick={authFunc}
          className="cursor-pointer hover:bg-indigo-800 w-full p-2 text-center bg-indigo-600 text-white rounded-md"
        >
          {signUp ? "Kayit Ol" : "Giris Yap"}
        </div>
      </div>
    </div>
  );
};

export default Auth;
