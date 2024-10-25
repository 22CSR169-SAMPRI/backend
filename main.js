import express from "express";

const app=express();
const port = 5431;
app.get("/",(req,res)=>{
    res.json({msg:"hello"});
});
app.listen(port,()=>{
    console.log(`server running http://localhost:${port}`);
});

