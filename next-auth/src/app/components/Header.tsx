"use client";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";
export default function Header({
  heading,
  navItems = [],
}: {
  heading: string
  navItems: { label: string; href: string, exact: boolean }[];
}) {
  const pathname = usePathname();
  return (
    <header className=" py-4 bg-gray-900 text-gray-500 text-xl">
      <div className="container mx-auto flex justify-between">
        <span>{heading} - <span className="text-gray-300">{pathname}</span></span>
        <nav className="flex justify-end gap-4">
          {navItems.map(({ label, href, exact }) => (
            <NavLink className="hover:text-gray-300"  key={href} exact={exact} href={href} pathname={pathname}>
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
