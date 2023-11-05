import Link from "next/link";
import MainLayout from "@/components/layouts/MainLayout";
import DarkLayout from "@/components/layouts/DarkLayout";

export default function About() {
  return (
    <MainLayout>
      <DarkLayout>
        <h1>About Page</h1>
        <div className={"description"}>
          <p>
            Get started by editing&nbsp;
            <code className={"code"}>pages/index.tsx</code>
          </p>
        </div>

        <h1>
          Ir a <Link href={"/"}>Home</Link>
        </h1>
      </DarkLayout>
    </MainLayout>
  );
}
