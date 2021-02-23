const state = {
  profilePage: {
    posts: [
      {
        id: 1,
        message: 'good',
        likesCount: 12,
      },
      {
        id: 2,
        message: 'yup',
        likesCount: 11,
      },
    ],
  },
  messagePage: {
    dialogs: [
      {
        id: 1,
        name: 'Dima',
      },
      {
        id: 2,
        name: 'Anton',
      },
    ],
    messages: [
      {
        id: 1,
        message: 'how are you',
      },
      {
        id: 2,
        message: 'hoki',
      },
    ],
  },
};

export const addPost = (newPostText) => {
  const newPost = {
    id: 4,
    message: newPostText,
    likesCount: 0,
  };

  state.profilePage.posts.push(newPost);
};

export default state;
