const initState = {
  posts: [
    {
      id: "1",
      title:
        "Sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat",
    },
    {
      id: "2",
      title: "Dolorem eum magni eos aperiam quia",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat",
    },
    {
      id: "3",
      title: "Ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat",
    },
  ],
  id: 0,
};

export const reducer = (state = initState, action = {}) => {
  switch (action.type) {
    case "POST_ID":
      return {
        ...state,
        id: action.payload,
      };
    case "DELETE":
      const id = action.payload;
      const postsArr = state.posts;
      console.log("instore, before delete:", state.posts);
      return {
        ...state,
        posts: postsArr.filter((post, i, arr) => arr[i + 1] !== arr[id]),
      };
    default:
      return { ...state };
  }
};
