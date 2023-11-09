// useState para salvar os dados
// useEffect para fazer as requisições apenas 1 vez
import { useState, useEffect } from "react";
import "./App.css";
import { useFetch } from "./hooks/useFetch";

const url = "http://localhost:3000/products";

function App() {
  // 1- resgatando dados
  const [products, setProducts] = useState([]);

  // 2- adicionar produtos
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // 4 - custom hook
  const { data: items, httpConfig, loading, error } = useFetch(url);

  // 1- resgatando dados
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(url);

  //     const data = await res.json();

  //     setProducts(data);
  //   }

  //   fetchData();
  // }, []);

  // 2- adicionar produtos
  const handleSubmit = async (e) => {
    e.preventDefault();

    // construindo o objeto
    const product = {
      name,
      price,
    };

    // enviando o objeto pelo fetch(POST)
    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(product),
    // });

    // // 3- carregamento dinâmico
    // const addedProduct = await res.json();

    // setProducts((prevProducts) => [...prevProducts, addedProduct]);

    // 5 - reaftorando post
    httpConfig(product, "POST");

    // resetando inputs
    setName("");
    setPrice("");
  };

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {/* 6 - loading  */}
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      <ul>
        {items &&
          items.map((product) => (
            <li key={product.id}>
              {product.name} - R$ {product.price}
            </li>
          ))}
      </ul>
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              value={name}
              name="name"
              placeholder="Nome do produto"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            <input
              type="number"
              value={price}
              name="price"
              placeholder="Preço do produto"
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          {loading && <input type="submit" disabled value="Aguarde..." /> }
          {!loading && <input type="submit" value="Criar" /> }
        </form>
      </div>
    </div>
  );
}

export default App;
