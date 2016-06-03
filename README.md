Donando Front-end Repo
===================

- This branch is mainly related to heroku deployment.

- We are using a Node.js server based on Express.js to serve the static files from the `dist` directory.

- To setup this repo, refer [here](https://github.com/Donando/donando-front-end)

- To deploy the app on heroku, first build the project using the following command:
`npm run build`

- Next follow the heroku tutorial from [here](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction)

Following are the changes from the `master` branch:

1. .gitignore file needs to let the `dist` directory to be pushed onto heroku (this is the directory from where the static files will be served)

2. This should be the change in package.json file.
	* scripts > start > `npm install && node server.js`

3. We need a server.js file in the main directory, which contains the Node.js setup using Express.js

4. Procfile needs to be added in the main directory, which is an entry point for node applications 


