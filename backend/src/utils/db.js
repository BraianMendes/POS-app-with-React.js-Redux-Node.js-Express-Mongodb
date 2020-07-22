var mongoose = require( 'mongoose' ); 

// mongoose.connect(process.env.MONGODB_URL); 
mongoose.connect('mongodb+srv://admin:admin2020!@cluster0.e6d4n.mongodb.net/dbPOS_app?retryWrites=true&w=majority', {useNewUrlParser: true}) 
 
mongoose.connection.on("connected", function() {
  console.log("Mongoose default connection open");
});

mongoose.connection.on("error", function(err) {
  console.log("Mongoose default connection error: " + err);
});

mongoose.connection.on("disconnected", function() {
  console.log("Mongoose default connection disconnected");
});

process.on("SIGINT", function() {
  mongoose.connection.close(function() {
    console.log(
      "Mongoose default connection disconnected through app termination"
    );
    process.exit(0);
  });
});