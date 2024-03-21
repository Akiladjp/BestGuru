import NavBar from "../NavBar/NavBar";
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <>
    <div>
    <NavBar/>
    </div>
    <section className="bg-gray-50 dark:bg-gray-900 w-screen h-screen flex items-center justify-center overflow-hidden">
  <div className="flex flex-col items-center justify-center px-6 py-8 md:h-full md:max-w-md lg:max-w-lg">
    <img className="mt-10 p-1 rounded-full bg-gray-50 dark:bg-gray-900 w-14 h-15 mr-2" src="public/portrait-boy-with-brown-hair-brown-eyes_1308-146018.avif" alt="logo" />
    <div className="h-81 bg-white rounded-lg shadow dark:border dark:bg-white dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
          Sign in to your account
        </h1>
        <form className="space-y-4 md:space-y-6" action="#">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your name or email</label>
            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name or email" required />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Password</label>
            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-start"></div>
            <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
          </div>
          <button type="submit" className="w-full text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-500 dark:hover:bg-green-700 dark:focus:ring-green-800">Login</button>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Don’t have an account yet? <Link to='Register' className="font-medium text-primary-600 hover:underline dark:text-primary-500">Register</Link>
          </p>
        </form>
      </div>
    </div>
    <div className="m-10">
      <p className="font-light text-gray-500 dark:text-gray-400">
        Please note that all content is subject to our policy, and all rights are reserved.
      </p>
    </div>
  </div>
</section>

    </>
  );
}
