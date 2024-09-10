import mongoose from "mongoose";

const connectToMongoDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("connected to MongoDB Successfully");
        
    } catch (error) {
        console.log(error,"Error in connecting to MongoDB");
        process.exit(1);
    }
}

export default connectToMongoDB;