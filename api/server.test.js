// dont need server running
// the library will spin up an instance of the server in memory
const supertest = require('supertest')

// need access to instance of the server in server.js
const server = require('./server.js')

describe('server', () => {
    it("runs the tests", () => {
        expect(true).toBe(true)
    });

    describe('GET /', () => {
        // jest thinks that every test is running synch

        it("should respond with 200 OK", () => {
            // but this is a call to a server, so it's an async call
            // supertest(server).get("/").expect(500)

            // so we add return
            // by doing that we give back the result to the jest framework
                // the framework sees that this is a promise
                // and wont run test until it gets response and then runs test
                // we don't need to do async and await
            // return supertest(server).get("/").expect(200)

            // let's do it the jest way
            return supertest(server)
                .get("/")
                .then(res => {
                    expect(res.status).toBe(200)
                })
        })

        it("should respond with JSON", () => {
            return supertest(server)
                .get("/")
                .then(res => {
                    //to mathch uses regex to look for json in the returned res.type
                    expect(res.type).toMatch(/json/i)
                })
        })

        it("should respond with api: 'up' ", () => {
            return supertest(server)
                .get("/")
                .then(res => {
                    //to mathch uses regex to look for json in the returned res.type
                    expect(res.body.api).toBe("up")
                })
        })
    })

    
})
