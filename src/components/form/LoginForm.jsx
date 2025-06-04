import { useState } from "react";
import Input from "./Input";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { instance } from "../helpers/axios/axiosInstance";
import { getUserInfo, isLoggedIn, storeUserInfo } from "../../services/authService";
import { ErrorToast, SuccessToast } from "../helpers/FormHelper";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("sariothossain@gmail.com");
  const [password, setPassword] = useState("asd123@@");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await instance.post("/sign-in", { email, password, rememberMe });
console.log(res,"tollllllll")
      if(res?.error?.statusCode ==500){
        ErrorToast(res?.error?.message);
      }
      
      if (res?.data?.token) {
        storeUserInfo({ token: res?.data?.token });
        SuccessToast(res?.data?.status)

        const userInfo = getUserInfo();
        if (userInfo) {
          navigate("/", { replace: true })
        }

      }
    } catch (error) {
      ErrorToast("Error: ",error);
    }
    setEmail("");
    setPassword("");
    setRememberMe(false);
  };

  const auth = isLoggedIn();
  return auth ? (<Navigate to="/" />) : (
    <form
      onSubmit={handleSubmit}
      className="bg-white px-6 py-4 w-full  rounded-sm"
    >
      <Input
        label="Email"
        placeholder="email@example.com"
        type="email"
        required={true}
        className=""
        preValue={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <div className={`mb-4 text-black `}>
        <label className="block font-medium mb-1 ">Password</label>
        <div
          className={`relative w-full bg-slate-50 text-sm rounded-sm flex justify-between items-center`}
        >
          <input
            type={showPassword ? "text" : "password"}
            className={`w-full h-full block outline-none bg-transparent py-2 px-2 relative`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div
            className="text-black absolute top-2 right-2 z-20"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <IoEyeOutline size={18} />
            ) : (
              <IoEyeOffOutline size={18} />
            )}
          </div>
        </div>
      </div>
      <label className="flex justify-start gap-1 text-sm font-normal text-stone-500 pb-2">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />{" "}
          <span>Remember me</span>
        </label>

      <button
        type="submit"
        className="w-full text-black hover:text-white mx-auto text-base font-semibold bg-blue-500 hover:bg-black ease-out rounded py-2"
      >
        SIGN IN
      </button>
      <div className="flex justify-end items-center py-2">
        
        <Link to="/sign-up" className="text-sm font-normal text-blue-500">
          create new account?
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
