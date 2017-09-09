module.exports = (table, seedData, name) => {
  seedData.forEach((data) => {
    table.create(data)
      .then(() => console.log(`data successfully seeded for ${name}`))
      .catch(err => console.log('error seeding data', err));
  });
};
