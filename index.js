import express from "express";
import db from "./repository/index.js";

const app = express();
app.use(express.json());


app.post("/api/v1/pessoa", (req, res) => {
    
    const id = req.body.id;
    const cpf = req.body.cpf;
    const email = req.body.email;
});


app.get("/api/v1/pessoa/:id", (req, res) => {

});


app.put("/api/v1/pessoa/:id", (req, res) => {


});
    

app.delete("/api/v1/pessoa/:id", (req, res) => {
});



app.listen(3000, () => {
    console.log("Server is running on port 3000");
});