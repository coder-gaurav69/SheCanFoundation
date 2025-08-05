const mongoose=require('mongoose')
const dbConnect = () => {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser:true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB Connection is Successful"))
    .catch( (error) => {
        console.log("Issue in DB Connection");
        console.error(error.message);
        
        process.exit(1);
    } );
}

module.exports = dbConnect;