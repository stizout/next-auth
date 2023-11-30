"use server";
import * as auth from "@/auth";

export const signIn = async () => {
  console.log("Signing In");
  return auth.signIn("github");
};
export const signOut = async () => {
  console.log("Signing Out son");
  return auth.signOut();
};
