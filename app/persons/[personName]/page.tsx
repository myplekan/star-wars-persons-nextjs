"use client";

import { useEffect, useState } from "react";
import Flow from "../../components/Flow";
import { ReactFlowProvider } from "reactflow";
import { Person } from "@/app/types/person";
import { Starship } from "@/app/types/starship";
import { fetchPerson, fetchStarShips } from "@/app/services/fetch";

const PersonInfo = ({ params }: Params) => {
  const [person, setPerson] = useState<Person | null>(null);
  const [starships, setStarships] = useState<Starship[]>([]);

  // Effect to fetch person data when params.personName changes
  useEffect(() => {
    fetchPerson(setPerson, params.personName);
  }, [params.personName]);

  // Effect to fetch starships data when person changes
  useEffect(() => {
    if (person) {
      fetchStarShips(setStarships, person);
    }
  }, [person]);

  return (
    <>
      {person && starships && (
        <div style={{ height: "90vh" }}>
          <ReactFlowProvider>
            <Flow person={person} starships={starships} />
          </ReactFlowProvider>
        </div>
      )}
    </>
  );
};

export default PersonInfo;
