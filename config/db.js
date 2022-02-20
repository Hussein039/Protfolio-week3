
let DB_CONNECTION="mongodb+srv://mdAdmin:benNdcWokZ1k7YC1@cluster0mycomp229.cvxtd.mongodb.net/comp229";
//Database setup
let mongoose = require ('mongoose');

module.exports=function(){

    mongoose.connect(DB_CONNECTION);

    let mongodb = mongoose.connection;
        mongodb.on('error', console.error.bind(console, 'Connection Error'));
        mongodb.once('open', ()=>{
        console.log('Connected to MongoDB...');
    })

    return mongodb;
}
