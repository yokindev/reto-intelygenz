import { useLocation } from "react-router-dom";

export const NewsPage = () => {
  const {state} = useLocation();

  const {news} = state
  console.log(news);

  if (!news) {
    return <div>No data available</div>;
  }


  return (
    <>
      <h1>NewsPage</h1>
    </>
  );
};
