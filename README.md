# ReactTask - Task assignment

This project is a Weather App in React.js developed as part of the Frontend training at Coherent Solutions. 
It's done using the Foreca API.

The project required using basic and advanced React concepts such as Hooks, Context API, React Router, Redux and Unit Testing using Jest. 

Version control done by Pull Requests through GitHub using Git.

## Installation

```
npm install
npm start
```

### Technologies

1. React
2. Redux
3. Context
4. Router
5. Form
6. CSS modules


### Full description

Use weather API: https://developer.foreca.com/#Forecasts.
My task was to create the front-end for that API. The application does not have any login buttons to authenticate against weather api. It
happens silently for the user. 

Main tasks:

1. Main page with weather for the current location.
2. List page (may also be a flyout or any other kind of menu), where user can see the weather for all cities in the World
   (all available cities) sorted by country and city title.
   *I improved on this by my own initiative to a searchbar with autocomplete feature where user can input a given location and the app will offer autocomplete suggestions after typing the first 3 characters.
3. Page with details about chosen (in a list from previous point) city.
4. Info page where user can see some information about the service.
5. Feedback page with a form for feedback on your site. Form created in a survey style with some simple questions.
   Implement form submitting mechanism and save it in localStorage.
6. Implement Dark/Light mode for your app. There should be a switch that changes current view.

Every page has a layout with a navbar header and footer.
