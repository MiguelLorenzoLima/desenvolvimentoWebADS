import express from "express";
import db from "./repository/index.js";

const app = express();
app.use(express.json());

//http://localhost:3000/api/v1/pessoa
app.post("/api/v1/pessoa", (req, res) => {
    const { id, cpf, email } = req.body

    if (! id || !cpf || !email) {
        return res.status(400).json({ error: "Envie todos os campos obrigatórios" });
    }

    db.push({ id, cpf, email });
    return res.status(201).json({ message: "Usuário criado com sucesso!" });
});

// {
//   "id": 1,
//   "cpf": "12345678900",
//   "email": "usuario@email.com"
// }


app.get("/api/v1/pessoa/:id", (req, res) => {
    const { id } = req.params;
    const pessoa = db.find((p) => p.id === id);
    if (!pessoa) {
        return res.status(404).json({ error: "Usuário não encontrado" });
    }
    return res.status(200).json(pessoa);
});


app.put("/api/v1/pessoa/:id", (req, res) => {


});
    

app.delete("/api/v1/pessoa/:id", (req, res) => {
});



app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

