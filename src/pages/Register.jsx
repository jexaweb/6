import React from "react";

function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form className="bg-gradient-to-r from-cyan-500 to-blue-500 pt-10 px-10 pb-10 shadow-md w-150 flex flex-col items-center justify-center rounded-2xl">
        <h2 className="text-3xl font-bold mb-6 text-white text-center">
          Register
        </h2>

        <div className="mb-4 w-full">
          <label className="text-lg block text-white mb-2">Forsname</label>
          <input
            type="text"
            className="w-full border border-gray-300 px-5 py-2 rounded-3xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter your Forsnamename"
            required
          />
        </div>

        <div className="mb-4 w-full">
          <label className="text-lg block text-white mb-2">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 px-5 py-2 rounded-3xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-4 w-full">
          <label className="text-lg block text-white mb-2">Password</label>
          <input
            type="password"
            className="w-full border border-gray-300 px-5 py-2 rounded-3xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter your password"
            required
          />
        </div>

        <div className="mb-4 w-full">
          <label className="text-lg block text-white mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            className="w-full border border-gray-300 px-5 py-2 rounded-3xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Re-enter your password"
            required
          />
        </div>

        <div className="mb-6 w-full">
          <label className="text-lg block text-white mb-2">Date of Birth</label>
          <input
            type="date"
            className="w-full border border-gray-300 px-5 py-2 rounded-3xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-700"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-950 text-white py-2 px-30 rounded hover:bg-blue-900 transition"
        >
          Register
        </button>

        <div className="flex gap-2 mt-5 text-white">
          <p>Already have an account?</p>
          <a
            href="/login"
            className="text-zinc-800  underline hover:text-gray-200"
          >
            Login
          </a>
        </div>
      </form>
    </div>
  );
}

export default Register;
