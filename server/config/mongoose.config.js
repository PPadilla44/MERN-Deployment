const mongoose = require("mongoose");
const DB = "beltexam";

mongoose.set('runValidators', true);


mongoose.connect(`mongodb://localhost/${DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})
    .then(() => console.log("Establishing a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));