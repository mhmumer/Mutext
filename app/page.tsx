import Image from "next/image";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Auth from "@/components/auth";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Mutext from "@/public/mutext.png"
import { SignUpButton } from "@clerk/nextjs";

export default function Home() {
  const { userId } = auth()
  
  if (userId) {
    redirect("/dashboard");
  }
  return (
    <>
      <div className="flex flex-col min-h-[100dvh] bg-background">
        <header className="px-4 lg:px-6 h-20 flex items-center justify-between border-b">
          <Link href="#" className="flex " prefetch={false}>
            <div className="items-center flex flex-col -mt-4 ">
              <Image src={Mutext} alt={""} className=" h-20 w-20 " />{" "}
              <h2 className="-mt-5 font-mono  font-bold text-lg tracking-widest">
                Mutext.
              </h2>
            </div>
            <span className="sr-only">Mutext</span>
          </Link>
          <div className="flex ">
            <Auth />
          </div>
        </header>
        <main className="flex-1 flex items-center justify-center">
          <section className="container px-4 md:px-6 py-12 md:py-24 lg:py-32 text-center">
            <div className="max-w-xl mx-auto space-y-4">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
                AI Content Generator
              </h1>
              <p className="text-muted-foreground md:text-xl">
                Our innovative product is designed to streamline your daily
                tasks and help you focus on what matters most.
              </p>
              <SignUpButton>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center bg-black px-8 text-sm font-medium text-white  rounded-[0.6rem]
                "
                prefetch={false}
              >
                  Get Started

              </Link>
                </SignUpButton>
            </div>
          </section>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-muted-foreground">
            &copy; 2024 Mutecx. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link
              href="#"
              className="text-xs hover:underline underline-offset-4"
              prefetch={false}
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-xs hover:underline underline-offset-4"
              prefetch={false}
            >
              Privacy
            </Link>
          </nav>
        </footer>
      </div>
    </>
  );
}
