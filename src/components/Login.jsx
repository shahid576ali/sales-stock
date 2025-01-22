import countries from "@/assets/images/country";
import { Eye, EyeOff } from "lucide-react";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./loader/Loader";
import axios from "axios";
import { StoreContext } from "@/context/storeContext";
import Load from "./loader/Load";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoad, setIsLoad] = useState(false);
  const navigate = useNavigate();

  const { userDetails, apiKey } = useContext(StoreContext);

  const handlePass = () => {
    setShowPass((prev) => !prev);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoad(true);

    try {
      const response = await axios.post(apiKey + "/user/signin", {
        email,
        password,
      });
      const data = response.data;
      if (data.success) {
        setIsLoading(true);

        document.cookie = `authToken=${data.token}; path=/; max-age=3600; secure=false; sameSite=Strict`;

        const user = data.userId;
        userDetails(user);

        localStorage.setItem("userId", user);

        setTimeout(() => {
          navigate("/");
          setIsLoading(false);
          setIsLoad(false);
        }, 3000);
      } else {
        setIsLoading(false);
        setIsLoad(false);
        toast.error(data.message, {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch (error) {
      setIsLoading(false);
      setIsLoad(false);
      toast.error(error.response?.data?.message || "An error occurred.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return isLoading ? (
    <Loader />
  ) : (
    <div className="h-screen w-full flex items-center justify-center">
      <ToastContainer />
      <div className="top-48 gap-8 right-2 rounded-xl border px-6 py-8 w-[830px] flex items-center justify-center max-w-[90%] h-[480px]">
        <form
          onSubmit={handleLogin}
          className="flex flex-col items-left w-[90%] md:w-[55%] justify-around h-[92%]"
        >
          <h1 className="text-3xl text-gray-500 font-[600]">Sign In</h1>
          <p className="text-gray-500">Login to stay connected.</p>
          <input
            className="border border-gray-400 outline-none p-2 px-2 rounded-[8px]"
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="flex w-full border h-[41px] items-center px-2 justify-between border-gray-400 rounded-[8px]">
            <input
              className="w-full outline-none h-full"
              type={showPass ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="off"
            />
            {!showPass ? (
              <Eye
                onClick={handlePass}
                className="cursor-pointer"
                color="gray"
              />
            ) : (
              <EyeOff
                onClick={handlePass}
                className="cursor-pointer"
                color="gray"
              />
            )}
          </div>
          <div className="flex gap-2 items-center">
            <input className="mt-1" type="checkbox" name="remember" />
            <p>Remember Me</p>
          </div>
          <a className="text-blue-500 text-right" href="#">
            Forgot Password?
          </a>
          <button
            type="submit"
            disabled={isLoad}
            className={`text-white w-20 py-[6px] rounded-[6px] ${
              isLoad ? "bg-blue-300" : "bg-blue-500"
            } flex items-center justify-center`}
          >
            {isLoad ? <Load /> : "Sign In"}
          </button>
          <p>
            Create an Account{" "}
            <Link to="/signup" className="text-blue-500">
              Sign Up
            </Link>
          </p>
        </form>
        <img
          className="w-[40%] hidden lg:block"
          src={countries.form}
          alt="background"
        />
      </div>
    </div>
  );
};

export default Login;
