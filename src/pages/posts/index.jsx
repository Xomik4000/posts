import React from "react";
import { Posts } from "../../components/Posts";
import { Container } from "../../components/Container";
import { Typo } from "../../components/Typo";

export const INITIAL_POST = [
  {
    id: 1,
    title: "Post 1",
    image:
      "https://foxtime.ru/wp-content/uploads/fly-images/83688/65-1-2190x1230.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dicta hic nihil saepe sed in cupiditate laborum nulla itaque repellat odio expedita culpa, deserunt ex necessitatibus placeat facilis. Exercitationem, repellendus.",
  },
  {
    id: 2,
    title: "Post 2",
    image:
      "https://foxtime.ru/wp-content/uploads/fly-images/83688/65-1-2190x1230.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dicta hic nihil saepe sed in cupiditate laborum nulla itaque repellat odio expedita culpa, deserunt ex necessitatibus placeat facilis. Exercitationem, repellendus.",
  },
  {
    id: 3,
    title: "Post 3",
    image:
      "https://foxtime.ru/wp-content/uploads/fly-images/83688/65-1-2190x1230.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dicta hic nihil saepe sed in cupiditate laborum nulla itaque repellat odio expedita culpa, deserunt ex necessitatibus placeat facilis. Exercitationem, repellendus.",
  },
  {
    id: 4,
    title: "Post 4",
    image:
      "https://foxtime.ru/wp-content/uploads/fly-images/83688/65-1-2190x1230.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dicta hic nihil saepe sed in cupiditate laborum nulla itaque repellat odio expedita culpa, deserunt ex necessitatibus placeat facilis. Exercitationem, repellendus.",
  },
  {
    id: 5,
    title: "Post 5",
    image:
      "https://foxtime.ru/wp-content/uploads/fly-images/83688/65-1-2190x1230.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dicta hic nihil saepe sed in cupiditate laborum nulla itaque repellat odio expedita culpa, deserunt ex necessitatibus placeat facilis. Exercitationem, repellendus.",
  },
  {
    id: 6,
    title: "Post 6",
    image:
      "https://foxtime.ru/wp-content/uploads/fly-images/83688/65-1-2190x1230.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dicta hic nihil saepe sed in cupiditate laborum nulla itaque repellat odio expedita culpa, deserunt ex necessitatibus placeat facilis. Exercitationem, repellendus.",
  },
];

export const PostsPage = () => (
  <>
    <Container>
      <Typo>Публикации</Typo>
      <Posts posts={INITIAL_POST} />
    </Container>
  </>
);
