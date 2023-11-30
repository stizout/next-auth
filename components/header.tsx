import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  Button,
  Avatar,
  dataFocusVisibleClasses,
} from "@nextui-org/react";
import Link from "next/link";
import { auth } from "@/auth";
import paths from "@/paths";
import React from "react";
import * as actions from "@/app/actions";
export default async function Header() {
  const session = await auth();

  let authContent: React.ReactNode;
  if (session?.user) {
    authContent = <Avatar src={session.user.image || ""} />;
  } else {
    authContent = (
      <>
        <NavbarItem>
          <form action={actions.signIn}>
            <Button type="submit" color="secondary" variant="flat">
              Sign In
            </Button>
          </form>
        </NavbarItem>
        <form action={actions.signOut}>
          <Button type="submit" color="primary" variant="flat">
            Sign In
          </Button>
        </form>
        <NavbarItem></NavbarItem>
      </>
    );
  }

  return (
    <Navbar className="shadow mb-6">
      <NavbarBrand>
        <Link href={paths.home()}>Discuss</Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Input />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">{authContent}</NavbarContent>
    </Navbar>
  );
}
