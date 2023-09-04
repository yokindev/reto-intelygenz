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

  console.log(data);
  console.log(loading);
  console.log(error);
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
              </NewsContent>
            </NewsItem>
          ))}
        </NewsContainer>
      </HomeContainer>
    </>
  );
};
