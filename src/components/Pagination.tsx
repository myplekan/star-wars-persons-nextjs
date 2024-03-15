"use client";

import Link from "next/link";
import clsx from "clsx";
import { useSearchParams } from "next/navigation";

type Props = {
  count: number;
};

const Pagination = ({ count }: Props) => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || "1";
  const countArray: number[] = [];

  // Calculate the number of pages
  for (let i = 0; i < count / 10; i++) {
    countArray.push(i);
  }

  return (
    <div className="flex justify-center gap-2 font-medium">
      <Link
        className="w-28 bg-persons-opacity-80 border-2 border-cyan-900 px-2 py-1 text-center rounded hover:bg-cyan-900 hover:text-cyan-400 duration-500"
        href={`/persons?page=${+page > 1 ? +page - 1 : 1}`}
      >
        Previous
      </Link>

      {countArray.map((num, i) => (
        <Link
          href={`/persons?page=${i + 1}`}
          className={clsx(
            "w-10 border-2 border-cyan-900 px-2 py-1 text-center rounded hover:bg-cyan-900 hover:text-cyan-400 duration-500",
            {
              "bg-persons-opacity-100 text-cyan-400":
                page === (i + 1).toString(),
              "bg-persons-opacity-80": page !== (i + 1).toString(),
            }
          )}
          key={i}
        >
          {num + 1}
        </Link>
      ))}

      <Link
        className="w-28 bg-persons-opacity-80 border-2 border-cyan-900 px-2 py-1 text-center rounded hover:bg-cyan-900 hover:text-cyan-400 duration-500"
        href={`/persons?page=${+page < 8 ? +page + 1 : 9}`}
      >
        Next
      </Link>
    </div>
  );
};

export default Pagination;
