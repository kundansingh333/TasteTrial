// one to many---->for less no. of data


const mongoose = require("mongoose");
const {Schema}=mongoose;


main()
.then(()=>{
    console.log("connection successfully");
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}
//creating schema
const userSchema= new Schema({
    username:String,
    addresses:[
        {
            _id:false,    //when we not want id
            location:String,
            city:String,
        }
    ],
});

//creating model
const User=mongoose.model("User",userSchema);

//inserting data into schema
const addUsers=async()=>{
    let user1=new User({
        username:"sherlockholms",
        addresses:[{
            location:"21BB Baker Street",
            city:"London",
        }],
        
    })
    user1.addresses.push({location:"P32 Wall Street",city:"London"});
    let result=await user1.save();
    console.log(result);
};
addUsers();

