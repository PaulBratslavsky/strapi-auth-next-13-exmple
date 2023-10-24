"use client";
import Logout from "./Logout";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";
import { useAppContext } from "../context/AppContext";

export default function LoginLinks() {
  const { user } = useAppContext();
  const ProfileLinks = ({ user }: { user: string }) => {
    return (
      <div className="flex gap-4">
        <NavLink
          className="hover:text-gray-300"
          href="/profile"
          exact={true}
          pathname={usePathname()}
        >
          {user}
        </NavLink>
        <Logout />
      </div>
    );
  };

  const LoginLinks = () => {
    return (
      <div className="flex gap-4">
        <NavLink
          className="hover:text-gray-300"
          href="/login"
          exact={true}
          pathname={usePathname()}
        >
          Login
        </NavLink>
        <NavLink
          className="hover:text-gray-300"
          href="/register"
          exact={true}
          pathname={usePathname()}
        >
          Register
        </NavLink>
      </div>
    );
  };
  const hasUser = user && user.username;
  return hasUser ? <ProfileLinks user={user.username} /> : <LoginLinks />;
}
