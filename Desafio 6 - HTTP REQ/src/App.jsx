import { useEffect, useState } from "react";
import "./App.css";
import { useFetch } from "./hooks/useFetch";

const url = "http://localhost:3000/products";

function App() {
  // conexão com o useFetch
  const { data: items, httpConfig } = useFetch(url);

  // Criando states de name e price para enviar pro JSON
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // construindo o objeto para enviar
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    // enviando o objeto
    httpConfig(product, "POST");

    // resetando inputs
    setName("");
    setPrice("");
  };

  const handleDelete = async (id) => {
    httpConfig(id, "DELETE");
  };

  return (
    <>
      <h1>Lista de produtos</h1>
      <ul>
        {items &&
          items.map((product) => (
            <li key={product.id}>
              {product.name} - R$ {product.price}
              <button
                className="delete-btn"
                onClick={() => handleDelete(product.id)}
              >
                Deletar
              </button>
            </li>
          ))}
      </ul>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              value={name}
              placeholder="Nome do produto"
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            <input
              type="Number"
              value={price}
              placeholder="Preço do produto"
              name="price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <input type="submit" value="Criar" />
        </form>
      </div>
    </>
  );
}

export default App;
