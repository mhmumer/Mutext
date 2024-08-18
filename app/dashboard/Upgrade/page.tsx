import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react'

const Upgrade = () => {
      const { userId } = auth();

      if (!userId) {
        redirect("/");
      }
  return (
    <div>Upgrade</div>
  )
}

export default Upgrade