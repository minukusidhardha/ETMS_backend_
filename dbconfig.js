const mongoose=require('mongoose');
async function dbconnect(){
    try{
        await mongoose.connect('mongodb+srv://minukusidhardh:sidhu123@projectcluster1.y10st.mongodb.net/etms?retryWrites=true&w=majority&appName=projectCluster1');
        console.log('db connected');

    }
    catch(err){
        console.log('connection failed '+err)
    }
}
module.exports=dbconnect;