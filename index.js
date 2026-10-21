import express from "express";
const app = express();
app.use(express.json());

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




//http://localhost:3000/api/somaDecimal?num1=2.5&num2=3.7
app.get("/api/somaDecimal", (req, res) => {
    const num1 = Number(req.query.num1)
    const num2 = Number(req.query.num2)

    res.send({ soma: num1 + num2 })
})

app.get("/api/somaDecimal/:num1/:num2", (req, res) => {
    const num1 = Number(req.params.num1)
    const num2 = Number(req.params.num2)

    res.send({ sub: num1 - num2 })
})



//http://localhost:3000/api/salarioTotal
app.post("/api/salarioTotal", (req, res) => {
    const num1 = Number(req.body.num1)
    const num2 = Number(req.body.num2)

    res.send({ soma: num1 * num2 })
})



app.listen(3000, () => {
    console.log("Server is running on port 3000");
});