import React from 'react'

const Login = () => {
  return (
    <div className='mt-0 flex min-h-screen flex-col  justify-center items-center  md:w-3/4     md:ml-52 '>
      <h1 className='text-4xl mt-16 font-serif font-bold mb-16'>Login <span className='text-orange-500'>Here</span></h1>
       <form className='bg-gray-400 shadow-lg rounded p-10'>
       <div className='mb-5 ' >
        <label className='font-bold font-serif' htmlFor="input ">Name</label>
        <input className='w-full mt-1 px-4 py-2 bg-gray-300  rounded border-none outline-none focus:ring-2 focus:ring-orange-500' placeholder='enter your name  ' type="text" required />
       </div>
       <div className='mb-5' >
        <label  className='font-bold font-serif' htmlFor="email">email</label>
        <input className='bg-gray-300  mt-1  w-full px-4 py-2 rounded border-none outline-none focus:ring-2 focus:ring-orange-500 ' placeholder='enter your email ' type="email" required />
       </div>
       <div >
        <label  className='font-bold font-serif' htmlFor="password">Password</label>
        <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-300 rounded outline-none border-none focus:ring-2 bottom-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter your password"
            />       </div>
       <div >
        <button className='w-full shadow-lg  mt-10 font-serif font-bold text-xl bg-orange-500 rounded p-3 hover:bg-white transition-all duration-300' type='sumbit'>Login</button>
       </div>
       <div className="mt-6 flex text-center text-lg text-gray-400">
         <p className='text-red-600 font-serif font-semibold underline mr-2'> Don't have an account</p>
          <a href="#" className="text-blue-700 font-bold hover:underline">
            Sign up
          </a>
        </div>
       </form>
 
    </div>
  )
}

export default Login
