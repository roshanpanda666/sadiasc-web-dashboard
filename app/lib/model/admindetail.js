import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true  // Optional: Prevent duplicate entries
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true  // Optional: adds createdAt and updatedAt fields
});

// Use "admin_users" as the collection name
const AdminUser = mongoose.models.AdminUser || mongoose.model("AdminUser", adminSchema, "admin_users");

export default AdminUser;