import React from 'react'

const Form = () => {
  return (
    <div className=' h-[100vh] flex flex-col justify-center items-center gap-4'>
      <h1 className='text-4xl font-bold'>Login Form</h1>
      <form className='p-4 gap-6 flex flex-col w-[24rem] rounded-lg shadow-2xl'>
        <input className='outline-none p-2 font-bold w-full border-2 border-b-black' type="email"  placeholder='Email:'/>
        <input className='outline-none p-2 font-bold w-full border-2 border-b-black' type="password" placeholder='Password:' />
        <p className='cursor-pointer underline text-blue-700'>ForgetPassword?</p>
        <button type='submit' className='p-2 px-4 bg-slate-800 rounded-md text-white hover:bg-slate-500 '>Login</button>
      </form>
      </div>
    

  )
}

export default Form


