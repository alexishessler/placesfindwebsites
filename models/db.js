const mongoose = require('mongoose');

// useNewUrlParser
const options = {
  connectTimeoutMS: 5000,
  useNewUrlParser: true,
  useUnifiedTopology: true
};

mongoose.connect(
`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PWD}@cluster0.fke2d.gcp.mongodb.net/placesfindwebsites?retryWrites=true&w=majority`,
options,
function (err) {
    if (err) {
    console.log(err);
    } else {
    console.log(
        `\n\n***************************\n***************************\n***************************\n\n DATABASE IS CONNECTED! on DEV \n\n***************************\n***************************\n***************************\n\n`
    );
    }
}
);


module.exports = mongoose;