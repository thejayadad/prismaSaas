'use client';
import {signOut} from "next-auth/react";
import {FiLogOut} from "react-icons/fi"

export default async function LogoutButton() {
  return (
    <div className="flex items-center gap-2">

    <button
      className='links'
      onClick={() => signOut()}>
      <span><FiLogOut /></span>

    </button>
    </div>
  );
}