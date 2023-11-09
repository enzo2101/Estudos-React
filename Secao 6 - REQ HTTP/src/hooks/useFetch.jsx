import { useState, useEffect } from "react";

// 4 - custom hook
export const useFetch = (url) => {
  //state para criar usuário
  const [data, setData] = useState(null);

  //state para fazer carregamento dinâmico a partir do hook
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);

  //loading
  const [loading, setLoading] = useState(false);

  //tratando erros
  const [error, setError] = useState(null)

  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setMethod("POST");
    }
  };

  useEffect(() => {
    const fetchData = async () => {

      // 6 - loading
      setLoading(true);

      try {
        
        const res = await fetch(url);

        const json = await res.json();
  
        setData(json);

      } catch (error) {
        console.log(error.message)

        setError("Houve algum erro ao carregar os dados!")
      }

      setLoading(false);
    };

    fetchData();
  }, [url, callFetch]);

  // 5 - refatorando POST
  useEffect(() => {
    if (method === "POST") {
      const httpRequest = async () => {
        let fetchOptions = [url, config];

        const res = await fetch(...fetchOptions);

        const json = await res.json();

        setCallFetch(json);
      };
      httpRequest();
    }
  }, [config]);

  return { data, httpConfig, loading, error };
};
