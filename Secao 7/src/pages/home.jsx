import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const home = () => {
  const url = "http://localhost:3000/products";

  const { data: items, loading, error } = useFetch(url);

  return(
  <div>
    <h2>Produtos</h2>
    {error && <p>{error}</p> }
    <ul className="products">
        {items && items.map((item) => (
          <li key={item.id}>
            <p>{item.name} - R$ {item.price}</p>
          </li>
        ))}
    </ul>
  </div>
  )
};

export default home;
