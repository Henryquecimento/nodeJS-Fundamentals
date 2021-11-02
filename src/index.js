const express = require("express");

const app = express();

app.use(express.json());

app.get("/courses", (req, res) => {
  const query = req.query;

  console.log(query);

  return res.json(["Curso_1", "Curso_2", "Curso_3"]);
});

app.post("/courses", (req, res) => {
  const body = req.body;

  console.log(body);

  return res.json(["Curso_1", "Curso_2", "Curso_3", "Curso_4"]);
});

app.put('/courses/:id', (req, res) => {
  const { id } = req.params;

  console.log(id);

  return res.json(["Curso_5", "Curso_2", "Curso_3", "Curso_4"]);
});

app.patch('/courses/:id', (req, res) => {
  const { id } = req.params;

  console.log(id);

  return res.json(["Curso_5", "Curso_6", "Curso_3", "Curso_4"]);
})

app.delete('/courses/:id', (req, res) => {
  const { id } = req.params;

  console.log(id);

  return res.json(["Curso_5", "Curso_6"]);
})

app.listen(3333, () => {
  console.log("Server is running!");
});
