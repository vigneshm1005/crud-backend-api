import app from "./app.js";
import connectDB from "./config/db.js";
import morgan from "morgan";

connectDB();

app.use(morgan());

app.get("/test",(req,res)=>{
    res.send({"msg":"hii"})
})

app.listen(3000,()=>{
    console.log("server run on 3000");
    
});