const mongoose = require('mongoose');
const RadioSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  description_Fr: {
    type: String,
    required: true,
  },
  observation: {
    type: String,
  },
  date_Cre: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Radio = mongoose.model('radio', RadioSchema);
