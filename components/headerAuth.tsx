"use client";
import {
  NavbarItem,
  Button,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";
import React from "react";
import * as actions from "@/app/actions";

export default function HeaderAuth() {
  const session = useSession();
  let authContent: React.ReactNode;
  if (session.status === "loading") {
    return null;
  } else if (session?.data?.user) {
    authContent = (
      <Popover placement="bottom">
        <PopoverTrigger>
          <Avatar src={session.data.user.image || ""} />
        </PopoverTrigger>
        <PopoverContent>
          <form action={actions.signOut}>
            <button type="submit">Sign out</button>
          </form>
        </PopoverContent>
      </Popover>
    );
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
  return authContent;
}
