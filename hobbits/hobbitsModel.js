const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

async function insert(hobbit) {
  return db('hobbits').insert(hobbit, "id")
}

async function update(id, changes) {
  return db('hobbits').update(changes).where(id)
}

function remove(id) {
  return db('hobbits').remove().where(id);
}

function getAll() {
  return null
}

function findById(id) {
  return db('hobbits').findById().where(id);
}
