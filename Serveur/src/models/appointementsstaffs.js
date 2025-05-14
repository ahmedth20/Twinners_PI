const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentstaffSchema = new Schema({
  staffId: { type: Schema.Types.ObjectId, ref: 'Staff', required: true },
  start: { type: Date, required: true },
  end: { type: Date, required: true },
});

module.exports = mongoose.model('Appointmentstaff', appointmentstaffSchema);