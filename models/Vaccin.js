const mongoose = require('mongoose');
const VaccinSchema = new mongoose.Schema({
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
  age: {
    type: String,
  },
  date_Cre: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Vaccin = mongoose.model('vaccin', VaccinSchema);
