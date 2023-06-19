const data = require('../data/zoo_data');

const countEntrants = (entrants = []) => {
  const visitors = { adult: 0, child: 0, senior: 0 };
  entrants.forEach((person) => {
    if (person.age < 18) {
      visitors.child += 1;
    }
    if (person.age >= 18 && person.age < 50) {
      visitors.adult += 1;
    }
    if (person.age >= 50) {
      visitors.senior += 1;
    }
  });
  return visitors;
};

const calculateEntry = (entrants) => {
  const visitors = countEntrants(entrants);
  const { adult, senior, child } = data.prices;

  return visitors.adult * adult + visitors.senior * senior + visitors.child * child;
};

module.exports = { calculateEntry, countEntrants };
