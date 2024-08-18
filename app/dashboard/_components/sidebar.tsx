"use client";

import React from "react";
import Image from "next/image";
import Mutext from "@/public/mutext.png";
import { CreditCard, History, WandSparkles } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const menuList = [
  {
    name: "Magic Tools",
    icon: WandSparkles,
    path: "/dashboard",
  },
  {
    name: "Output Histoy",
    icon: History,
    path: "/dashboard/history",
  },
  {
    name: "Upgrade",
    icon: CreditCard,
    path: "/dashboard/Upgrade",
  },
];

export default function SideBar() {
  const path = usePathname();
  return (
    <div className="p-5 bg-white  flex flex-col h-screen">
      <div className="items-center flex flex-col -mt-4">
        <Image src={Mutext} alt={""} className=" h-20 w-20 " />{" "}
        <h2 className="-mt-5 font-mono  font-bold text-lg tracking-widest">
          Mutext
        </h2>
      </div>
      <div className="mt-10 h-max flex flex-col justify-between">
        {menuList.map((menu) => (
          <Link
            href={menu.path}
            key={menu.name}
            className={cn(
               "flex gap-4 items-center p-3 mb-2 hover:bg-black rounded-lg hover:text-white cursor-pointer",
               path === menu.path && 'bg-black text-white'
            )}
          >
            <menu.icon className="h-6 w-6 " />
            <h2 className="text-lg ">{menu.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
