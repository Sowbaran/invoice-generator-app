const express = require("express")
const app = express();
const port = 8000;
const InvoiceRouter =  require("./routes/invoiceRoutes");
const userRouter =  require("./routes/userRoutes");
const clientRouter =  require("./routes/clientRoutes");
const DB = require("./dbConfig/dbConnection")
DB();
app.use(express.json());

app.use("/api",InvoiceRouter,userRouter,clientRouter)

app.listen(port,()=>{
    console.log(`App is listening at port ${port}`)
})