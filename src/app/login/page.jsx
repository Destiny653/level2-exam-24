'use client'
import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { signIn, signOut, useSession } from 'next-auth/react'
import './login.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Login() {


  const { data: session } = useSession()
  console.log(session)


  const setValidate = () => {
    return (
        <div className='flex items-center'>
          {" "}
          <div className='profileImage'>
            <Image src={session?.user.image} alt='user image' className='image' fill={true} />
          </div>
          <h1>Signed in as {session?.user.email}</h1> <br /> {" "}
        </div>

    )
  }


  return (

    <>
      <div className='flex w-full form-p'>
        <div className='aside flex  justify-between flex-col box-border pt-5' >
          <div className='flex flex-col box-border px-3 gap-2'>
            <h1>Webflow</h1>
            <h2 className='text-2xl '>Scalable website for every client</h2>
            <p className='text-xs '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero molestias necessitatibus suscipit ab et nostrum optio ducimus dolorem consectetur error veniam quidem.</p>
            <button className='flex bg-slate-950 w-fit  text-white py-2 px-6' >Start Building</button>
          </div>
          <div className='bottom-con box-border h-56  overflow-hidden relative'>
            <div className='absolute bottom-6 px-4 py-1 bg-black text-white z-10'>
              <h1>Alessia Sannazzaro</h1>
              <h1 className='text-xs '>hello there!</h1>
            </div>
          </div>
        </div>
        {
          !session ?
            <div className='flex flex-col justify-center gap-4 items-center'>
              <div className='form-container flex flex-col justify-center gap-4'>
                <h1 className='text-2xl font-semibold mb-4 '>Sign in to Dribbble</h1>
                <button className='flex justify-center bg-slate-950 text-white py-2 px-8 rounded-3xl w-full ' onClick={() => signIn("google")}>Sign in with <FcGoogle size={30} /> </button>
                <form className='flex flex-col gap-4'>
                  <label className='flex flex-col' htmlFor="name">
                    <span>Username or Email</span>
                    <input className='border py-2' type="text" name='text' />
                  </label>
                  <label className='flex flex-col' htmlFor="password">
                    <span>Password</span>
                    <input className='border py-2' type="text" name='text' />
                  </label>
                  <button className='bg-slate-950 text-white py-2 px-8 rounded-3xl flex justify-center' onClick={() => signIn("google")}>Sign in</button>
                  <div>dont have an account?<Link className=' border-b border-slate-950 text-sm' href='/register'>Sing up</Link></div>
                </form>
              </div>
            </div>
            :
            setValidate()
        }
      </div>

    </>
  )
}
