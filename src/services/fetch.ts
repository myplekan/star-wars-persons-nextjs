import { Dispatch, SetStateAction } from "react";
import { Person } from "../types/person";
import { Starship } from "../types/starship";
import { getPerson, getStarShips } from "./services";

// Function to fetch data for a specific person
export default async function getPersonPerPage(value: string) {
  const res = await fetch(`https://sw-api.starnavi.io/${value}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await res.json();

  return data;
}

// Function to fetch a person's details and update the state accordingly
export const fetchPerson = async (set: Dispatch<SetStateAction<Person | null>>, name: string) => {
  try {
    const result = await getPerson(name);
    set(result);
  } catch (error) {
    console.error("Error fetching person:", error);
  }
};

// Function to fetch starships associated with a person and update the state accordingly
export const fetchStarShips = async (set: Dispatch<SetStateAction<Starship[]>>, person: Person) => {
  try {
    const res = await getStarShips(person.starships);
    set(res.results);
  } catch (error) {
    console.error("Error fetching starships:", error);
  }
};