"use client";
import React from "react";
import Image from "next/image";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface NavItemPropsType {
  label: string;
}

function NavItem({ label }: NavItemPropsType) {
  return (
    <Link href="#">
      <Typography
        as="li"
        color="white"
        className="p-1 font-medium hover:text-amber-400"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        {label}
      </Typography>
    </Link>
  );
}

function NavList() {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8 ">
      <Link href="#home">
        {" "}
        <NavItem label="Home" />
      </Link>
      <Link href="#about-us">
        <NavItem label="About Us" />{" "}
      </Link>
      <Link href="#services">
        {" "}
        <NavItem label="Services" />
      </Link>
      <Link href="#fleet">
        <NavItem label="Our Fleet" />
      </Link>
      <Link href="#contact-us">
        <NavItem label="Contact Us" />
      </Link>
    </ul>
  );
}

export function NavBar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <Navbar
      color="transparent"
      fullWidth
      className="absolute top-0 z-10 shadow-none py-0 overflow-hidden"
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <div className="container mx-auto flex items-center justify-between text-white">
        <Image src="/chicagotransLOGO.png" alt="logo" width={120} height={40} />
        <div className="hidden lg:block">
          <NavList />
        </div>

        <div className="flex items-center  md:block hidden">
          <div className="flex gap-5 justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 text-[#A57D02]"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <h2 className="">Call to book an order:</h2>
              <Link href="">
                <p className="hover:text-[#A57D02]">1-(312)-645-0505</p>
              </Link>
            </div>
          </div>
        </div>
        <IconButton
          size="sm"
          variant="text"
          color="white"
          onClick={handleOpen}
          className="ml-auto inline-block text-white lg:hidden"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {open ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="mt-2 rounded-xl bg-black/50 py-2 px-5">
          <NavList />
          <Link href="#book-now">
            <Button
              className="mb-2"
              fullWidth
              color="amber"
              variant="gradient"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Book Now
            </Button>
          </Link>
        </div>
      </Collapse>
    </Navbar>
  );
}

export default NavBar;
