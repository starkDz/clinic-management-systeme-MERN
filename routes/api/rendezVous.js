const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const RendezVous = require('../../models/RendezVous');
const User = require('../../models/User');

//@route GET api/profile
//@desc create or update user profile
//@route private
router.post(
  '/',
  [
    auth,
    [
      check('nom', 'nom is required').not().isEmpty(),
      check('prenom', 'prenom is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { nom, prenom, telephone } = req.body;

    //Build type objects
    const Fields = {};
    Fields.owner = req.user.id;
    if (nom) Fields.nom = nom;
    if (prenom) Fields.prenom = prenom;
    if (telephone) Fields.telephone = telephone;

    try {
      element = new RendezVous(Fields);
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
    const elements = await RendezVous.find();
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
    await RendezVous.findOneAndRemove({ _id: req.params.type_id });
    res.json({ msg: 'Element Deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
router.delete('/', auth, async (req, res) => {
  try {
    //remove type
    await RendezVous.deleteMany({});

    res.json({ msg: 'all Elements are Deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
module.exports = router;
