import { useFetch } from "../../services/useFetch";

export const HomePage = () => {
  const { data, loading, error } = useFetch(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=7dacb71b9ab2496c8726f0dbac65acef"
  );

  console.log(data);
  console.log(loading);
  console.log(error);
  return (
    <>
      <h1>HomePage</h1>
    </>
  );
};
