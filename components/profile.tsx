"use client";
import { useSession } from "next-auth/react";

export default function Profile() {
  const session = useSession();
  if (session?.data?.user) return <div>User is signed in</div>;
  return <div>profile</div>;
}
