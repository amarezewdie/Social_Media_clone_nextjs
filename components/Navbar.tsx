import Link from "next/link";
import React from "react";
import ToggleMode from "./ToggleMode";
import { HomeIcon, Bell, UserIcon } from "lucide-react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { currentUser } from "@clerk/nextjs/server";
import DesktopNavbar from "./DeskTopNavbar";
import MobileNavbar from "./MobileNavbar";
import { syncUser } from "@/actions/user";

const Navbar = async () => {
  const user = await currentUser();
  if (user) await syncUser(); //
  return (
    <div className=" sticky top-0 w-full flex  justify-between  border-b p-3 items-center  px-4">
      <div>
        <h1 className="text-2xl capitalize font-semibold">social media</h1>
      </div>

      <div>
        <DesktopNavbar />
        <MobileNavbar />
      </div>
    </div>
  );
};

export default Navbar;
