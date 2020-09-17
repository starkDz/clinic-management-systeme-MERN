const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const Ordonnance = require('../../models/Ordonnance');
const idOrdonnace = '';
//@route GET api/profile
//@desc create or update user profile
//@route private
router.post('/', auth, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { idMedicament } = req.body;

  //Build type objects
  const Fields = {};
  Fields.owner = req.user.id;
  Fields.idMedicament = idMedicament;
  try {
    element = new Ordonnance(Fields);
    await element.save();
    res.json(element);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.put('/newMedicament/:id', auth, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { medicament, quantite } = req.body;

  //Build type objects
  const Fields = {};
  if (medicament) Fields.medicament = medicament;
  if (quantite) Fields.quantite = quantite;

  try {
    const element = await Ordonnance.findOne({ _id: req.params.id });
    element.idMedicament.unshift(Fields);
    await element.save();
    res.json(element);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
// Get all profiles Public

router.get('/', async (req, res) => {
  try {
    const elements = await Ordonnance.find()
      .populate('owner', ['name'])
      .populate('idMedicament.medicament', ['description', 'dosage']);
    res.json(elements);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//Delete Type
router.delete('/:type_id', auth, async (req, res) => {
  try {
    //remove type
    await Ordonnance.findOneAndRemove({ _id: req.params.type_id });
    res.json({ msg: 'Element Deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
router.delete('/', auth, async (req, res) => {
  try {
    //remove type
    await Ordonnance.deleteMany({});

    res.json({ msg: 'all Elements are Deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
router.get('/getCount', async (req, res) => {
  try {
    const NumberMedicament = await Ordonnance.countDocuments();

    res.json([NumberMedicament, NumberMedicament, NumberMedicament]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
module.exports = router;
