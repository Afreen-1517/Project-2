*routes/auth.js:*
```
const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.send({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).send({ message: 'Error registering user' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).send({ message: 'Invalid email or password' });
    }
    const isValidPassword = await user.comparePassword(req.body.password);
    if (!isValidPassword) {
      return res.status(401).send({ message: 'Invalid email or password' });
    }
    const token = user.generateAuthToken();
    res.send({ token });
  } catch (error) {
    res.status(400).send({ message: 'Error logging in user' });
  }
});
module.exports = router;
```
