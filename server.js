import express from "express";
import conectarAoBanco from "./src/config/dbConfig.js";  //no front-end não precisa de .js nas no backend sim

const conexao =  await conectarAoBanco(process.env.STRING_CONEXAO);

let nextId = 1;

// const posts = [
//   {
//     id: nextId++,
//     descricao: "gato fazendo brincadeiras",
//     imagem: "c:/teste/pagina/imagem1.png"
//   },
//   {
//     id: nextId++,
//     descricao: "Paisagem montanhosa ao amanhecer",
//     imagem: "montanha_amanhecer.jpg"
//   },
//   {
//     id: nextId++,
//     descricao: "Cachorro correndo na praia",
//     imagem: "cachorro_praia.png"
//   },
//   {
//     id: nextId++,
//     descricao: "Pratos deliciosos da culinária italiana",
//     imagem: "comida_italiana.jpg"
//   },
//   {
//     id: nextId++,
//     descricao: "Cidade moderna à noite",
//     imagem: "cidade_noite.jpg"
//   }
// ];

const app = express();

app.listen(3000, () => {
    app.use(express.json());
    console.log("Servidor escutando...");
});

async function getTodosPosts() {
  const db = conexao.db("Imersao-Insta89toca");
  const colecao = db.collection("posts");
  return colecao.find().toArray()
}  

app.get("/posts", async (req, res) => {
    const posts = await getTodosPosts()  
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