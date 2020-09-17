const mongoose = require('mongoose');
const AnalyseSchema = new mongoose.Schema({
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

module.exports = Analyse = mongoose.model('analyse', AnalyseSchema);
