// testing the insert manually

// make sure the data is not on the table (clean tables before each test)
// insert the data
// check that the data is in the table

//get data directly from db
const db = require('../data/dbConfig.js')

const Hobbits = require('./hobbitsModel.js')
const { intersect } = require('../data/dbConfig.js')


describe('environment', () => {
    it('should be using the testing database', () => {
        expect(process.env.DB_ENV).toBe('testing')
    })
})

describe('hobbits model', () => {
    describe('insert', () => {
        //cleans db befor tests
        beforeEach(async () => {
            await db('hobbits').truncate()
        })

        it("should insert hobbits into database", async () => {
            await Hobbits.insert({ name: 'rosie' })
            await Hobbits.insert({ name: 'sam' })

            const hobbits = await db('hobbits')
            expect(hobbits).toHaveLength(2)
        })
    })
})