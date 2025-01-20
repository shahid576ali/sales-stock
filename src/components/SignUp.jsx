import React, { useContext, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import countries from "@/assets/images/country";
import Load from "./loader/load";
import { StoreContext } from "@/context/storeContext";

const SignUp = () => {
  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {apiKey} = useContext(StoreContext);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePass = () => {
    setShowPass((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Password and ConfirmPassword must be same");
      return;
    }

    if (8 > formData.password.length) {
      setError("Password must be 8 characters long");
      return;
    }

    if (8 > formData.phone.length) {
      setError("Password must be 8 characters long");
      return;
    }

    if (!/[A-Z]/.test(formData.password)) {
      setError("Password must contain a capital letter (A-Z)");
      return;
    }
    setIsLoading(true)

    if (!/[!@#$%^&*()_+=-?><{}]/.test(formData.password)) {
      setError("Password must contain a special character (!@#$%^&*()_+=-?><{})");
      return;
    }

    try {
      const response = await axios.post(
        apiKey+"/user/signup",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;
      
      if (data.success === false) {
        console.log(data);
        toast.error(data.message);
        return
      }
      toast.success(data.message);
      setIsLoading(false);
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      setIsLoading(false)
      console.error(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <ToastContainer />
      <div className="top-48 gap-4 right-2 rounded-xl border max-w-[95%] px-6 py-8 w-[830px] flex items-center justify-center h-[480px]">
        <form
          className="flex flex-col items-left w-[90%] md:w-[55%] justify-center lg:gap-4 gap-2 h-[92%]"
          onSubmit={handleSubmit}
        >
          <h1 className="text-3xl text-gray-500 font-[600]">Sign Up</h1>
          <p className="text-gray-500">Create your account.</p>
          <div className="w-full flex-col flex lg:flex-row gap-1">
            <input
              className="border border-gray-400 outline-none p-2 px-2 rounded-[8px]"
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
            <input
              className="border border-gray-400 outline-none py-2 px-2 rounded-[8px]"
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="w-full flex-col flex lg:flex-row gap-1">
            <input
              className="border border-gray-400 outline-none p-2 px-2 rounded-[8px]"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <input
              className="border border-gray-400 outline-none py-2 px-2 rounded-[8px]"
              type="number"
              name="phone"
              placeholder="Phone No."
              value={formData.phone}
              onChange={handleInputChange}
              onInput={(e) => {
                if (e.target.value.length > 10) {
                  e.target.value = e.target.value.slice(0, 10);
                }
              }}
              required
            />
          </div>
          <div className="lg:w-[94%] w-full flex-col flex lg:flex-row gap-1">
            <div className="flex w-full lg:w-[50%] border py-2 px-2 justify-between border-gray-400 rounded-[8px]">
              <input
                className="w-full outline-none"
                type={showPass ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
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
            <div className="flex w-full lg:w-[50%] border py-2 px-2 justify-between border-gray-400 rounded-[8px]">
              <input
                className="w-full outline-none"
                type={showPass ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
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
          </div>
          {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
          <div className="flex gap-2 items-center">
            <input className="mt-1" type="checkbox" required />
            <p className="text-[11px] lg:text-[14px]">
              I agree with the terms & conditions
            </p>
          </div>
          <button
            type="submit"
            className="text-white w-20 py-[6px] rounded-[6px] bg-blue-400 flex items-center justify-center"
          >
            {isLoading?<Load /> : "Sign Up"}
          </button>
          <p>
            Already have an Account?{" "}
            <Link to={"/login"} className="text-blue-500">
              Login
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

export default SignUp;
