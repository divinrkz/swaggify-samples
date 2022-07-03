const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017/swaggify-example1';

const connectDB = async () => {
    try {
        await mongoose.connect(DB_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log ('MongoDB is connected')
    }
    catch(err) {
        console.error(err);
        process.exit(1);
    }
};

connectDB();
