const data = require('../data/zoo_data');

const scheduleByAnimal = (animal) => data.species
  .find(({ name }) => name === animal)
  .availability;

const scheduleByDay = (...days) => {
  const schedule = {};
  days.flat().forEach((day) => {
    if (day !== 'Monday') {
      schedule[day] = {
        officeHour: `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`,
        exhibition: data.species
          .filter(({ availability }) => availability.includes(day))
          .map(({ name }) => name),
      };
    } else {
      schedule[day] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    }
  });
  return schedule;
};

const getSchedule = (scheduleTarget) => {
  const weekDays = Object.keys(data.hours);
  const zooAnimals = data.species.map(({ name }) => name);

  if (zooAnimals.includes(scheduleTarget)) {
    return scheduleByAnimal(scheduleTarget);
  }
  if (weekDays.includes(scheduleTarget)) {
    return scheduleByDay(scheduleTarget);
  }
  return scheduleByDay(weekDays);
};

module.exports = getSchedule;
