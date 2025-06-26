import mongoose from 'mongoose';

// Sub-schema for the `log` field
const logSchema = new mongoose.Schema({
  alarm: { type: String, required: true },
  face_detection: { type: Boolean, required: true },
  detection: { type: String, required: true },
  camera: { type: Number, required: true },
  number: { type: String, required: true } // changed from Mixed to String for phone number
}, { _id: false });

// Main schema for detection events
const detectionEventSchema = new mongoose.Schema({
  timestamp: {
    type: String,  // or `Date` if you're pushing ISO-formatted timestamps
    required: true
  },
  log: {
    type: logSchema,
    required: true
  }
});

// Export model using a variable
const DetectionEvent = mongoose.models.DetectionEvent ||
  mongoose.model('DetectionEvent', detectionEventSchema, 'detection_events');

export default DetectionEvent;
export { DetectionEvent };
