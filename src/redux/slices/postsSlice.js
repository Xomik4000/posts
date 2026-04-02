import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    {
      id: 6,
      title: "Post 6",
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
      id: 4,
      title: "Post 4",
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
      id: 2,
      title: "Post 2",
      image:
        "https://foxtime.ru/wp-content/uploads/fly-images/83688/65-1-2190x1230.jpg",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dicta hic nihil saepe sed in cupiditate laborum nulla itaque repellat odio expedita culpa, deserunt ex necessitatibus placeat facilis. Exercitationem, repellendus.",
    },
    {
      id: 1,
      title: "Post 1",
      image:
        "https://foxtime.ru/wp-content/uploads/fly-images/83688/65-1-2190x1230.jpg",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dicta hic nihil saepe sed in cupiditate laborum nulla itaque repellat odio expedita culpa, deserunt ex necessitatibus placeat facilis. Exercitationem, repellendus.",
    },
  ],
  postForView: null,
  freshPosts: null,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.list = action.payload;
    },
    editPost: (state, action) => {},
    getPosts: (state, action) => {
      state.postForView = state.list.find((item) => item.id === action.payload);
    },
    getFreshPosts: (state) => {
      state.freshPosts = state.list.slice(0, 3)
    },
    addPost: (state, action) => {},
  },
});

export const { setPosts, editPost, getPosts, getFreshPosts, addPost } = postsSlice.actions;

export default postsSlice.reducer;
