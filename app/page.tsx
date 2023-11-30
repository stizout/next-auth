"use server";
import { auth } from "@/auth";
import Profile from "@/components/profile";
export default async function Home() {
  const session = await auth();
  return <div>Home Page</div>;
}
