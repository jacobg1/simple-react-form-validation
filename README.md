# simple-react-form-validation (in progress)
This will be a reusable form validation component for React and is designed to be included as a node module

## scripts

### start

```npm start```
runs ```webpack --watch``` and watches for changes

### build

```npm run build```
runs ```webpack``` which compiles code and dumps results into build folder


## lint
```npm run lint```
runs ```eslint src/**/*.js``` and lints all files in src folder


## instructions for local development
in root level run ```npm link``` to link project to global node_modules

create a new test project ex: ```npx create-react-app test-project``` 

in root level of test-project run ```npm link simple-react-form-validation``` - this pulls in simple-react-form-validation as a module in the test-project.  

include component by importing it with ```import Validator from 'simple-react-form-validation'```
and add the component to your return function ```<Validator />```

in the simple-react-form-validation folder run ```npm start``` - now any changes made to the Validator component will show up in the test-project
