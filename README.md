Donando Front-end Repo
===================

This document explains the tech stack, common practices used in the repo

Setup
-----

1)  Clone this repo using the following command

`git clone https://github.com/Donando/donando-front-end.git`


2)  Move to the repo that you have just clone and run the following command

`npm install`

3) To start the app, run

`npm start`
 Navigate to localhost:8080 in your browser to view the app

4) This project is enabled with **ESLint**. Any JS file that you write must be linted using ESLint. To run the linting command type

`npm run lint`

5) To build the project, run

`npm run build`


Tech Stack
----------
Following is the tech stack:

 - **ReactJS** - Used as a View Library. Technically the 'V' in MVC architecture
 - **Redux** - Used a State container for the app. Technically the 'MC' in the MVC architecture
 - **SASS** - Using SASS files instead of plain CSS
 - **Webpack** - Module bundler. This also replaces front-end build tools like grunt or gulp
 - **Babel** - Transpile ES6 to ES5. This project uses ES6. Since the browser support for ES6 is not complete, this tool allows us to write code in ES6 which can be transpiled into ES5.
 - **ESLint** - Used to lint the JS code

Directory Structure
-------------------
 - **dist** - Contains the distributable version of the project. Ideally this folder gets pushed into the Docker or production server
 - **src** - Contains the source code of the app

src directory
-----------------
 - **components** - Dumb or presentational react components
 - **containers** - Stateful or container react components
 - **layouts** - React components that dictate the layout of the app
 - **redux** - Code related to redux
 - **routes** - Routes in the application
 - **static** - Static assets in the application
 - **styles** - SASS files for the application

To do
--------------

Following are the pending items

 - **Testing** - Add Unit test cases
