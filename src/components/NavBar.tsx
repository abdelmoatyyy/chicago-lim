"use client";
import React from "react";
import Image from "next/image";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemPropsType {
  label: string;
  href: string;
  onNavigate?: () => void;
}

function NavItem({ label, href, onNavigate }: NavItemPropsType) {
  return (
    <li>
      <Link
        href={href}
        className="block py-2 lg:inline lg:py-0"
        onClick={() => onNavigate?.()}
      >
        <Typography
          as="span"
          color="white"
          className="font-medium text-white hover:text-amber-500"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {label}
        </Typography>
      </Link>
    </li>
  );
}

function NavList({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <ul className="mb-4 mt-2 flex list-none flex-col gap-1 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8 lg:gap-y-0">
      <NavItem label="Home" href="/#home" onNavigate={onNavigate} />
      <NavItem label="About Us" href="/about-us" onNavigate={onNavigate} />
      <NavItem label="Services" href="/#services" onNavigate={onNavigate} />
      <NavItem label="Our Fleet" href="/#fleet" onNavigate={onNavigate} />
      <NavItem label="Contact Us" href="/#contact-us" onNavigate={onNavigate} />
      <NavItem label="Privacy Policy" href="/terms" onNavigate={onNavigate} />
      <NavItem label="Events Terms" href="/events-terms" onNavigate={onNavigate} />
    </ul>
  );
}

const LG_BREAKPOINT_PX = 1024;
const MOBILE_NAV_ID = "mobile-primary-nav";

export function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const closeMenu = React.useCallback(() => setOpen(false), []);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= LG_BREAKPOINT_PX) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  React.useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-[100] isolate w-full pt-[env(safe-area-inset-top,0px)]">
      <div
        className="pointer-events-none absolute inset-0 bg-black/30 backdrop-blur-md"
        aria-hidden
      />
      <Navbar
        color="transparent"
        fullWidth
        className="relative z-10 overflow-visible border-0 bg-transparent py-2 shadow-none lg:py-0"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <div className="container mx-auto flex items-center justify-between gap-3 text-white">
          <Link href="/" onClick={() => open && closeMenu()}>
            <Image
              src="/chicagotransLOGO.png"
              alt="logo"
              width={120}
              height={40}
            />
          </Link>
          <div className="hidden lg:block">
            <NavList />
          </div>

          <div className="hidden md:flex md:items-center">
            <div className="flex items-center justify-center gap-5">
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
                <Link href="tel:+13126450505">
                  <p className="hover:text-[#A57D02]">1-(312)-645-0505</p>
                </Link>
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={handleOpen}
            aria-expanded={open}
            aria-controls={MOBILE_NAV_ID}
            aria-label={open ? "Close menu" : "Open menu"}
            className="ml-auto inline-flex h-12 min-h-[48px] w-12 min-w-[48px] shrink-0 touch-manipulation items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 active:bg-white/15 lg:hidden"
          >
            {open ? (
              <XMarkIcon className="h-7 w-7 shrink-0" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-7 w-7 shrink-0" strokeWidth={2} />
            )}
          </button>
        </div>
        <Collapse open={open}>
          <div
            id={MOBILE_NAV_ID}
            className="relative z-[110] mt-2 flex max-h-[min(70vh,calc(100dvh-8rem))] flex-col items-center overflow-y-auto rounded-xl border border-white/10 bg-black/85 px-5 py-3 text-center shadow-lg backdrop-blur-md supports-[backdrop-filter]:bg-black/75"
          >
            <NavList onNavigate={closeMenu} />
            <div className="mb-3 flex w-full max-w-xs flex-col gap-1 border-t border-white/10 pt-3 text-sm text-white/90 lg:hidden">
              <p className="text-white/70">Call to book</p>
              <Link
                href="tel:+13126450505"
                className="text-lg font-semibold text-[#A57D02] hover:text-amber-400"
                onClick={closeMenu}
              >
                1-(312)-645-0505
              </Link>
            </div>
            <Link
              href="https://book.mylimobiz.com/v4/(S(xbwpckbavhrcpfqd2ki2bnrt))/chicagotrans"
              className="w-full max-w-xs"
              onClick={closeMenu}
            >
              <Button
                className="mb-2"
                fullWidth
                color="amber"
                variant="gradient"
                onClick={closeMenu}
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
    </header>
  );
}

export default NavBar;
