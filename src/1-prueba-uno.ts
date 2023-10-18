import axios from "axios";

async function pruebaUno() {
  const res = await axios.get("https://fakestoreapi.com/products");
  console.log(res.data);
}

pruebaUno();
