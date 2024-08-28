//  ONE TO MANY (SQUILLIONS)

const mongoose=require("mongoose");
const{Schema}=mongoose;

main()
    .then(()=>{
        console.log("connection successfully");
    })
    .catch((err)=>{
        console.log(err);
    })

async function main(){
    await mongoose .connect('mongodb://127.0.0.1:27017/relationDemo');
}

const userSchema=new Schema({
    username:String,
    email:String,
});
const postSchema=new Schema({       //store parent schema in child schema
    content:String,
    likes:Number,
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
    }
})

const User=mongoose.model("User",userSchema);
const Post=mongoose.model("Post",postSchema);

//### add data

// const addData= async ()=>{
//     // let user1= new User({
//     //     username:"Rahul Kumar",
//     //     email:"rahul@yahoo.in",
//     // });
//     let user= await User.findOne({username:"Rahul Kumar"});

//     let post2=new Post({
//         content:"Hello World!",
//         likes:21,
//     });

//     post2.user=user;
//     // await user.save();
//     await post2.save();

// }
// addData();


//### show details

const getData=async()=>{
    let result = await Post.findOne({}).populate("user","username"); //email bhi aa sakta hai
    console.log(result);
};
getData();

// ### delete data

// let del= async ()=>{
//     await Post.findByIdAndDelete('65f7d74093da4965296507cc');
//     await Post.findByIdAndDelete('65f7d6f98acad4ac60aa5f44');
//     await User.findByIdAndDelete('65f7d69a5cd117c5ae1261a7');
// }
// del();