import React from "react";
import Link from "next/link";
import { LoginButton, LogoutButton } from "@/components/buttons";

// export const Navbar = () => {
export function Navbar() {
  return (
    <header className="bg-gray-700 p-4 text-white">
      <ul className="flex space-x-4">
        <LoginButton />
      </ul>
    </header>
  );
}
