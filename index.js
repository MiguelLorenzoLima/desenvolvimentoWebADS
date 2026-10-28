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



http://localhost:3000/api/v1/pessoa/1
app.get("/api/v1/pessoa/:id", (req, res) => {
    const { id } = req.params;
    const pessoa = db.find((p) => p.id === Number(id));
    if (!pessoa) {
        return res.status(404).json({ error: "Usuário não encontrado" });
    }
    return res.status(200).json(pessoa);
});



//http://localhost:3000/api/v1/pessoa/1
app.put("/api/v1/pessoa/:id", (req, res) => {
const { id } = req.params;
const { cpf, email } = req.body;
const pessoaIndex = db.findIndex((p) => p.id === Number(id));
if (pessoaIndex === -1) {
    return res.status(404).json({ error: "Usuário não encontrado" }); 
}

db[pessoaIndex] = { id: Number(id), cpf, email };
return res.status(200).json({
    message: "Usuário atualizado com sucesso!",
    pessoa: db[pessoaIndex],
    });

});

// {
//   "cpf": "123.456.789-00",
//   "email": "novo@email.com"
// }




    
//http://localhost:3000/api/v1/pessoa/1
app.delete("/api/v1/pessoa/:id", (req, res) => {
    const { id } = req.params;
    const pessoaIndex = db.findIndex((p) => p.id === Number(id)); 
    if(pessoaIndex === -1) {
        return res.status(404).json({ error: "Usuário não encontrado" });
    }
    return res.status(200).json({
        message: "Usuário deletado com sucesso!",
        pessoa: db.splice(pessoaIndex, 1),
    });
});



app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

