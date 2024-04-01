import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className=" p-2 px-6 md:px-16 shadow-md">
      <div className="flex items-center justify-between gap-8 ">
        {/* website logo */}
        <Link href='/'>
          <img src="/assets/logo/smart-home-logo.jpg" alt="" width={70} height={70} />
        </Link>

        <div className="md:flex items-center gap-6 hidden">
          <h2
            className="hover:scale-105 hover:text-primary
                cursor-pointer"
          >
            Home
          </h2>
          <h2
            className="hover:scale-105 hover:text-primary
                cursor-pointer"
          >
            Services
          </h2>
          <h2
            className="hover:scale-105 hover:text-primary
                cursor-pointer"
          >
            About Us
          </h2>
        </div>
        <div>
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
