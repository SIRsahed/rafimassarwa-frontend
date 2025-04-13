"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Eye, EyeOff, User, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import googleImag from '../../../public/images/Authentication/google.png';
import appleImg from '../../../public/images/Authentication/apple.png';
import microsoft from '../../../public/images/Authentication/microsoft.png';

// Define the form schema with Zod
const formSchema = z
  .object({
    username: z.string().min(3, {
      message: "Username must be at least 3 characters.",
    }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
  })

type FormValues = z.infer<typeof formSchema>;

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    // Handle form submission here
  };

  return (
    <div className="flex min-h-screen items-center justify-center  p-4 bg-gradient-to-r from-[white] to-[#e8f7eb]">
      <div className="w-full max-w-6xl overflow-hidden rounded-[2rem] bg-white shadow-[0_0_40px_rgba(0,0,0,0.2)] h-[778px]">
        <div className="flex flex-col md:flex-row">
          {/* left side - Welcome message */}
          <div className="relative w-[70%] h-[778px]">
            <div className="bg-gradient-to-br from-[#f0f9f0] to-[#e6f7e6] p-10  -skew-x-12 w-full h-full absolute right-20 shadow-[0_0_40px_rgba(0,0,0,0.2)]"></div>
            
            <div className="absolute flex flex-col items-center justify-center w-full h-full text-gray-700 pr-10">
              <h1 className="mb-4 text-center text-5xl font-bold">
                Welcome Back!
              </h1>
              <p className="mb-8 text-center">
                To keep connected with us please login with your
                personal info
              </p>
            </div>
          </div>

          {/* right side - Registration Form */}
          <div className="w-full md:w-1/2 h-[778px] flex flex-col items-center justify-center">
            <h1 className="mb-8 text-center text-3xl font-bold">
              Login
            </h1>

            {/* Social login options */}
            <div className="mb-6 flex justify-center space-x-4">
              <button className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                <Image
                  src={googleImag}
                  alt="Google"
                  width={24}
                  height={24}
                />
                
              </button>
              <button className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                <Image
                  src={microsoft}
                  alt="Microsoft"
                  width={24}
                  height={24}
                />
              </button>
              <button className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                <Image
                  src={appleImg}
                  alt="Apple"
                  width={24}
                  height={24}
                />
              </button>
            </div>

            <p className="mb-8 text-center text-gray-600">
              or use your username for login
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 w-full pr-5">
              {/* Username field */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full rounded border border-gray-300 py-3 pl-4 pr-10 outline-none focus:border-green-500"
                  {...register("username")}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
                  <User size={20} />
                </div>
                {errors.username && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.username.message}
                  </p>
                )}
              </div>

              {/* Password field */}
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full rounded border border-gray-300 py-3 pl-4 pr-10 outline-none focus:border-green-500"
                  {...register("password")}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
                {errors.password && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div>
                <Link href="/forgot-password">
                  <p className="text-sm text-gray-500 text-center">Forgot password?</p>
                </Link>
              </div>

              {/* Register button */}
              <button
                type="submit"
                className="mt-2 w-full rounded bg-green-500 py-3 font-medium text-white transition-colors hover:bg-green-600"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
