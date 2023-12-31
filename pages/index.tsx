import MainLayout from "@/components/layouts/MainLayout";
import Link from "next/link";

export default function Home() {
  return (
    <MainLayout>
      <h1>Home Page</h1>
      <div className={"description"}>
        <p>
          Get started by editing&nbsp;
          <code className={"code"}>pages/index.tsx</code>
        </p>
      </div>

      <h1>
        Ir a <Link href="/About">About</Link>
      </h1>
    </MainLayout>
  );
}
