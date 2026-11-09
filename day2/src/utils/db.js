import mongoose from 'mongoose';

export const userModel =
  mongoose.models.User ||
  mongoose.model(
    "User",
    new mongoose.Schema({
      username: String,
      password: String,
      email: String,
    }),
  );
await mongoose.connect(process.env.DATABASE_URL)
 