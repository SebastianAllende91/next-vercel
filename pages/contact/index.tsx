import Link from "next/link";
import MainLayout from "@/components/layouts/MainLayout";

export default function Contact() {
  return (
    <MainLayout>
      <h1>Contact Page</h1>
      <div className={"description"}>
        <p>
          Get started by editing&nbsp;
          <code className={"code"}>pages/index.tsx</code>
        </p>
      </div>

      <h1>
        Ir a <Link href={"/"}>Home</Link>
      </h1>
    </MainLayout>
  );
}
