import React from 'react'
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function Auth() {
  return (
    <div>
      <SignedOut>
        <SignInButton>
          <p className='bg-black px-5 font-mono  font-semibold
           py-2 rounded-lg text-white cursor-pointer'>Sign In</p>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton></UserButton>
      </SignedIn>
    </div>
  );
}
