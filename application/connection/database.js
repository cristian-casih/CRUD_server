const mongoose = require('mongoose');

try {
    mongoose.connect('mongodb://localhost:27017/crud', {useNewUrlParser: true,useUnifiedTopology: true });
    mongoose.Promise = Promise;
    console.log('DB connect');
    
}
catch (e) {
    console.log(`[WARNING] Could not connect to MongoDB`);
    console.log('[WARNING] Make sure Mongo is installed and running');
}
module.exports=mongoose;
