import { Button } from "@nextui-org/react";
import * as actions from "@/app/actions";
import { auth } from "@/auth";
export default async function Home() {
  const session = await auth();
  return (
    <div>
      <form action={actions.signIn}>
        <Button type="submit">Sign In</Button>
      </form>
      {session?.user ? <div>Signed in</div> : <div>Signed out</div>}
    </div>
  );
}
