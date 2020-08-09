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