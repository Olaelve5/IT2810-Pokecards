# T36-Project-1: Pokecards :rocket:
## Project - Build and run tests :gear: :wrench:
### Build and run the project

Open the project:
1. Open new terminal
2. Go in to prosjekt1 folder: `cd prosjekt1`
3. Install the necessary packages: `npm install`
4. Run the project: `npm run dev`


### Tests 🧪
We use Vitest for testing. To test the project write `npm run test` in terminal

### Formatting
We use Prettier for formating. Use `npm run format` to run formating



 ### Eslint
 To use Eslint use `npm run lint`


## Documentation
### Design Choices
We opted for a design that higlights the Pokemon cards, ensuring they are the central focus of the user experience. One of the requirements was for the user to be able to display one resource at the time and to be able to navigate back and forth between resources. We opted for a solution were we displayed one big main card with buttons to navigate back and forth, and a table with pokemons below, representing the following Pokemon cards. We added the table because it gives the user a better view of the pokemons. It can be hard to read everything on the Pokemon Card, so we added a title for name and a block for id number to make it easier for the user to see.

Another requirement was sorting and filtering. For this, we have a search field, a filter option and a sort option above the pokemon table. The filtering and sort option uses a drop down menu that displays what you can filter and sort on, maiking it easy for the user to do so. You can filter on the pokemon type and sort on ID, Hp and name. You can also mix them to create an even more spesific display of pokemon cards.

We wanted it to be easy to add a Pokemon card to favourites, so we added a star-button under the main Pokemon card display. You will also be able to see the star icon for your favourite pokemons in the table below. We opted to make a toggle button to display all your favourite pokemons, instead using the filtering or sort option.(Hvorfor gjorde vi dette igjen)

We used few colors on the website, since the Pokemon cards already has alot of then. The purpose of this was to highlight the uniqness of each card. We used the yellow color from the Pokemon cards on different components to make the design coherent.

### Searching functionality
The website uses a set of pokemoncards, so we added a searchbar so the user could search for pokemoncards in that set. (Ola, forklar hvordan?) We made it possible to not write the full name of a pokemon and still get the it . Sometimes you dont remember the full name, so we thought it would be nice to help the user find pokemons.

### Add Favourites
The `FavouriteButton`component allows users to mark or unmark a Pokémon as a favorite, storing the data in localStorage for persistence. It uses `useState` to track the favorite status and `useEffect` to check if the current Pokémon is already a favorite when the active Pokémon changes. The favorite state is toggled when the button is clicked, adding or removing the Pokémon from the favorites list in localStorage using utility functions. The button displays a filled or empty star icon depending on the Pokémon's favorite status.
### Sorting and filtration
(Ola)
### Pagination

### Responsiveness
The website can be used on Pc, tablet or phone. We used `@media` queries to make sure that we didnt loose any functionality if you use other devices

### DataContext and DataProvider
(Ola)

### Testing with Vitest
We used Vitest to test our project. It has tests for `FavouriteButton`, `MainTable`, `PokemonCard` and our API calls. We actively used mocking to simulate Api calls so we could isolate the components and be sure that any failures was not caused by any external dependencies. We also used Snapchot to capture and compare the rendered output at a spesific time. This ensures us that the UI stays consistent if changes are made.




