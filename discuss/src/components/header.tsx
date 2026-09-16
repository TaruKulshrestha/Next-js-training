import Link from "next/link";
import { Suspense } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
} from "@nextui-org/react";
import HeaderAuth from "@/components/header-auth";
import SearchInput from "@/components/search-input";
import paths from "@/paths";

export default function Header() {
  return (
    <Navbar className="shadow mb-6">
      <NavbarBrand>
        <Link href={paths.home()} className="font-bold">
          Discuss
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Suspense fallback={<Input isDisabled placeholder="Search..." />}>
            <SearchInput />
          </Suspense>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  );
}
