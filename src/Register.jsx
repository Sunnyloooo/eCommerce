import React from 'react';

const Register = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-light mb-8 text-center">Register</h1>
      <div className="max-w-sm mx-auto bg-white p-8 rounded-sm border border-gray-200">
        <form>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="username">Username</label>
            <input className="shadow appearance-none border border-gray-300 rounded-sm w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-gray-500" id="username" type="text" placeholder="Username" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">Email</label>
            <input className="shadow appearance-none border border-gray-300 rounded-sm w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-gray-500" id="email" type="email" placeholder="Email" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="password">Password</label>
            <input className="shadow appearance-none border border-gray-300 rounded-sm w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-gray-500" id="password" type="password" placeholder="******************" />
          </div>
          <div className="flex items-center justify-between">
            <button className="border border-gray-700 text-gray-700 px-6 py-3 text-base rounded-sm hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:shadow-outline uppercase tracking-wide" type="button">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;