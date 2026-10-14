import express from "express";
const app = express();

app.get("/api/pessoa/:id", (req, res) => {
    const { id } = req.params;
    res.send({ id });
});

app.get("/api/soma", (req, res) => {
    const num1 = Number(req.query.num1)
    const num2 = Number(req.query.num2)

    res.send({ soma: num1 + num2 })
})

app.get("/api/sub/:num1/:num2", (req, res) => {
    const num1 = Number(req.params.num1)
    const num2 = Number(req.params.num2)

    res.send({ sub: num1 - num2 })
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});