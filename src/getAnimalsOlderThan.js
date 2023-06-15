const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animalSpecies, animalAge) => data.species
  .find(({ name }) => name === animalSpecies)
  .residents
  .every(({ age }) => age >= animalAge);

module.exports = getAnimalsOlderThan;
