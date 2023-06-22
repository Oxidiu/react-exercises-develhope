<!-- Exercise: -->
<!-- You are building a recipe app. Users should be able to add new recipes, view existing recipes, and delete recipes. Implement the necessary components and functionality to achieve this. -->

<!-- Requirements: -->

<!-- Add a state variable called "recipes", which is an array. -->

<!-- Add a state variable called "inputText", which is a string. -->

<!-- Save the recipe name we input in the input tag in "inputText". -->

<!-- Add a button called "Add Recipe". When pressed, it should add the recipe name in "inputText" to the "recipes" array. -->

<!-- Use recipes.map() in the App's render functionality to render a card component for each recipe in the recipes array. -->

<!-- Give each card component a "key" property. -->

<!-- Render the recipe name inside an input tag in each card component. Whenever the recipe name is edited, it should also update the "recipes" array. -->

<!-- To achieve this, pass the index of the recipe in the card component and a callback function defined in the App component that will update the recipes array. -->

<!-- Use the "value" property in the input tag to set the value for the recipe name obtained from the content prop. -->

<!-- Add a "Delete Recipe" button in the Card Component that, when clicked, will delete that recipe from the list. -->

<!-- To accomplish this, pass the index to the Card Component and a deleteCallback function that will delete a recipe from the recipes array. -->

<!-- Update the "recipes" state variable and re-render the list of cards whenever a recipe is deleted. -->

<!-- Add a state variable called "loggedIn", which will be initially set to false. -->

<!-- Add a state variable called "username", which will be initially set to null. -->
<!-- Initially, hide the recipe cards when the user opens the website. -->

Add a login screen to the page. It should consist of a div with the following tags inside it:

<!-- A text input field for the username. -->

<!-- A button called "Log In". -->
<!-- When the user types in a username and presses the login button, save that username from the input into the "username" state variable and set "loggedIn" to true. -->

<!-- If "loggedIn" is true, hide the login screen and show the input and recipe cards from the previous step. You can use CSS classes to show or hide the components. -->

<!-- Modify the existing code to store the "recipes" array in the browser's localStorage. This way, even if the user refreshes the page, the list of recipes will persist. -->

<!-- In the App component, add a useEffect hook to save the "recipes" array to localStorage whenever it changes. Use the localStorage.setItem() method to store the array. The "recipes" array should be converted to a string using JSON.stringify() before storing it. -->

<!-- In the App component, add code to retrieve the "recipes" array from localStorage when the component mounts. 

Use the localStorage.getItem() method to retrieve the stored string and convert it back to an array using JSON.parse(). If there are no stored recipes, initialize the "recipes" state variable with an empty array. -->