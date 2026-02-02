# react-js-01-2026-2pm
react-js-01-2026-2pm

# react project structure
project name - react-hello
    > root folder files
      > contains all the installed npm packages
      > Auto-created when you run
      > npm install 
      > Do Not modify manually, Not pushed to Github

package.json
      > Main configuration file 
        Contains:
            Project name
            Dependencies
            Scripts like:
            > nom start
            > npm run build
            > npm test

package-lock.json
       > locks exact versions of dependeices
       > Helps keep the same versions across machines


.gitignore
       > Tells Git which files to ignore
       > Usually ignores:
         node_modules/
         build/

.readme.md
       > Documentation file
         Projectsetup
         How to run
         About the project

public/ Folder
        > contains the static files
          Example: index.html --> main HTML file
          React app is injected into this file 
          
src/ Folder
        > This is where we write bussiness logic
        > index.js
          Entry point of the react app 
          Renders <App/> componenet in HTML
          Example: ReactDOM.createRoot(document.getElementById('root')).render(<App/>);

        > App.js
          Main root component
          UI starts from here
          You write JSX here
        
        > App.css 
          Styles for App component
        
        > index.css
          Global styles for the entire app 
        
        > App.test.js
          Used for testing App component
          Uses Test + React Testing 
        
        > logo.svg
          Sample image/logo used in default templates

        > reportWebVitals.js 
          Used for prformance monitoring
          Measures page speed metrics

        > setupTest.js
          Test setup file
          Runs before tests starts


-----------------------------------------------
routes
controllers
services
models
config
middlewares
utils
.env
