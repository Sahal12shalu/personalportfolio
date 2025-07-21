"use client";
import Link from "next/link";
import './Navbar.css'
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "../../../components/ui/resizablenav";
import { useState } from "react";

export function NavbarDemo() {

  const Gamebutton = () =>{
    window.location.href = '/Games'
  }

  const navItems = [
    {
      name: "Home",
      link: "#Home",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Projects",
      link: "#Projects",
    },
    {
      name: "Travels",
      link: "#travels",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed z-99 w-full mt-4 ">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody >
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="z-98">
           <button className="button" onClick={Gamebutton}>
  Play Game
  <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
      clipRule="evenodd"
    ></path>
  </svg>
</button> 
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav  >
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle 
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
          </MobileNavHeader>

          <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300">
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <Link href='/Games'><button
                className="w-full h-[40px] rounded-md shadow-[0px_1px_26px_0px_rgba(0,_0,_0,_0.1)] font-semibold">
                play game
              </button>
              </Link>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      {/* Navbar */}
    </div>
  );
}


