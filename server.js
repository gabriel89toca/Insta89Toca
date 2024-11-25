import express from "express";


const posts = [
    {
      descricao: "gato fazendo brincadeiras",
      imagem: "c:/teste/pagina/imagem1.png"
    },
    {
      descricao: "Paisagem montanhosa ao amanhecer",
      imagem: "montanha_amanhecer.jpg"
    },
    {
      descricao: "Cachorro correndo na praia",
      imagem: "cachorro_praia.png"
    },
    {
      descricao: "Pratos deliciosos da culinária italiana",
      imagem: "comida_italiana.jpg"
    },
    {
      descricao: "Cidade moderna à noite",
      imagem: "cidade_noite.jpg"
    }
  ];

const app = express();

app.listen(3000, () => {
    app.use(express.json());
    console.log("Servidor escutando...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});