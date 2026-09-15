import Insta from "../../public/icons/insta.svg";
import X from "../../public/icons/x.svg";
import LinkedIn from "../../public/icons/linkedin.svg";
import Link from "next/link";

const renderLogos = [
  {
    name: "Instagram",
    href: "#/insta",
    icon: Insta,
  },
  {
    name: "X",
    href: "#/x",
    icon: X,
  },
  {
    name: "LinkedIn",
    href: "#/linkedin",
    icon: LinkedIn,
  },
];

export function Socials() {
  return (
    <div className="flex gap-8">
      {renderLogos.map(({ name, href, icon: Icon }) => {
        return (
          <Link key={href} href={href}>
            <Icon className="size-8" />
          </Link>
        );
      })}
    </div>
  );
}
