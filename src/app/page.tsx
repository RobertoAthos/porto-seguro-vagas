import Link from "next/link";

export default function Home() {
  return (
    <section>
      <h2>Nome: </h2>
      <Link href={'/login'}>Login</Link>
    </section>
  );
}
