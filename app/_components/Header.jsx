import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className=" p-2 px-6 md:px-16 shadow-md">
      <div className="flex items-center justify-between gap-8 ">
        {/* website logo */}
        <Link href='/' className='flex gap-1 items-center justify-center '> 
          <img src="/assets/logo/smart-home-logo.jpg" alt="" width={70} height={70} />
          <p className="text-lg sm:text-2xl font-bold">Service Nest</p>
        </Link>

        <div className="md:flex items-center gap-6 hidden">
          <Link href='/'
            className="hover:scale-105 hover:text-primary
                cursor-pointer"
          >
            Home
          </Link>
          <Link href='/services'
            className="hover:scale-105 hover:text-primary
                cursor-pointer"
          >
            Services
          </Link>
          <Link href='/about'
            className="hover:scale-105 hover:text-primary
                cursor-pointer"
          >
            About Us
          </Link>
        </div>
        <div>
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
