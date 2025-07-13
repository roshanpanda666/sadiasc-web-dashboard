import mongoose from "mongoose";

const CurrentSettingsSchema = new mongoose.Schema(
  {
    time: {
      type: String,
      required: true,
    },
    sound: {
      type: String,
      default: "0",
    },
    camera: {
      type: String,
      default: "0",
    },
    config: {
      type: String,
      default: "0",
    },
    file: {
      type: String,
      default: "0",
    },
    script: {
      type: String,
      default: "0",
    },
    cmd: {
      type: String,
      default: "0",
    },
  },
  {
    timestamps: true,
    collection: "settings-log", // 🔥 Your snapshot collection name
  }
);

export default mongoose.models.CurrentSettings ||
  mongoose.model("CurrentSettings", CurrentSettingsSchema);
