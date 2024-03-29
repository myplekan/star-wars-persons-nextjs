import Link from "next/link";
import { Person } from "../../types/person";
import Pagination from "../../components/Pagination";
import { getId } from "../../services/services";
import getPersonPerPage from "../../services/fetch";
import type { Persons } from "../../types/persons";

const Persons = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;

  // Fetch persons data for the specified page from the API
  let result: Persons = await getPersonPerPage(`people?page=${page}`);

  const persons: Person[] = result.results;

  return (
    <div className="flex flex-col justify-between p-5 bg-persons h-main bg-center bg-cover bg-no-repeat text-white">
      <div className="flex flex-col items-center mb-10 bg-persons-opacity-80 w-80 rounded-3xl mx-auto">
        {persons.map((person) => (
          <Link
            className="hover:text-cyan-400 duration-500 px-2 py-1 "
            href={`/persons/${getId(person.url)}`}
            key={person.created}
          >
            {person.name}
          </Link>
        ))}
      </div>
      <Pagination count={result.count} />
    </div>
  );
};

export default Persons;
