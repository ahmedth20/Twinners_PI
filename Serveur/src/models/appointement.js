const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  doctorId: { type: Schema.Types.ObjectId, ref: 'Doctor', required: true },
  start: { type: Date, required: true },
  end: { type: Date, required: true },
});

//module.exports = mongoose.model('Appointment', appointmentSchema);
//module.exports = mongoose.models.Appointment || mongoose.model('Appointment', appointmentSchema);

