const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  const animalsObject = {};
  if (!animal) {
    data.species
      .forEach((specie) => {
        animalsObject[specie.name] = specie.residents.length;
      });
    return animalsObject;
  }
  return data.species
    .find(({ name }) => name === animal.species)
    .residents
    .filter(({ sex }) => (animal.sex ? sex === animal.sex : sex))
    .length;
};

module.exports = countAnimals;
