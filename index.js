import express from "express";
const app = express();

app.get("/api/pessoa/:id", (req, res) => {
    const { id } = req.params;
    res.send({ id });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});