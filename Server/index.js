const express =require("express");
const http= require("http")
const bodyParser = require("body-parser")
require("./db")
const router = require("./router")
const cors = require('cors')
const app = express();

var corsOptions={
  origin: "http://localhost:4200"
};

app.use(cors(corsOptions));
app.use(express.json())
app.use(router);
app.use(cors())




const server = http.createServer(app);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


/////////////////// PORT CONFIGURATION ////////////////////////
const port = process.env.PORT || 3000;
server.listen(port, () =>{
  console.log(`started on port : `,port)
})


