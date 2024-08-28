//one to many --->for thousands of data 

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
const orderSchema= new Schema({
    item:String,
    price:Number,
 });

const customerSchema=new Schema({
    name:String,
    orders:[
        {
            type:Schema.Types.ObjectId,  //to define id of child element in parent
            ref:"Order",
        },
    ],
});





//#Handling Deletion

// customerSchema.pre("findOneAndDelete", async ()=>{
//     console.log("pre deleted");
// });

customerSchema.post("findOneAndDelete", async (customer)=>{
    if(customer.orders.length){
        let res = await Order.deleteMany({_id:{$in: customer.orders}});
        console.log(res);
    }
});




//creating model

const Order=mongoose.model("Order",orderSchema);
const Customer=mongoose.model("Customer",customerSchema);




const addCustomer=async()=>{
//     let cust1=new Customer({
//         name:"Rahul",
//     });
// let order1=await Order.findOne({item:"Chips"});
// let order2=await Order.findOne({item:"Samosa"});

// cust1.orders.push(order1);
// cust1.orders.push(order2);

// let res = await cust1.save();
// console.log(res);
let result= await Customer.find({})       //populate used to get whole object
.populate("orders");
console.log(result);

};
addCustomer();



// const addOrder=async()=>{
//    let res = await Order.insertMany([
//         {item:"Samosa",price:15},
//         {item:"Chips",price:20},
//         {item:"Chocolate",price:50},
//     ]);
//     console.log(res);
// }
// addOrder();


 
// making function to add new customer and order

const addCust=async ()=>{
    let newCust= new Customer({
        name:"Rohan Sohan",
    });
    let newOrder= new Order({
        item:"Burger",
        price:540,
    });
    newCust.orders.push(newOrder);
    await newCust.save();
    await newOrder.save();
    console.log("new data added to the database");
};

const delCust = async ()=>{
    let data = await Customer.findByIdAndDelete("65fb1f2ee208ecbe90f6fbaf");
    console.log(data);
}
    
// addCust();
delCust();
 
 