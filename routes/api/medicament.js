const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const Medicament = require('../../models/Medicament');

//@route GET api/profile
//@desc create or update user profile
//@route private
router.post(
  '/',
  [auth, [check('description_Fr', 'Description is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { description_Fr, dosage } = req.body;

    //Build type objects
    const Fields = {};
    Fields.owner = req.user.id;
    if (description_Fr) Fields.description_Fr = description_Fr;
    if (dosage) Fields.dosage = dosage;

    try {
      element = new Medicament(Fields);
      await element.save();
      res.json(element);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// Get all profiles Public

router.get('/', async (req, res) => {
  try {
    const elements = await Medicament.find().populate('owner', ['name']);
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
    await Medicament.findOneAndRemove({ _id: req.params.type_id });
    res.json({ msg: 'Element Deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
router.delete('/', auth, async (req, res) => {
  try {
    //remove type
    await Medicament.deleteMany({});

    res.json({ msg: 'all Elements are Deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
router.get('/getCount', async (req, res) => {
  try {
    const NumberMedicament = await Medicament.countDocuments();

    res.json([NumberMedicament, NumberMedicament, NumberMedicament]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
module.exports = router;
