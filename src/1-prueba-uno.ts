import axios from "axios";

const endpoint = (): string => {
  return "https://fakestoreapi.com/products";
};

async function getProducts(api: any) {
  const res = await axios.get(api);
  console.log(res.status);
}

getProducts(endpoint);
