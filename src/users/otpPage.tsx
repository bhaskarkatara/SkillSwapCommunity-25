"use client";

import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { verifyOtp } from "../api/auth";

const OtpPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const signupData = location.state; 
     console.log(signupData);
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow only digits and ensure it's 6 digits long
    if (/^\d{0,6}$/.test(value)) {
      setOtp(value);
      setError(""); // Clear error on input change
    }
  };

  const handleVerifyOtp = async () => {
    if (otp.length !== 6) {
      setError("Please enter a 6-digit OTP.");
      return;
    }

    try {
        const numericOtp = parseInt(otp, 10);
      const payload = {
        userDetails : {
            ...signupData, // includes name, email, contact, skills, password
            
        }, otp: numericOtp
       
      };
      console.log(payload);
      const res = await verifyOtp(payload);
      console.log("OTP Verified:", res);
      navigate("/login", { state: signupData }); // Redirect to dashboard with user data
    } catch (err) {
      console.error("OTP Verification Error:", err);
      setError("Invalid OTP or verification failed.");
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md p-8 shadow-xl rounded-2xl">
        <CardContent className="space-y-6">
          <h1 className="text-3xl font-bold text-center">Verify OTP</h1>

          <div className="space-y-4">
            {/* OTP Input */}
            <div>
              <label className="block mb-1 text-sm font-medium">Enter 6-Digit OTP</label>
              <Input
                value={otp}
                onChange={handleOtpChange}
                placeholder="Enter the OTP"
                maxLength={6} // Adjusted for 6 digits
                className="border-gray-300"
              />
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* Submit Button */}
            <Button className="w-full" onClick={handleVerifyOtp}>
              Submit OTP
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OtpPage;
