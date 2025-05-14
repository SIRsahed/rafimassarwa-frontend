"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Eye, EyeOff } from "lucide-react"

// Define the form schema with Zod
const formSchema = z
  .object({
    newPassword: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
    confirmPassword: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  })

type FormValues = z.infer<typeof formSchema>

export default function ResetPasswordForm() {
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
    // Handle form submission here
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-4 bg-[#eaf6ec]">
      <div className="w-full max-w-6xl h-[778px] overflow-hidden rounded-2xl bg-white shadow-[0_0_40px_rgba(0,0,0,0.1)] p-8">
        <div className="flex flex-col items-center justify-center h-full w-[40%] mx-auto">
          {/* ADDED: Step Indicator */}
          <p className="mb-2 text-center text-gray-500">Step 3 of 3</p>

          <h1 className="mb-4 text-center text-3xl font-bold">Reset Password</h1>

          <p className="mb-8 text-center text-gray-600">Please kindly set your new password</p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 w-full">
            {/* New Password field */}
            <div className="relative">
              <input
                type={showNewPassword ? "text" : "password"}
                placeholder="New Password"
                className="w-full rounded border border-gray-300 py-3 pl-4 pr-10 outline-none focus:border-green-500"
                {...register("newPassword")}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
              {errors.newPassword && <p className="mt-1 text-xs text-red-500">{errors.newPassword.message}</p>}
            </div>

            {/* Confirm Password field */}
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full rounded border border-gray-300 py-3 pl-4 pr-10 outline-none focus:border-green-500"
                {...register("confirmPassword")}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
              {errors.confirmPassword && <p className="mt-1 text-xs text-red-500">{errors.confirmPassword.message}</p>}
            </div>

            {/* Continue button */}
            <button
              type="submit"
              className="mt-6 w-full rounded bg-green-500 py-3 font-medium text-white transition-colors hover:bg-green-600"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}