import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react'

const History = () => {
      const { userId } = auth();

      if (!userId) {
        redirect("/");
      }
  return (
    <div>History</div>
  )
}

export default History