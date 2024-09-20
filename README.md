# T36-Project-1: Pokecards :rocket:
This project is powered by React and Vite, and integrates the Pokémon TCG API for data fetching. You can find the documentation for the API here: https://docs.pokemontcg.io/

The project can be viewed here: http://it2810-36.idi.ntnu.no/project1/


## Project - Build and run tests :gear: :wrench:
### Build and run the project

Open the project:
1. Open a new terminal
2. Navigate to prosjekt1 folder: `cd prosjekt1`
3. Install the necessary packages: `npm install`
4. Run the project: `npm run dev`


### Tests 🧪
We use Vitest for testing. To test the project run `npm run test` in the terminal

### Formatting
We use Prettier for formatting. Use `npm run format` to run formatting


 ### Eslint
 To use Eslint use `npm run lint`


## Documentation
### Design
We opted for a design that highlights the Pokemon cards, ensuring they are the central focus of the user experience. We opted for a solution where we displayed one big main card with buttons to navigate back and forth, and a table with pokemons below, representing the following Pokemon cards. We added the table because it gives the user a better view of the pokemons. 

You can search for, filter and a sort Pokemon cards in the pokemon table. The filtering and sort option uses a drop down menu that displays what you can filter and sort on, making it easy for the user to do so. You can filter on the pokemon type and sort on ID, Hp and name. You can also mix them to create an even more specific display of pokemon cards.

You can add a Pokemon card to favourites by pressing the button under the main Pokemon card display. There is a toggle button to switch between the favourite Pokemon display and the normal display.

### Searching and filtration
The Pokémon TCG API offers excellent features for searching, filtering, and ordering data. Combined with `TanStack Query`, it made fetching the right cards based on specific criteria simple and efficient. The API also handles pagination seamlessly. All that remained was ensuring the logic surrounding data fetching was working correctly.

### DataContext and DataProvider
Instead of managing numerous states in a large parent component and passing them as props to children, we created a `DataContext` to centralize and distribute key states across the app. This context manages states like `activePokemon` (for the main Pokémon display) and `tablePokemons` (for the table). Since many components throughout the application rely on these states, this approach proved to be the most efficient solution. 

#### Add Favourites
The `FavouriteButton`component allows users to mark or unmark a Pokémon as a favorite, storing the data in localStorage for persistence. It uses `useState` to track the favorite status and `useEffect` to check if the current Pokémon is already a favorite when the active Pokémon changes. The favorite state is toggled when the button is clicked, adding or removing the Pokémon from the favorites list in localStorage using utility functions. The button displays a filled or empty star icon depending on the Pokémon's favorite status.

### Responsiveness
The website can be used on Pc, tablet or phone. We used `@media` queries and dynamic sizing to make sure that we didnt loose any functionality if you use other devices

### Testing with Vitest
We used Vitest to test our project. It has tests for `FavouriteButton`, `MainTable`, `PokemonCard` and our API calls. We used mocking to simulate Api calls so we could isolate the components and be sure that any failures was not caused by any external dependencies. We also used Snapchot to capture and compare the rendered output at a specific time, ensuring the UI remained consistent when changes were made.




