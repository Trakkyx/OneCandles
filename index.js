//initialise all the plugins
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path")

//include all the api scripts in the main js file
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const productRoute = require("./routes/product");

dotenv.config();


mongoose.connect(
process.env.MONGO_URL
).then(() => console.log("DBconnection Successful"))
.catch((err) => {
console.log(err);
});

//set express to send everything in json format
app.use(express.json());

//set the routes for each api scripts and activate them
app.use("/api/auth",authRoute);
app.use("/api/user",userRoute);
app.use("/api/product",productRoute);
app.use("/api/cart",cartRoute);
app.use("/api/order",orderRoute);

if(process.env.NODE_ENV === "production"){
app.use(express.static("client/build"));


app.get("*",(req,res)=>{
res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));

})



}


//tell nodejs which port you want to use
app.listen(process.env.PORT || 5000, ()=>{


    console.log("Backend server is running!");
})