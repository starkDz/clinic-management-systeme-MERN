const mongoose = require('mongoose');
const WilayaSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  code: {
    type: Number,
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

module.exports = Wilaya = mongoose.model('wilaya', WilayaSchema);
