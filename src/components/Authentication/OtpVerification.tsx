"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
// import { useRouter } from "next/navigation"

export default function OtpVerification() {
  // const router = useRouter()
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""])
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])
  const [isResending, setIsResending] = useState(false)

  // Pre-focus the first empty input on component mount
  useEffect(() => {
    const firstEmptyIndex = otp.findIndex((digit) => digit === "")
    if (firstEmptyIndex !== -1 && inputRefs.current[firstEmptyIndex]) {
      inputRefs.current[firstEmptyIndex]?.focus()
    }
  }, [otp])

  const handleChange = (index: number, value: string) => {
    // Only allow numbers
    if (!/^\d*$/.test(value)) return

    const newOtp = [...otp]
    newOtp[index] = value.slice(-1) // Take only the last character if multiple are pasted
    setOtp(newOtp)

    // Auto-focus next input if current input is filled
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Move to previous input on backspace if current input is empty
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData("text/plain").trim()

    // Check if pasted content is numeric and has appropriate length
    if (!/^\d+$/.test(pastedData)) return

    const digits = pastedData.split("").slice(0, 6)
    const newOtp = [...otp]

    digits.forEach((digit, index) => {
      if (index < 6) newOtp[index] = digit
    })

    setOtp(newOtp)

    // Focus the next empty input or the last input if all are filled
    const nextEmptyIndex = newOtp.findIndex((digit) => digit === "")
    if (nextEmptyIndex !== -1) {
      inputRefs.current[nextEmptyIndex]?.focus()
    } else {
      inputRefs.current[5]?.focus()
    }
  }

  const handleResendOtp = async () => {
    setIsResending(true)

    // Simulate API call to resend OTP
    setTimeout(() => {
      setIsResending(false)
      // You could reset the OTP fields here if needed
      // setOtp(["", "", "", "", "", ""]);
    }, 2000)
  }

  const handleVerify = () => {
    const otpString = otp.join("")

    // Check if OTP is complete
    if (otpString.length !== 6) {
      alert("Please enter the complete 6-digit OTP")
      return
    }

    // Here you would typically validate the OTP with your backend
    console.log("Verifying OTP:", otpString)

    // Simulate successful verification
    // router.push("/reset-password");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#eaf6ec]">
      <div className="w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-[0_0_40px_rgba(0,0,0,0.2)] h-[778px]">
        <div className="flex flex-col items-center justify-center h-full">
          {/* ADDED: Step Indicator */}
          <p className="text-center text-gray-500 mb-2">Step 2 of 3</p>

          <h1 className="text-2xl font-bold mb-4">Enter OTP</h1>

          <p className="text-center text-gray-600 mb-6">
            An OTP has been sent to your email address
            <br />
            please verify it below
          </p>

          <div className="flex gap-2 mb-6">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={index === 0 ? handlePaste : undefined}
                className="w-12 h-12 text-center text-xl font-semibold border border-gray-300 rounded-md focus:border-green-500 focus:outline-none"
              />
            ))}
          </div>

          <div className="text-sm mb-6">
            Didn&apos;t Receive OTP?
            <button
              onClick={handleResendOtp}
              disabled={isResending}
              className="text-green-500 font-medium ml-1 hover:text-green-600 focus:outline-none"
            >
              {isResending ? "SENDING..." : "RESEND OTP"}
            </button>
          </div>

          <button
            onClick={handleVerify}
            className="w-[40%] py-3 bg-green-500 text-white font-medium rounded hover:bg-green-600 transition-colors focus:outline-none"
          >
            Verify
          </button>
        </div>
      </div>
    </div>
  )
}