const axios = require('axios');
const pipedriveApi = 'https://api.pipedrive.com/api/v1/deals/';

const getWonDeals = async () => {
  try {
    const wonDeals = await axios.get(pipedriveApi, {
      params: {
        api_token: process.env.PIPEDRIVE_API_KEY,
        status: 'won',
      },
    });

    return wonDeals.data.data;
  } catch (e) {
    console.log('An error has occurred in Pipedrive Service:', e);
    return e.message;
  }
};

module.exports = getWonDeals;