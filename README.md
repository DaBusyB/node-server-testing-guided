# Node Server Testing Guided Project

Guided project for **Node Server Testing** Module.

## Project Setup

- [ ] fork and clone this repository.
- [ ] **CD into the folder** where you cloned **your fork**.
- [ ] type `npm i` to download dependencies.
- [ ] type `npm run server` to start the API.

Please follow along as the instructor adds automated tests to the API.

## Configure Jest for Node
- install jest cli -> 'npm i -g jest-cli'
- 'jest --init'
- pick 'node' instead of 'jsdom' 
- create server.test.js file where server.js is


## Testing endpoints
- run the server
    - supertest
- make a request to the endpoint
- inspect the response
- assert that the response content is ehat we expected


## End to end testing
- in order to test from api to db we need to have a seperate test db
- the reason why is be when testing the db, we want to be able to wipe the db any time we want


## Depoly to backend to heroku
- create new app
- name it and create app
- connect to github repo and the correct branch
- enable auto deploys
- go to overview tab

## If deploying SQLite db, heres how to create Postgress db in heroku and use that instead
- resources tab
- in add ons, type postgress and choose heroku postgress and provision
- should see heroku postgress in add ons

- our app on heroku now has a db, but were not using it yer
- we connect to this one instead of sqlite thorugh dbconfig in the app through configuration variable db.env
- db.env needs the production value
- we add this value to heroku and make it production
    - copy DB_ENV
    - got to settings in heroku
    - reveal config variables
    - DB_ENV is the key and production is the value
    - add
    - we now have a db url
    - dont use it, bc it changes frequently
    - just use the config variable DATABASE_URL as seen in the config variables in heroku

    - ensure that the correct client is installed. ours is pg(postgress) here

## Populating the db
- we need to populate the db using migrations to create a table
- we can us the heroku cli to do this. overview -> more -> run console
- run bash - this will give us a bash console running on my linux vm
- run knex migrate:latest and now we have an empty table. table will show []
- populate the db with seeds. run knex seed:run
- now i can use this api url in postman for testing


## Testing
- the cross-env package helps us set the environment varible before running code
- 