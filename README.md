# Star Wars persons

## Project Description:

  This project is a web application developed using Next.js framework, which is a React-based open-source front-end development framework that enables functionality such as server-side rendering and generating static websites for React based web applications.

## Preview:

[Star Wars person Preview](https://star-wars-persons-nextjs.vercel.app/)

## Features:

1. Fetching Persons Data:

   - The application fetches data about characters from the Star Wars universe using the Star Wars API (SWAPI).
   - It displays a list of persons with their names as links, allowing users to navigate to the details of each person.

2. Person Details Page:

   - Users can click on a person's name to view details about that person.
   - The details page displays information about the selected person along with a graphical representation of their relationships using ReactFlow, a React component for building flowcharts, node-based graphs, and diagrams.

3. Fetching Starships Data:

   - Upon selecting a person, the application fetches data about the starships associated with that person from the SWAPI.
   - It displays the starships related to the selected person in the graphical representation.

4. Pagination:

   - The application implements pagination to navigate through the list of persons.
   - Users can move to the previous or next page or directly access specific pages using pagination links.

5. Header Navigation:

   - The header provides navigation links to different sections of the application, including persons, starships, and planets.

## Technologies Used:

  1. Next.js: Next.js is used as the primary framework for building the web application.
  2. ReactFlow: ReactFlow is used to create the graphical representation of relationships between persons and starships.
  3. SWAPI: The Star Wars API (SWAPI) is utilized to fetch data about characters and starships from the Star Wars universe.
  4. Axios: Axios is used for making HTTP requests to fetch data from the SWAPI.
  5. Tailwind CSS: Tailwind CSS is used for styling the components and UI elements of the application.
  6. clsx: clsx is used for dynamic class names generation and management, enabling conditional styling of components.

## Project Structure:

  1. Pages: Contains the main pages of the application, such as the list of persons and details page.
  2. Components: Includes reusable components like Pagination and Header used across different pages.
  3. Services: Contains utility functions for fetching data from the SWAPI.
  4. Types: Contains TypeScript interfaces representing the data structures used in the application.
  5. API: Houses the server-side logic for handling requests to fetch data.

## How to Run the Project:

  1. Clone the repository to your local.
  2. Install dependencies using npm install.
  3. Start the development server using npm run dev.
  4. Access the application in your web browser at the specified URL.
