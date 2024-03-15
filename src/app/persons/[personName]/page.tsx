import FlowProvider from "@/src/components/FlowProvider";
import { getPerson, getStarShips } from "@/src/services/services";

const PersonInfo = async ({ params }: Params) => {
  // Fetching information about the person
  const person = await getPerson(params.personName);

  // Fetching the list of starships associated with this person
  const { results: starships } = await getStarShips(person.starships);

  return (
    <>
      {person && starships && (
        <FlowProvider person={person} starships={starships} />
      )}
    </>
  );
};

export default PersonInfo;
