export const getPost = (id) => {
  return {
    type: "POST_ID",
    payload: id,
  };
};

export const deletePost = (id) => {
  return {
    type: "DELETE",
    payload: id,
  };
};
