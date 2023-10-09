"use client";
import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'
import DarkModeToggle from '../DarkMode/DarkModeToggle';
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { SessionProvider } from "next-auth/react";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  const session = useSession();
  console.log(session);

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>Zimu</Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map( (link) =>(
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        <SessionProvider>
        {session.status === "authenticated" &&
        <button className={styles.logout} onClick={signOut}>
          Logout
        </button>
        }
        </SessionProvider>
      </div>
    </div>
  )
}

export default Navbar
