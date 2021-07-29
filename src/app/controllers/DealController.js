const PipedriveService = require('../../services/PipedriveService');
const TotalDeals = require('../models/TotalDeals');
const Deal = require('../models/Deal');

module.exports = {
  async getDealsByPipedrive(req, res) {
    try {
      const wonOrders = await PipedriveService();

      return res.status(200).json(wonOrders);
    } catch (e) {
      console.log('OrderController - getDealsByPipedrive:', e);
      return res
        .status(500)
        .json('An error has occurred getting deals:', e.message);
    }
  },
  async getDeals(req, res) {
    try {
      const deals = await Deal.find();

      return res.status(200).json(deals);
    } catch (e) {
      console.log('OrderController - getDeals:', e);
      return res
        .status(500)
        .json('An error has occurred getting deals:', e.message);
    }
  },
  async getTotalDeals(req, res) {
    try {
      const totalOrders = await TotalDeals.find();

      return res.status(200).json(totalOrders);
    } catch (e) {
      console.log('OrderController - getTotalDeals:', e);
      return res
        .status(500)
        .json('An error has occurred getting total deals:', e.message);
    }
  },
};
