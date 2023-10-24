// REFERENCE: https://www.danstroot.com/snippets/nextjs-navlink-component

"use client";
import Link from "next/link";

export default function NavLink({
  href,
  exact,
  children,
  className,
  pathname,
}: {
  href: string;
  exact?: boolean;
  children: any;
  className?: string;
  pathname: string;
}) {
  const active = "font-bold text-pink-300";
  const isActive = exact ? pathname === href : pathname.startsWith(href);
  return (
    <Link href={href} className={isActive ? active : className}>
      {children}
    </Link>
  );
}
