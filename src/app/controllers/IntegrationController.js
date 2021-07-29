const PipedriveService = require('../../services/PipedriveService');
const BlingService = require('../../services/BlingService');
const createOrder = require('../../helpers/createOrder');
const Deal = require('../../repositories/dealRepository');

class integrateOrder {
  async startIntegration(req, res) {
    try {
      let returnData = {
        status: null,
        message: null,
        orders: [],
      };

      const wonOrders = await PipedriveService();

      for (let order of wonOrders) {
        let orderXml = await createOrder(order);

        let blingOrder = await BlingService(orderXml);

        let saveOrder;

        if (blingOrder.status === 200) {
          try {
            saveOrder = await Deal.saveDeal(order);
            returnData.orders.push(saveOrder);
          } catch (e) {
            console.log('An error has occurred saving deal:', e);
            return res.status(500).json(returnData);
          }
        } else {
          returnData = {
            status: 500,
            message: 'An error has occurred in Bling integration',
          };

          return res.status(500).json(returnData);
        }
      }

      const saveTotalDeals = await Deal.saveTotalDeals(returnData.orders);

      returnData.message = 'Integration Successfully';
      returnData.status = 200;

      return res.status(200).json(returnData);
    } catch (e) {
      console.log('IntegrationController - StartIntegration:', e);
      return res.status(500).json('An error has occurred in integration:', e.message);
    }
  }
}

module.exports = new integrateOrder();
