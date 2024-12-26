
*models/Wallet.js:*
```
const mongoose = require('mongoose');

const walletSchema = new mongoose.Schema({
  userId: String,
  balance: Number,
});

const Wallet = mongoose.model('Wallet', walletSchema);

module.exports = Wallet;
```
