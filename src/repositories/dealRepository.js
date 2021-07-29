const Deal = require('../app/models/Deal');
const TotalDeals = require('../app/models/TotalDeals');
var mongoose = require('mongoose');

module.exports = {
  async saveDeal(order) {
    try {
      const deal = await Deal.create({
        id: mongoose.Types.ObjectId(),
        title: order.title,
        organization: order.title,
        volumes: {
          service: 'SEDEX - CONTRATO',
          tracking: 'RT12345678',
        },
        value: order.value,
      });

      return deal;
    } catch (e) {
      console.log('saveDeal - An error has occurred saving deal:', e);
      return e.message;
    }
  },
  async saveTotalDeals(orders) {
    try {
      let total_value = 0;

      for (let order of orders) {
        total_value += order.value;
      }

      const totalDeals = await TotalDeals.create({
        id: mongoose.Types.ObjectId(),
        total_value: total_value,
        date: new Date(),
      });

      return totalDeals;
    } catch (e) {
      console.log('saveTotalDeals - An error has occurred saving deal:', e);
      return e.message;
    }
  },
};
