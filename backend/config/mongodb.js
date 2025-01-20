import mongoose from "mongoose";

const connectDB = async () => {
    mongoose.connection.on('Connected',()=>{
        console.log("DB Connected")
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/Cluster0`)
}
export default connectDB;