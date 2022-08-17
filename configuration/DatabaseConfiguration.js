
const Package = require('../package.json');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://uswa:uswa@e-commerce.xd3evcg.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, (error,connection) => {
    if (!error) {
        console.log(`\nMongoDB has connected successfully at MongoAtlas with Database Name e-Commerce\n`);
        console.log("Your app gas the following 3 dependencies\n");
        for (let dependencies in Package.dependencies) {
            console.log(dependencies);
        }
    }
    else { console.log('Error: Not Connected to the MongoDb\n' + error) }
});
