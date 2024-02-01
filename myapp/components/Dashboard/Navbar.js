// import getServerUser from '@/lib/getServerUser'
// import React from 'react'

// const Navbar = async () => {
//     const user = await getServerUser()
//   return (
//     <header className='px-4 py-8'>
//         <nav className='mx-auto max-w-screen-xl'>
//             Navbar
//         </nav>
//     </header>
//   )
// }

// export default Navbar
'use client'
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";
import LogoutButton from "../Button/LogoutButton";
import ThemeToggle from "../Button/ThemeToggle";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Dashboard",
    "Post"
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">FanEventZone</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/dashboard">
            Dashboard
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/post" color="foreground">
            Post
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">

        {/* Login Information */}
        <NavbarItem>
        <ThemeToggle />
        </NavbarItem>
          <NavbarItem>
        <LogoutButton />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
