import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HomeTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const NewsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const NewsItem = styled.div`
  margin-bottom: 20px;
  border: 1px solid #ccc;
  padding: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  background-color: #fff;
`;

export const NewsImage = styled.img`
  max-width: 100%;
  height: auto;
`;

export const NewsContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NewsTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const NewsDescription = styled.p`
  font-size: 1rem;
`;
