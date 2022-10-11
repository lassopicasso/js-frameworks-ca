# Strategy Games - JS FrameWorks CA

![Strategy Games](/src/img/strategy-games.jpg?raw=true "Strategy Games")

React App, with login functionality. Main assignment in Javascript Frameworks course.

## Description

This React project is styled by the CSS framework React Bootstrap. The back-end use a headless CMS plugin in WordPress.

Project consists of following pages:

- Homepage (list of strategy games)
- Details Page (redirected to when interacted with one of the games in homepage)
- Contact Page (built by using React Hook Form and Yup validation)
- Login Page (Receive a JWT authorisation if credentials is validated)

The project use axios to fetch a list of games from the back-end. When one of the games is interacted, the user is redirected to a details page that display more information of the game by using its unique id.
By using the custom hook "AuthContext" the user can login and receive a jwt that is saved in localstorage, so that user is kept logged-in when revisiting the website.

## Built With

The project is built with following tech stack.

Front-end:

- [React.js](https://reactjs.org/)
- [React Bootstrap](https://getbootstrap.com)

Back-end:

- [WordPress](https://wordpress.org/)

Other NPM's:

- [React Router Dom](https://www.npmjs.com/package/react-router-dom)
- [Moment](https://momentjs.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Yup Validation](https://www.npmjs.com/package/yup)
- [Axios](https://www.npmjs.com/package/axios)

## Getting Started

To install and run this React project locally, you can do the following:

1. Clone the repo:

```bash
git clone git@github.com:Noroff-FEU-Assignments/js-frameworks-course-assignment-lassopicasso.git
```

2. Install the dependencies:

```
npm install
```

3. To run the app, run the following command:

```bash
npm run start
```

## Contact

[My Portfolio](https://lars-walderhaug.netlify.app)

[My LinkedIn page](https://www.linkedin.com/in/lars-walderhaug-5924a349/)
