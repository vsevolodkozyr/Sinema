import Link from "next/link";

export function Rights() {
  return (
    <div className="typo-label-l text-neutral-200 flex gap-2 justify-between flex-wrap">
      <p>
        Copyright © 2016 - 2025 Ticketor. <br /> All right reserved.
      </p>
      <div className="flex gap-2">
        <Link href={"#"}>Privacy Policy</Link>
        <Link href={"#"}>Terms of service </Link>
      </div>
    </div>
  );
}
