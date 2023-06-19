const data = require('../data/zoo_data');

const firstSpecies = (id) => data.employees
  .find((employee) => employee.id === id)
  .responsibleFor[0];

const getOldestFromFirstSpecies = (id) => Object.values(
  data.species
    .find((animal) => animal.id === firstSpecies(id))
    .residents
    .sort((animalA, animalB) => animalB.age - animalA.age)[0],
);

module.exports = getOldestFromFirstSpecies;
