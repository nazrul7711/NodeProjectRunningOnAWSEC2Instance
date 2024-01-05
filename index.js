let app = require("express")()

app.get("/",(req,res)=>{
  res.send("kill bill")
})



app.listen(4000,()=>{
  console.log("listening on porst 4000")
})