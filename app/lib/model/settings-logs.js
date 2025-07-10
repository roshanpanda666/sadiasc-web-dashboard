import mongoose from "mongoose";

const SettingsLogSchema = new mongoose.Schema(
  {
    time: {
      type: String,
      required: true,
    },
    action: {
      type: String,
      required: true,
      enum: [
        "sound_selected",
        "detection_started",
        "open_config",
        "open_file",
        "run_script",
        "open_cmd",
        "manual_push",
      ],
    },
    value: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt
    collection: "settings-log", // 👈 FORCE exact collection name
  }
);

// ✅ Export with fallback to prevent re-registration
export default mongoose.models.SettingsLog || mongoose.model("SettingsLog", SettingsLogSchema);
