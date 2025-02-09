import mongoose from 'mongoose';

export const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-jwu6ydn-shard-00-00.swq1lyp.mongodb.net:27017,ac-jwu6ydn-shard-00-01.swq1lyp.mongodb.net:27017,ac-jwu6ydn-shard-00-02.swq1lyp.mongodb.net:27017/?ssl=true&replicaSet=atlas-n41q54-shard-0&authSource=admin&retryWrites=true&w=majority`
    // const URL = `mongodb+srv://${username}:${password}@ecommerce-web.swq1lyp.mongodb.net/?retryWrites=true&w=majority&appName=ecommerce-web`
    try {  
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Succesfully');
    } catch (error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;