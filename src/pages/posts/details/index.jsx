import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { Typo } from "../../../components/ui/Typo";
import { Container } from "../../../components/ui/Container";
import { Link } from "../../../components/ui/Link";
import * as SC from "./styles";
import {
  getPostById,
  showPosts,
  deletePost,
} from "../../../redux/slices/postsSlice";

export const DetailPostPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { list } = useSelector((state) => state.posts.posts);
  const postForView = useSelector((state) => state.posts.postForView);
  const { user } = useSelector((state) => state.auth);

  const [postForDelete, setPostForDelete] = useState(null);

  const showEditAndDeleteBtn = list && user;

  const onDeletePost = () => {
    dispatch(deletePost(postForDelete));

    setPostForDelete(null);

    return navigate("/posts");
  };

  useEffect(() => {
    const intId = Number(id);
    const findedPosts = list
      ? list.find((item) => item.id === intId)
      : undefined;

    if (findedPosts) {
      dispatch(showPosts(findedPosts));
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

  console.log(postForDelete);

  const { post } = postForView;

  const image =
    post.image ||
    "https://img.gazeta.ru/files3/589/11736589/totoro-pic4_zoom-1500x1500-89026.jpg";

  return (
    <Container>
      {postForDelete && (
        <SC.ModalWrapper>
          <SC.Modal>
            <SC.ModalText>
              Вы точно уверены, что хотите удалить публикацию с ID -{" "}
              {postForDelete.id}?
            </SC.ModalText>
            <SC.ModalContent>
              <SC.DeleteButton onClick={onDeletePost}>Да</SC.DeleteButton>
              <button onClick={() => setPostForDelete(null)}>Нет</button>
            </SC.ModalContent>
          </SC.Modal>
        </SC.ModalWrapper>
      )}
      <Typo>{post.title}</Typo>
      <SC.Image src={image} alt={post.title} />
      <SC.Text>{post.body}</SC.Text>
      <div style={{ clear: "both" }}></div>
      <SC.LinkWrapper>
        <Link to="/posts/">Обратно к публикациям</Link>
        {showEditAndDeleteBtn && (
          <Link to={`/posts/${post.id}/edit`}>Редактировать</Link>
        )}
        {showEditAndDeleteBtn && (
          <SC.DeleteButton onClick={() => setPostForDelete(post)}>
            Удалить
          </SC.DeleteButton>
        )}
      </SC.LinkWrapper>
    </Container>
  );
};
