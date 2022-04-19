exports.seed = async function(knex) {
    await knex('cars').del()
    await knex('cars').insert([
      { vin: 'vin1', make: 'Toyota', model: 'Matrix', mileage: 39000, transmission: 'automatic' },
      { vin: 'vin2', make: 'Ford', model: 'Clubwagon', mileage: 139000, transmission: 'automatic' },
      { vin: 'vin3', make: 'KIA', model: 'Teluride', mileage: 2300, transmission: 'manual' },
    ]);
  };
  