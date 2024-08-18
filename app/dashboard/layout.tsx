import React from 'react'
import SideBar from './_components/sidebar'
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

const DashBoardLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
     const { userId } = auth();

     if (!userId) {
       redirect("/");
     }
  return (
     <div className="h-screen bg-gray-50">
        <div className="hidden  md:w-64 md:block fixed">
           <SideBar/>
        </div>
        <div className="h-fit pb-5 bg-gray-50 md:ml-64">{children}</div>
    </div>
  )
}

export default DashBoardLayout