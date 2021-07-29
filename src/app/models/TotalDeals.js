const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const totalDealsSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  total_value: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const TotalDeals = mongoose.model('TotalDeals', totalDealsSchema);

module.exports = TotalDeals;
