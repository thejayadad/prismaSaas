import React from 'react'
import {getServerSession} from "next-auth";
import { authOptions } from '@/lib/auth';
import Link from 'next/link';
import LoginWithGoogle from '@/components/Button/LoginWithGoogle';


const LoginPage = async () => {
    const session = await getServerSession(authOptions);
    const email = session?.user.email
    const image = session?.user.image
    console.log("image " + image)

  return (
    <div>
          {!!session && (
            <div className='flex gap-2 items-center'>
            {/* <Avatar src={image} /> */}

              {/* <Link
              className='links'
              href={'/dashboard/${email}'}>
                Hello, {session?.user?.name}
              </Link> */}
         
            <Link href={'/dashboard'}>
                DashboardPage
            </Link>
            </div>
          )}
          {!session && (
            <>
            <LoginWithGoogle />
            </>
          )}   

    </div>
  )
}

export default LoginPage