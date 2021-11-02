const express = require("express");

const app = express();

app.get("/courses", (req, res) => {
  return res.json(["Curso_1", "Curso_2", "Curso_3"]);
});

app.post("/courses", (req, res) => {
  return res.json(["Curso_1", "Curso_2", "Curso_3", "Curso_4"]);
});

app.put('/courses/:id', (req, res) => {
  return res.json(["Curso_5", "Curso_2", "Curso_3", "Curso_4"]);
});

app.patch('/courses/:id', (req, res) => {
  return res.json(["Curso_5", "Curso_6", "Curso_3", "Curso_4"]);
})

app.delete('/couses/:id', (req, res) => {
  return res.json(["Curso_5", "Curso_6"]);
})

app.listen(3333, () => {
  console.log("Server is running!");
});
