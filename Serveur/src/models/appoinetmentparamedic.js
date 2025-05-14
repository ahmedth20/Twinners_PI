const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentparamedicSchema = new Schema({
  paramedicId: { type: Schema.Types.ObjectId, ref: 'Paramedic', required: true },
  start: { type: Date, required: true },
  end: { type: Date, required: true },
});

module.exports = mongoose.model('Appointmentparamedic', appointmentparamedicSchema);