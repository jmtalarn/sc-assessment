# SC Code Assessment

- [React](https://reactjs.org/) application using [Vite](https://vitejs.dev/) as frontend tooling.
- Using [Typescript](https://www.typescriptlang.org/)
- Configured [eslint](https://eslint.org/) and [prettier](https://prettier.io/) plugin
- [Styled components](https://styled-components.com/) to style the visual components.
- use of [useReducer](https://es.reactjs.org/docs/hooks-reference.html#usereducer) hook to manage state and handle the actions in order to modify the state of the application.
- Unit testing using [vitest](https://vitest.dev/) together with React testing library
- Showcase of the components with [Storybook](https://storybook.js.org/)
- Backend generated from a static json file with [JSON-server](https://github.com/typicode/json-server)

## Commands

First of all

- `npm install` will install all required dependencies.

After this

- `npm run dev` Run the frontend application (usually http://127.0.0.1:5173/)
- `npm run test` Run the unit tests
- `npm run storybook` Spins a server with the components Storybook showcase (usually http://localhost:6006)
- `npm run backend` Spins the backend server with Json-server package (usually on http://localhost:3000). During the life of the session the changes and updates will persist. Once it is restarted it creates new clean database from the static json file `data/games-data.json`.
- `npm run all-together` Using the `concurrently` package will run both, backend and frontend together. Both for the price of one.
