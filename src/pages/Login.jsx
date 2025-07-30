import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <form
          form
          className="bg-gradient-to-r from-cyan-500 to-blue-500 pt-25 pr-70 pb-25 pl-70  shadow-md w-full max-w-sm flex items-center justify-center flex-col rounded-2xl"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <div className="mb-4">
            <label className=" text-2xl block text-gray-700 mb-2">Email</label>
            <div>
              {/* <i class=" absolute top-88 left-182 text-white text-2xl"></i> */}
              <input
                type="email"
                className=" w-100 border border-gray-300 px-5 py-2 pr-10 rounded-3xl focus:outline-none focus:ring-2 focus:ring-purple-500 "
                placeholder="Enter your email"
                required
              />
              <img src="" alt="" />
            </div>
          </div>
          <div className="mb-6">
            <label className="text-2xl block text-gray-700 mb-1">
              Password
            </label>
            <div>
              <input
                type="password"
                className=" w-100  border border-gray-300 px-5 py-2 pr-10 rounded-3xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-950 text-white py-2 px-30 rounded hover:bg-blue-900 transition"
          >
            Login
          </button>

          <div className="flex gap-2 mt-5">
            <span>Don't have an account?</span>
            <Link to="/register" className="text-zinc-800 hover:text-gray-200">
              Register
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
