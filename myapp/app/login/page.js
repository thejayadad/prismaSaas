
  import React from 'react'
  import {getServerSession} from "next-auth";
  import { authOptions } from '@/lib/auth';
  import Link from 'next/link';
  import LoginWithGoogle from '@/components/Button/LoginWithGoogle';
  import {FiArrowDown} from "react-icons/fi"


  const LoginPage = async () => {
      const session = await getServerSession(authOptions);
      const email = session?.user.email
      const image = session?.user.image
      console.log("image " + image)

    return (
      <div className='min-h-screen flex flex-col justify-center items-center'>
      {!!session && (
        <div className='flex flex-col gap-2 items-center'>
          <h1 className='title-font sm:text-4xl text-3xl mb-2 font-medium text-gray-900'>
            Welcome To The Fan Vent Zone
          </h1>
          <p className='leading-relaxed'>
            Glad You're Back, <span>{email}</span>
          </p>
          <p className={`pulse flex flex-col sm:text-3xl items-center`}>
            To Your Dashboard
            <br />
            <FiArrowDown />
          </p>
          <Link 
          className='bg-success sm:px-6  md:px-12 py-4 text-white rounded-xl'
          href={'/dashboard'}>DashboardPage</Link>
        </div>
      )}
      {!session && <LoginWithGoogle />}
    </div>
    )
  }

  export default LoginPage