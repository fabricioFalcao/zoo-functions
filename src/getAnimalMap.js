const data = require('../data/zoo_data');

// { includeNames: true, sex: 'female', sorted: true }

const noNames = {
  NE: ['lions', 'giraffes'],
  NW: ['tigers', 'bears', 'elephants'],
  SE: ['penguins', 'otters'],
  SW: ['frogs', 'snakes'],
};

const map = {
  NE: [
    {},
    {},
  ],
  NW: [
    {},
    {},
    {},
  ],
  SE: [
    {},
    {},
  ],
  SW: [
    {},
    {},
  ],
};

const genMap = (options) => {
  const cardinals = ['NE', 'NW', 'SE', 'SW'];
  cardinals.forEach((direction) =>
    data.species.filter(({ location }) =>
      location === direction)
      .forEach((animal, index) => {
        map[direction][index][animal.name] = animal.residents
          .filter(({ sex }) => (options.sex ? sex === options.sex : true))
          .map(({ name }) => name);
      }));
  return map;
};

const genMapSorted = (options) => {
  const cardinals = ['NE', 'NW', 'SE', 'SW'];
  cardinals.forEach((direction) =>
    data.species.filter(({ location }) =>
      location === direction)
      .forEach((animal, index) => {
        map[direction][index][animal.name] = animal.residents
          .filter(({ sex }) => (options.sex ? sex === options.sex : true))
          .map(({ name }) => name)
          .sort();
      }));
  return map;
};

const getAnimalMap = (options) => {
  if (!options || !options.includeNames) {
    return noNames;
  }
  if (!options.sorted) {
    return genMap(options);
  }
  return genMapSorted(options);
};

module.exports = getAnimalMap;

console.dir(getAnimalMap({ includeNames: true, sorted: true }), { depth: null });
