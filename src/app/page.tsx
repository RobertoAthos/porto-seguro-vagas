import Link from "next/link";

export default function Home() {
  return (
    <section>
      <Link href={'/login'}>Login</Link>
    </section>
  );
}
