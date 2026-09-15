import Link from "next/link";

const nav = [
  {
    name: "Find a movie",
    items: [
      { name: "In Theaters", href: "#/theaters" },
      { name: "Top Movies", href: "#/movies" },
      { name: "Coming Soon", href: "#/soon" },
    ],
  },
  {
    name: "Company",
    items: [
      { name: "About us", href: "#/us" },
      { name: "Partnership", href: "#/partner" },
      { name: "Get the App", href: "#/app" },
    ],
  },
  {
    name: "Help",
    items: [
      { name: "Contact Us", href: "#/contact" },
      { name: "Subscription", href: "#/sub" },
      { name: "FAQs", href: "#/faq" },
    ],
  },
];

export function FooterNav() {
  return (
    <div className="flex gap-[22px] justify-between flex-wrap ">
      {nav.map(({ name, items }) => {
        return (
          <div key={name} className="flex flex-col gap-[24px]">
            <p className="font-manrope font-500 text-[16px] text-neutral-50">
              {name}
            </p>
            <ul className="flex flex-col gap-4">
              {items.map(({ name, href }) => {
                return (
                  <Link
                    key={href}
                    href={href}
                    className="typo-button-s text-neutral-200"
                  >
                    {name}
                  </Link>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
