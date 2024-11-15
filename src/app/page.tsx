import LogoutButton from "@/components/ui/LogoutButton";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error) {
    redirect("/login");
  }
  return (
    <section>
      <h2>Nome: {data.user.email}</h2>
      {!data.user.email ? <Link href={"/login"}>Login</Link> : <LogoutButton />}
    </section>
  );
}
