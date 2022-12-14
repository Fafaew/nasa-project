const launches = new Map();

const launch = {
  flightNumber: 100,
  mission: 'Keple Exploration X',
  rocket: 'Explorer IS1',
  launchDate: new Date('December 27, 2030'),
  destination: 'Kepler-442 b',
  customer: ['ZTM', 'NASA'],
  upcoming: true,
  sucess: true,
};

launches.set(launch.flightNumber, launch);

module.exports = {
  launches,
};