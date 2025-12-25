"use client";

import Link from "next/link";
import { useState } from "react";
import { LuEye } from "react-icons/lu";
import { LuEyeClosed } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import Loading from "@/app/loading";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length <= 6) setPasswordError("Password must be more than 6 characters long.");
    else {
      try {
        setIsProcessing(true);
        const userData = {email, password};
        const result = await signIn("credentials", {...userData, redirect: false});

        if (!result.ok) return toast.error("Email or password is incorrect. Please try again.");
        toast.success("Successfully logged in");
      }
      catch (err) {
        toast.error(err.message);
      }
      finally {setIsProcessing(false);}
    }
  }

  return (
    <>
    {
      isProcessing && 
      <div className="absolute h-screen w-screen bg-white z-60">
        <Loading />
      </div>
    }
    <section className="min-h-screen flex items-center justify-center px-4">
      <form className="w-full max-w-md border-2 border-(--primary-color)/10 rounded-2xl shadow-lg p-8 relative"
            onSubmit={handleSubmit}
            >

        {/* Go Back */}
        <button
          type="button"
          className="absolute top-6 left-6 flex items-center gap-2 text-sm text-(--primary-color) hover:underline cursor-pointer"
          onClick={() => router.back()}
        >← Go Back
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-900 my-5">
          Login
        </h2>

        {/* Email */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-800 mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            placeholder="yourname@example.com"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-(--primary-color)"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-800 mb-2">
            Password
          </label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              required
              className={`w-full px-4 py-3 pr-12 rounded-lg border ${passwordError ? "border-red-600" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-(--primary-color)`}
              onChange={(e) => {
                if (e.target.value.length > 6) setPasswordError("");
              }}
            />

            {/* Show / Hide Button */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-4 flex items-center text-(--primary-color) text-2xl cursor-pointer"
            >
              {showPassword ? <LuEyeClosed /> : <LuEye />}
            </button>
          </div>
          {
            passwordError && <p className="text-red-600 text-sm py-2">{passwordError}</p>
          }
        </div>

        {/* Forgot Password */}
        <div className="mb-4 text-right">
          <Link
            href="/forgot-password"
            className="text-sm text-(--primary-color) hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="btn-primary w-full"
        >
          Login
        </button>

        <button
          type="button"
          className="btn-secondery w-full my-4 flex items-center gap-4 justify-center"
          onClick={() => signIn('google', {redirect: false})}>
         <FcGoogle size={24}/> Login with Google
        </button>

        {/* Register */}
        <p className="text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <Link
            href="/register"
            className="text-(--primary-color) font-medium hover:underline"
          >
            Register
          </Link>
        </p>
      </form>
    </section>
    </>
  );
};

export default Login;
