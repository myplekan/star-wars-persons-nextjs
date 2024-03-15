"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <>
      <Link href="/" className="absolute left-2">
        <Image src="/star-wars-logo.png" alt="Logo" width={100} height={56} />
      </Link>
      <ul className="flex bg-slate-500 justify-center gap-6">
        <li>
          <Link
            className={clsx("flex py-4 hover:text-cyan-400 duration-500", {
              "text-cyan-400": pathname.includes("persons"),
            })}
            href="/persons?page=1"
          >
            Persons
          </Link>
        </li>
        <li>
          <Link
            className={clsx("flex py-4 hover:text-cyan-400 duration-500", {
              "text-cyan-400": pathname.includes("starships"),
            })}
            href="/starships"
          >
            Starships
          </Link>
        </li>
        <li>
          <Link
            className={clsx("flex py-4 hover:text-cyan-400 duration-500", {
              "text-cyan-400": pathname.includes("planets"),
            })}
            href="/planets"
          >
            Planets
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Header;
