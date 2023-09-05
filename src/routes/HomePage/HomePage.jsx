import { Link } from "react-router-dom";
import { useFetch } from "../../services/useFetch";
import {
  HomeContainer,
  HomeTitle,
  NewsContainer,
  NewsContent,
  NewsDescription,
  NewsImage,
  NewsItem,
  NewsTitle,
} from "./HomePage.styles";

export const HomePage = () => {
  const url =
    "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=7dacb71b9ab2496c8726f0dbac65acef";
  const { data, loading, error } = useFetch(url);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return null;
  }
  console.log(data);
  return (
    <>
      <HomeContainer>
        <HomeTitle>Technology News</HomeTitle>
        <NewsContainer>
          {data?.map((news, index) => (
            <NewsItem key={index}>
              <NewsImage src={news.urlToImage} alt={news.title} />
              <NewsContent>
                <NewsTitle>{news.title}</NewsTitle>
                <NewsDescription>{news.description}</NewsDescription>
                <Link
                  to={`news/${encodeURIComponent(news.title)}`}
                  state={{ news: news }}
                >
                  Read more
                </Link>
              </NewsContent>
            </NewsItem>
          ))}
        </NewsContainer>
      </HomeContainer>
    </>
  );
};
