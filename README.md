# Welcome to My Pokemon App
***

## Task
Build a multi-page ReactJS application that interacts with an external API to display and filter Pokémon. Implement lazy loading, routing, a search bar, error handling, and detailed Pokémon views.

## Description
This project is a fully interactive ReactJS application that utilizes the [PokéAPI](https://pokeapi.co) to fetch and display Pokémon data.

# Features:
1. Multiple Pages: The homepage displays all Pokémon with a search bar and lazy loading. Clicking a Pokémon leads to its detailed page.
2. Lazy Loading: Pokémon cards are loaded as the user scrolls, improving performance.
3. Search Bar: Users can search for Pokémon by name.
4. Routing: Implemented with React Router to support navigation between pages.
5. Error Handling: The app gracefully handles network issues and API errors, and includes a custom 404 Not Found page.
6. Clean Code Structure:
  - One component per file.
  - CSS files paired with their components (`ExampleComponent.js` has `ExampleComponent.css`).
  - All reusable UI components live inside `src/components/`.
  - Functions stay under 20–30 lines; files remain below 100 lines for readability.

## Installation
Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/my-pokemon-app.git
cd my-pokemon-app
npm install
npm start

## Usage
Launch the app locally:
npm start

Then open your browser and go to:
http://localhost:8080

#Functional Overview:
The home page displays a grid of Pokémon with staggered animations.

Click a card to view details like type, abilities, and stats.

Use the search bar to filter Pokémon by name.

Use the "Load More" button to reveal more Pokémon.

Invalid routes display a 404 Not Found page.

All components handle errors gracefully if the API is down or the network fails.


#Tech Stack
ReactJS

Axios (for API requests)

React Router DOM (for navigation)

CSS (custom styles per component)

PokéAPI (https://pokeapi.co)

visit my hosted link:
https://dev.d1fcawh8v73twn.amplifyapp.com

### The Core Team
AVONG HARUNA

<span><i>Made at <a href='https://qwasar.io'>Qwasar SV -- Software Engineering School</a></i></span>
<span><img alt='Qwasar SV -- Software Engineering School's Logo' src='https://storage.googleapis.com/qwasar-public/qwasar-logo_50x50.png' width='20px' /></span>
