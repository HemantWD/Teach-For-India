import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// admin schema
const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

const Admin = mongoose.model("Admin", adminSchema);

// Seed the admin data in the database
const seedAdminData = async () => {
  try {
    const adminExits = await Admin.exists({ isAdmin: true });
    if (!adminExits) {
      const adminUser = new Admin({
        name: "Admin",
        email: "admin@admin.com",
        password: "admin@1234",
        isAdmin: true,
      });
      await adminUser.save();
      console.log("Admin Created Successfully");
    } else {
      console.log("Admin already exits");
    }
  } catch (error) {
    console.log("Error in seeding data:", error);
  } finally {
    mongoose.connection.close();
  }
};

// Connect to mongodb

try {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Connected to MongoDB");
  await seedAdminData();
} catch (error) {
  console.error("Error connecting to MongoDB:", error);
}

seedAdminData();
