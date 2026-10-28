import express from "express";
import db from "./repository/index.js";

const app = express();
app.use(express.json());


app.post("/api/v1/pessoa", (req, res) => {

    const { id, cpf, email } = req.body

    if (! id || !cpf || !email) {
        return res.status(400).json({ error: "Envie todos os campos obrigatórios" });
    }

    db.push({ id, cpf, email });
    return res.status(201).json({ message: "Usuário criado com sucesso!" });
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

