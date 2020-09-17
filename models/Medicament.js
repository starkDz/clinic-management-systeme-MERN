const mongoose = require('mongoose');
const MedicamentSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  description_Fr: {
    type: String,
    required: true,
  },
  dosage: {
    type: Number,
  },
  date_Cre: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Medicament = mongoose.model('medicament', MedicamentSchema);
