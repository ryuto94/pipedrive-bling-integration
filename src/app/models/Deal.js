const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const dealSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  organization: {
    type: String,
    required: true,
  },
  volumes: [
    {
      service: { type: String },
      tracking: { type: String },
    },
  ],
  value: {
    type: Number,
    required: true,
  },
});

const Deal = mongoose.model('Deal', dealSchema);

module.exports = Deal;
