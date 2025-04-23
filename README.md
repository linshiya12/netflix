# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.









**netflixgpt**

-create react+vite app
-configure tailwind css
-Header
-routing
-login Form 
-sign up form
-form validation
-useref
-firebase setup
-deploying project using firebase
-create signup user account
-implement sign In user Api
-create redux store with userslice
-update profile
-Bugfix: sign up user display name update
-Bugfix:if the user is not loggedin redirect/browse to login page and vice-versa
-unsubscribed to the -onAuthStateChangesCallback
-Register TMDB Api & create an app & get access token
-Get data from TMDB now playing movies List Api
-created custom hook for nowPlayingMovies and movie trailer
-planning for maincontainer and secondarycontainer
-fetch data for trailer video
-update state with trailor video
-embeded the ytube video and makeit autoplay and mute
-build secondary component


**features**
-Login/signup
    -sign in/signup form
    -redirect to browse page
-Browse(after authentication)
    -Header
    -Main Movie
        -tailor in background
        -title&description
        -Movie suggestions
            -movie lists
-Netflix gpt
    -search bar
    -movie suggestions
















<!-- newthings i learned from netflix project -->
**formmik**
this library we can use for creating forms

**regex**
-we can get information for validation from regex documentation
-like what to want for email varification(it contains @ like that)


**useRef**
-useRef is a hook in React used to store a reference to a DOM element or value without re-rendering the component.
-We use the useRef hook when we want to directly access or reference a DOM element, like an input field.
-For example, if we have an input field for email verification and we want to get its value without using state, we can use useRef.
-First, we create a ref using const emailRef = useRef(null), then attach it to the input field using ref={emailRef}.
-Later, we can access the value like emailRef.current.value.



**why called 2 times**
-due to strict mode








<!-- doubts -->
production phase and local phase