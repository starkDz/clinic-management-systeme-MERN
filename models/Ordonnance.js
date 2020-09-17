const mongoose = require('mongoose');
const OrdonnanceSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  idMedicament: [
    {
      medicament: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'medicament',
      },
      quantite: {
        type: Number,
        required: true,
      },
    },
  ],

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Ordonnance = mongoose.model('ordonnance', OrdonnanceSchema);
