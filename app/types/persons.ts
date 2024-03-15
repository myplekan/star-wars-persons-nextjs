import { Person } from "./person"

export type Persons = {
  count: number,
  next: string,
  previous: null,
  results: Person[]
}