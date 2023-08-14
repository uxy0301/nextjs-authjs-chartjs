import { getServerSession } from "next-auth/next";
import { options } from "@/app/options";
import { LoginButton, LogoutButton } from "@/components/buttons";

export default async function Home() {
  const session = await getServerSession(options);
  const user = session?.user; // ログインしていなければnullになる。
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
    >
      <div>
        <div>{`${JSON.stringify(user)}`}</div>
        {user ? <div>Logged in</div> : <div>Not logged in</div>}
        {user ? <LogoutButton /> : <LoginButton />}
      </div>
    </main>
  );
}
