import mongoose from "mongoose";
const mdbc = async() =>
{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('cinnection succesful');
    }
    catch(error)
    {
        console.log('error',error.message);
    }
}
export default mdbc;