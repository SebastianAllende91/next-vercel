import { CSSProperties } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface ActiveLinkProps {
  text: string;
  href: string;
}

const style: CSSProperties = {
  color: "#0070f3",
  textDecoration: "underline",
};

const ActiveLink = ({ text, href }: ActiveLinkProps) => {
  const { asPath } = useRouter();

  return (
    <Link href={href} legacyBehavior>
      <a style={asPath === href ? style : undefined}>{text}</a>
    </Link>
  );
};

export default ActiveLink;
