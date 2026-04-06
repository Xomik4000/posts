import React from "react";
import * as SC from "./styles";
import { Link } from "../../../ui/Link";

export const Post = ({ post }) => {
  const image =
    post.image ||
    "https://img.gazeta.ru/files3/589/11736589/totoro-pic4_zoom-1500x1500-89026.jpg";
  return (
    <SC.Post>
      <SC.Image src={image} alt={post.title} />
      <SC.Title>{post.title}</SC.Title>
      <Link to={`/posts/${post.id}`}>Читать далее</Link>
    </SC.Post>
  );
};
