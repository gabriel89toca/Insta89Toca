import express from "express";


let nextId = 1;

const posts = [
  {
    id: nextId++,
    descricao: "gato fazendo brincadeiras",
    imagem: "c:/teste/pagina/imagem1.png"
  },
  {
    id: nextId++,
    descricao: "Paisagem montanhosa ao amanhecer",
    imagem: "montanha_amanhecer.jpg"
  },
  {
    id: nextId++,
    descricao: "Cachorro correndo na praia",
    imagem: "cachorro_praia.png"
  },
  {
    id: nextId++,
    descricao: "Pratos deliciosos da culinária italiana",
    imagem: "comida_italiana.jpg"
  },
  {
    id: nextId++,
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

function buscarPostPorID(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
}

app.get("/posts/:id", (req, res) => {

    const index = buscarPostPorID(req.params.id)
    res.status(200).json(posts[index]);
});