# T36-Project-1: Pokecards :rocket:
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
We use Prettier for formatting. Use `npm run format` to run formating



 ### Eslint
 To use Eslint use `npm run lint`


## Documentation
### Design
We opted for a design that highlights the Pokemon cards, ensuring they are the central focus of the user experience. We opted for a solution were we displayed one big main card with buttons to navigate back and forth, and a table with pokemons below, representing the following Pokemon cards. We added the table because it gives the user a better view of the pokemons. 

You can search for, filter and a sort Pokemon cards in the pokemon table. The filtering and sort option uses a drop down menu that displays what you can filter and sort on, maiking it easy for the user to do so. You can filter on the pokemon type and sort on ID, Hp and name. You can also mix them to create an even more spesific display of pokemon cards.

You can add a Pokemon card to favourites by pressing the button under the main Pokemon card display. There is a toggle button to switch between the favourite Pokemon display and the normal display.

### Key functionality
#### Searching
The website uses a set of pokemoncards, so we added a searchbar so the user could search for pokemoncards in that set. (Ola, forklar hvordan?)Users can find a pokemon even if they dont type the full name. You don't always remember the full name, so we thought it would be nice to help the user find pokemons.

#### Add Favourites
The `FavouriteButton`component allows users to mark or unmark a Pokémon as a favorite, storing the data in localStorage for persistence. It uses `useState` to track the favorite status and `useEffect` to check if the current Pokémon is already a favorite when the active Pokémon changes. The favorite state is toggled when the button is clicked, adding or removing the Pokémon from the favorites list in localStorage using utility functions. The button displays a filled or empty star icon depending on the Pokémon's favorite status.
#### Sorting and filtration
(Ola)

### Responsiveness
The website can be used on Pc, tablet or phone. We used `@media` queries to make sure that we didnt loose any functionality if you use other devices

### DataContext and DataProvider
(Ola)

### Testing with Vitest
We used Vitest to test our project. It has tests for `FavouriteButton`, `MainTable`, `PokemonCard` and our API calls. We actively used mocking to simulate Api calls so we could isolate the components and be sure that any failures was not caused by any external dependencies. We also used Snapchot to capture and compare the rendered output at a spesific time, ensuring the UI remained consistent when changes were made.




