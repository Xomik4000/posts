import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Typo } from "../../../components/Typo";
import { Container } from "../../../components/Container";
import { Link } from "../../../components/Link";
import * as SC from "./styles";
import { getPostById, showPosts } from "../../../redux/slices/postsSlice";

export const DetailPostPage = () => {
  const { id } = useParams();

  const { list } = useSelector((state) => state.posts.posts);
  const postForView = useSelector((state) => state.posts.postForView);
  const dispatch = useDispatch();

  useEffect(() => {
    const intId = Number(id);
    const findedPosts = list ? list.find((item) => item.id === intId) : undefined

    if (findedPosts) {
      dispatch(showPosts(findedPosts))
    } else {
      dispatch(getPostById(intId));
    }
  }, [id, list, dispatch]);

  if (postForView.loading) {
    return <Container>Loading...</Container>;
  }

  if (!postForView.post || !postForView.post.hasOwnProperty("id")) {
    return <>Пост не найден</>;
  }

  const { post } = postForView;

  const image =
    post.image ||
    "https://img.gazeta.ru/files3/589/11736589/totoro-pic4_zoom-1500x1500-89026.jpg";

  return (
    <Container>
      <Typo>{post.title}</Typo>
      <SC.Image src={image} alt={post.title} />
      <SC.Text>{post.body}</SC.Text>
      <div style={{ clear: "both" }}></div>
      <SC.LinkWrapper>
        <Link to="/posts/">Обратно к публикациям</Link>
        <Link to={`/posts/${post.id}/edit`}>Редактировать</Link>
      </SC.LinkWrapper>
    </Container>
  );
};
