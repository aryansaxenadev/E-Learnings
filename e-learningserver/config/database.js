import mongoose from "mongoose"
export const connectDB = async () => {
    mongoose.set('strictQuery', true);
    const { connection } = await mongoose.connect("mongodb+srv://saxenashivansh48123:y65fQCEEuCKkLpqh@cluster0.86wmw2z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    console.log(`MongoDB Connected with aryan`)
}