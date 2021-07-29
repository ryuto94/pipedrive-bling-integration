const{ Router } = require("express");

const routes = new Router();

const IntegrationController = require('./app/controllers/IntegrationController');
const OrderController = require('./app/controllers/DealController');

routes.post('/dev', (req, res) => {
    res.send(`Olá, api está funcionando`);
})

routes.get('/integration', IntegrationController.startIntegration);
routes.get('/pipedrive-deals', OrderController.getDealsByPipedrive);
routes.get('/deals', OrderController.getDeals);
routes.get('/total-deals', OrderController.getTotalDeals);

module.exports = routes;