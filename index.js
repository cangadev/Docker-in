const express= require('express');

const app = express()

app.get("/", (req, res)=>{
    res.send("Ola Mundiididi")
})

app.listen("3031",()=>{
    console.log("ola mundo!")
} )
