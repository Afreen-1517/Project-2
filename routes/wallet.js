
*routes/wallet.js:*
```
const express = require('express');
const router = express.Router();
const Wallet = require('../models/Wallet');

router.post('/create', async (req, res) => {
  try {
    const wallet = new Wallet(req.body);
    await wallet.save();
    res.send({ message: 'Wallet created successfully' });
  } catch (error) {
    res.status(400).send({ message: 'Error creating wallet' });
  }
});

router.post('/transfer', async (req, res) => {
  try {
    const senderWallet = await Wallet.findOne({ userId: req.body.senderId });
    const receiverWallet = await Wallet.findOne({ userId: req.body.receiverId });
    if (!senderWallet || !receiverWallet) {
      return res.status(404).send({ message: 'Wallet not found' });
    }
    const amount = req.body.amount;
    senderWallet.balance -= amount;
    receiverWallet.balance += amount;
    await senderWallet.save();
    await receiverWallet.save();
    res.send({ message: 'Fund transferred successfully' });
  } catch (error) {
    res.status(400).send({ message: 'Error transferring fund' });
  }
});

module.exports = router;
```
