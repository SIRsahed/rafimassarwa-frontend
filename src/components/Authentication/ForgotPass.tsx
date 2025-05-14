"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail } from "lucide-react";

// Define the form schema with Zod
const formSchema = z
  .object({
    email: z.string().email({
      message: "Please enter a valid email address.",
    })
  })

type FormValues = z.infer<typeof formSchema>;

export default function ForgotPass() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    // Handle form submission here
  };

  return (
    <div className="flex min-h-screen items-center justify-center  p-4 bg-gradient-to-l bg-[#eaf6ec]">
      <div className="w-full max-w-6xl overflow-hidden rounded-[2rem] bg-white shadow-[0_0_40px_rgba(0,0,0,0.2)] h-[778px]">
        <div className="mx-auto">
          <div className="w-full p-10  h-[778px] flex flex-col items-center justify-center">
            {/* ADDED: Step Indicator */}
            <p className="mb-2 text-center text-gray-500">Step 1 of 3</p>

            <h1 className="mb-3 text-center text-3xl font-bold">
                Forgot Password
            </h1>

            <p className="mb-3 text-center text-gray-600">
                Enter your email to receive the OTP
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 md:w-[40%]">


              {/* Email field */}
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded border border-gray-300 py-3 pl-4 pr-10 outline-none focus:border-green-500"
                  {...register("email")}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
                  <Mail size={20} />
                </div>
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* otp button */}
              <button
                type="submit"
                className="mt-2 w-full rounded bg-green-500 py-3 font-medium text-white transition-colors hover:bg-green-600"
              >
                Send OTP
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}