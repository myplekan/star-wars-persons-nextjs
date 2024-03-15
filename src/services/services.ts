import axios from "axios";
import {
  Edge,
  Node,
} from "reactflow";
import { Person } from "../types/person";
import { Starship } from "../types/starship";

//Extracts ID from the provided URL.
export const getId = (url: string) => {
  return url.split("/").reverse()[1];
};

//Fetches person data from the Star Wars API based on the provided ID.
export async function getPerson(id: string) {
  try {
    const response = await axios.get(
      `https://sw-api.starnavi.io/people/${id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

//Fetches starship data from the Star Wars API based on the provided array of starship IDs
export async function getStarShips(ids: number[]) {
  try {
    const response = await axios.get(
      `https://sw-api.starnavi.io/starships/?id__in=${ids.join()}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

// Builds nodes and edges for rendering in a flowchart visualization based on the provided person and starships.
export const buildNodesAndEdges = (person: Person, starships: Starship[]): { nodes: Node<{ label: string }, string | undefined>[]; edges: Edge<any>[] } => {
  const name = person.name;
  let offsetFilms = person.films.length * 175;
  let offsetShip = person.films.length * 175;
  let edge: Edge<any>[] = [];
  let node: Node<{ label: string }, string | undefined>[] = [];

  // Add node for the person
  node.push({
    id: (node.length + 1).toString(),
    data: { label: name },
    position: { x: 0, y: 0 },
  });

  // Add nodes and edges for each film associated with the person
  person.films.forEach((film) => {
    const newId = (node.length + 1).toString();

    edge.push({
      id: `e1${newId}`,
      source: "1",
      target: newId,
      animated: true,
    });

    node.push({
      id: newId,
      data: { label: `${film}` },
      position: { x: offsetFilms / 2 - 87.5, y: 100 },
    });

    offsetFilms -= 350;
  });

  // Add nodes and edges for each starship associated with the person
  starships.forEach((ship) => {
    const newId = (node.length + 1).toString();

    ship.films.forEach((item, i) => {
      node.forEach((elem) => {
        if (elem.data.label === `${item}`) {
          edge.push({
            id: `e${elem.id}${newId}${i}`,
            source: `${elem.id}`,
            target: newId,
            animated: true,
          });
        }
      });
    });

    node.push({
      id: newId,
      data: { label: ship.name },
      position: { x: offsetShip / 2 - 87.5, y: 200 },
    });

    offsetShip -= 350;
  });

  return { nodes: node, edges: edge };
};