import mongoose from "mongoose";

/**
 * Connects to MongoDB using mongoose.
 */
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connection successful");
    } 
    catch (error) {
        throw new Error("Error in connecting to mongodb");
    }
}

export default connect;