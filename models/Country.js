const mongoose = require('mongoose');
const CountrySchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  code: {
    type: String,
    required: true,
  },
  description_Fr: {
    type: String,
  },
  date_Cre: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Country = mongoose.model('country', CountrySchema);
