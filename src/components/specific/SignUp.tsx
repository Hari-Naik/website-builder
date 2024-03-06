import React from "react";

const SignUp = () => {
  return (
    <div className="w-full flex flex-col items-center sm:flex-row sm:justify-between gap-4 mt-6">
      <h1 className="text-lg text-[#5C6874] text-center">
        Sign up and get exclusive special deals
      </h1>
      <div className="flex w-max bg-red-100">
        <input
          type="email"
          placeholder="Email"
          className="px-3 py-2 rounded-s-md border border-gray-400 outline-none"
        />
        <button className="bg-[#1B88F4] text-sm text-white px-3 py-2 rounded-e-md">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUp;
