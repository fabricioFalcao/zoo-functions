const data = require('../data/zoo_data');

const stringfy = (person) => Object.values(person).toString();

const checkData = (person) => {
  let typeOfData = 'invalid';
  data.employees
    .forEach((personData) => {
      if (personData.firstName === stringfy(person)) {
        typeOfData = 'firstName';
      }
      if (personData.lastName === stringfy(person)) {
        typeOfData = 'lastName';
      }
      if (personData.id === stringfy(person)) {
        typeOfData = 'id';
      }
    });
  return typeOfData;
};

const findEmployee = (person) => {
  switch (checkData(person)) {
  case 'firstName':
    return data.employees
      .find(({ firstName }) => firstName === person.name);
  case 'lastName':
    return data.employees
      .find(({ lastName }) => lastName === person.name);
  case 'id':
    return data.employees
      .find(({ id }) => id === person.id);
  default:
    return null;
  }
};

const animalList = (person) => {
  const speciesList = [];
  findEmployee(person).responsibleFor.forEach((specie) => {
    speciesList.push(data.species
      .find(({ id }) => id === specie)
      .name);
  });
  return speciesList;
};

const animalLocation = (person) => {
  const location = [];
  findEmployee(person).responsibleFor.forEach((specie) => {
    location.push(data.species
      .find(({ id }) => id === specie)
      .location);
  });
  return location;
};

const getSingleEmployee = (person) => {
  const employee = findEmployee(person);
  const specie = animalList(person);
  const location = animalLocation(person);
  const obj = {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: specie,
    locations: location,
  };
  return obj;
};

const getMultipleEmployees = (...workers) => workers.flat()
  .map((person) => getSingleEmployee(person));

const generateEmployeesList = () => data.employees
  .map((employee) => ({ name: employee.firstName }));

const getEmployeesCoverage = (person) => {
  if (!person) {
    return getMultipleEmployees(generateEmployeesList());
  }
  if (checkData(person) === 'invalid') {
    throw new Error('Informações inválidas');
  }
  if (person) {
    return getSingleEmployee(person);
  }
};

module.exports = getEmployeesCoverage;
