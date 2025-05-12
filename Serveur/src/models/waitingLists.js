const mongoose = require('mongoose');

const WaitingListsSchema = new mongoose.Schema({
  specialty: { type: String, required: true },
  patient: { type: mongoose.Schema.Types.ObjectId, ref: "Patient", required: true },
  createdAt: { type: Date, default: Date.now }
});



module.exports = mongoose.model('WaitingLists', WaitingListsSchema);
