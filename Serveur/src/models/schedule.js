const mongoose = require("mongoose");

const scheduleSchema = new mongoose.Schema({
  reference: { type: Number, required: true, unique: true },
  hourly: [
    {
      dayOfWeek: { type: String, required: true },
      startTime: { type: Date, required: true },
      endTime: { type: Date, required: true },
      shiftType: { type: String, required: true },
      roomNumber: { type: Number, required: true }
    }
  ],
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor", required: false },
  serviceManager: { type: mongoose.Schema.Types.ObjectId, ref: "ServiceManager", required: false }
}, { timestamps: false, versionKey: false });

const Schedule = mongoose.model("Schedule", scheduleSchema);

module.exports = Schedule;
