import React from "react";
import { Posts } from "../../components/Posts";
import { Container } from "../../components/Container";
import { Typo } from "../../components/Typo";

const INITIAL_POST = [
  {
    id: 1,
    title: "Post 1",
    image:
      "https://foxtime.ru/wp-content/uploads/fly-images/83688/65-1-2190x1230.jpg",
  },
  {
    id: 2,
    title: "Post 2",
    image:
      "https://foxtime.ru/wp-content/uploads/fly-images/83688/65-1-2190x1230.jpg",
  },
  {
    id: 3,
    title: "Post 3",
    image:
      "https://foxtime.ru/wp-content/uploads/fly-images/83688/65-1-2190x1230.jpg",
  },
];

export const MainPage = () => (
  <>
    <Container>
      <Typo>Свежие публикации</Typo>
      <Posts posts={INITIAL_POST} />
    </Container>
  </>
);
