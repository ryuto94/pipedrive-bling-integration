const axios = require('axios');
const blingApi = 'https://bling.com.br/Api/v2/pedido/json/';

const saveOrder = async (orderXml) => {
  try {
    const order = await axios.post(
      blingApi,
      {},
      {
        params: {
          apikey: process.env.BLING_API_KEY,
          xml: orderXml,
        },
      }
    );

    return order;
  } catch (e) {
    console.log('An error has occurred in Bling Service:', e);
    return e.message;
  }
};

module.exports = saveOrder;